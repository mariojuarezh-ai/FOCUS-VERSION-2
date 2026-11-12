import JSZip from 'jszip';
import fs from 'fs';
import path from 'path';

const zip = new JSZip();

function addFilesFromDirectoryToZip(dirPath, zip, basePath = '') {
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      addFilesFromDirectoryToZip(fullPath, zip.folder(item), path.join(basePath, item));
    } else {
      zip.file(item, fs.readFileSync(fullPath));
    }
  }
}

addFilesFromDirectoryToZip('dist', zip);

zip.generateAsync({ type: 'nodebuffer' }).then((content) => {
  fs.writeFileSync('website_files.zip', content);
  console.log('Successfully created website_files.zip');
});
