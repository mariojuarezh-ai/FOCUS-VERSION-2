const fs = require('fs');

function rewriteFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const regex = /https:\/\/mmbmcgjqfzmlsibnpbyl\.supabase\.co\/storage\/v1\/object\/sign\/Focus\/([^?"]+)\?token=[^"]+/g;
  
  content = content.replace(regex, (match, filename) => {
    return `https://thefocusplan.com/${filename}`;
  });
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

rewriteFile('src/components/HyroxGuide.tsx');
rewriteFile('src/App.tsx');
console.log('Done.');
