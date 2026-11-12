const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      rewriteFile(fullPath);
    }
  }
}

function rewriteFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  
  // 1. Replace supabase URLs first
  const supabaseRegex = /https:\/\/mmbmcgjqfzmlsibnpbyl\.supabase\.co\/storage\/v1\/object\/sign\/Focus\/([^?"'\s]+)(\?token=[^"'\s]+)?/g;
  content = content.replace(supabaseRegex, (match, filename) => {
    // URL decode the filename if it has %20
    const decodedFilename = decodeURIComponent(filename);
    if (decodedFilename.endsWith('.mp4')) {
        return `https://thefocusplan.com/VIDEOS/${decodedFilename}`;
    } else if (decodedFilename.endsWith('.png') || decodedFilename.endsWith('.jpg') || decodedFilename.endsWith('.jpeg')) {
        return `https://thefocusplan.com/IMAGENES/${decodedFilename}`;
    } else {
        return `https://thefocusplan.com/${decodedFilename}`;
    }
  });

  // 2. Replace any previously replaced URLs that don't have IMAGENES or VIDEOS
  const theFocusRegex = /https:\/\/thefocusplan\.com\/(?!IMAGENES\/|VIDEOS\/)([^"'\s<>]+)/g;
  content = content.replace(theFocusRegex, (match, filename) => {
    // If it's an API route or normal page link, don't replace
    if (filename.startsWith('api/') || filename === '') return match;
    
    const decodedFilename = decodeURIComponent(filename);
    if (decodedFilename.endsWith('.mp4')) {
        return `https://thefocusplan.com/VIDEOS/${decodedFilename}`;
    } else if (decodedFilename.endsWith('.png') || decodedFilename.endsWith('.jpg') || decodedFilename.endsWith('.jpeg')) {
        return `https://thefocusplan.com/IMAGENES/${decodedFilename}`;
    } else {
        return match;
    }
  });
  
  if (originalContent !== content) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

processDir('./src');
console.log('Done.');
