import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Health check route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Spotify Auth configuration
  const SPOTIFY_CLIENT_ID = process.env.VITE_SPOTIFY_CLIENT_ID || process.env.SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
  
  // Construct redirect URI dynamically from the request or env
  const getRedirectUri = (req: express.Request) => {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    return `${protocol}://${host}/auth/spotify/callback`;
  };

  app.get("/api/auth/spotify/url", (req, res) => {
    if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
      return res.status(500).json({ 
        error: "Spotify API keys not configured. Please add VITE_SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in the project settings." 
      });
    }

    const redirectUri = getRedirectUri(req);
    const scope = "user-read-private user-read-email user-library-read streaming user-modify-playback-state";
    
    const params = new URLSearchParams({
      client_id: SPOTIFY_CLIENT_ID,
      response_type: "code",
      redirect_uri: redirectUri,
      scope: scope,
      show_dialog: "true"
    });

    res.json({ url: `https://accounts.spotify.com/authorize?${params.toString()}` });
  });

  app.get(["/auth/spotify/callback", "/auth/spotify/callback/"], async (req, res) => {
    const { code } = req.query;
    
    if (!code) {
      return res.send("Error: No code received");
    }

    try {
      const redirectUri = getRedirectUri(req);
      const authOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')
        },
        body: new URLSearchParams({
          code: code as string,
          redirect_uri: redirectUri,
          grant_type: 'authorization_code'
        }).toString()
      };

      const tokenResponse = await fetch('https://accounts.spotify.com/api/token', authOptions);
      const data = await tokenResponse.json();

      // Return simple HTML to talk to parent window and close popup
      res.send(`
        <html>
          <body>
            <script>
              if (window.opener) {
                window.opener.postMessage({ 
                  type: 'SPOTIFY_AUTH_SUCCESS',
                  payload: ${JSON.stringify(data)}
                }, '*');
                window.close();
              } else {
                window.location.href = '/';
              }
            </script>
            <p>Conexión exitosa con Spotify. Esta ventana se cerrará automáticamente.</p>
          </body>
        </html>
      `);
    } catch (error) {
      console.error('Spotify token exchange failed:', error);
      res.status(500).send("Authentication failed");
    }
  });

  // Proxy to fetch user data with token
  app.get("/api/spotify/me", async (req, res) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send("No token");

    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: { 'Authorization': token }
      });
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch Spotify profile" });
    }
  });

  // Export build zip
  app.get("/api/download-build", async (req, res) => {
    const archiverModule = (await import("archiver")) as any;
    
    // Set headers to trigger a file download
    res.attachment('website_files.zip');
    
    // Create an archiver instance
    const archive = (archiverModule.default || archiverModule)('zip', {
      zlib: { level: 9 } // Sets the compression level
    });
    
    // Catch warnings and errors
    archive.on('warning', function(err: any) {
      if (err.code === 'ENOENT') {
        console.warn(err);
      } else {
        throw err;
      }
    });
    archive.on('error', function(err: any) {
      res.status(500).send({ error: err.message });
    });
    
    // Pipe archive data to the response
    archive.pipe(res);
    
    // Append files from dist folder
    archive.directory(path.join(process.cwd(), 'dist'), false);
    
    // Finalize the archive
    archive.finalize();
  });

  // Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
