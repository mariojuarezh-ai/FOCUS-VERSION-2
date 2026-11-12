const fs = require('fs');

function rewriteFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find all thefocusplan.com urls
  const regex = /https:\/\/thefocusplan\.com\/([^"'\s]+)/g;
  
  content = content.replace(regex, (match, filename) => {
    // skip if it already has IMAGENES or VIDEOS
    if (filename.startsWith('IMAGENES/') || filename.startsWith('VIDEOS/')) {
        return match;
    }

    if (filename.endsWith('.mp4')) {
        return `https://thefocusplan.com/VIDEOS/${filename}`;
    } else if (filename.endsWith('.png') || filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
        return `https://thefocusplan.com/IMAGENES/${filename}`;
    } else {
        return match;
    }
  });
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

rewriteFile('src/components/HyroxGuide.tsx');
rewriteFile('src/App.tsx');
console.log('Done.');
