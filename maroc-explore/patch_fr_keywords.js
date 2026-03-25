const fs = require('fs');
const path = require('path');

const SEO_KEYWORDS = `  keywords: [
    "Maroc Explore", 
    "Maroc Explore circuits", 
    "voyage Maroc Explore", 
    "circuits authentiques au Maroc", 
    "excursions désert Sahara", 
    "guide local Maroc Explore", 
    "vacances au Maroc", 
    "découvrir le Maroc",
    "agence de voyage Maroc"
  ],`;

const frDir = 'src/app/fr';
let patchedCount = 0;

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file === 'page.js') {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('export const metadata = {') && !content.includes('keywords:')) {
        content = content.replace(
          /export const metadata = \{/,
          `export const metadata = {\n${SEO_KEYWORDS}`
        );
        fs.writeFileSync(fullPath, content, 'utf8');
        patchedCount++;
        console.log(`Patched metadata for: ${fullPath}`);
      }
    }
  }
}

walkDir(frDir);
console.log(`Successfully injected SEO keywords into ${patchedCount} localized static pages!`);
