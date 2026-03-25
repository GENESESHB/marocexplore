const fs = require('fs');
const path = require('path');

const frDir = path.join(__dirname, 'src', 'app', 'fr');

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // Replace relative imports to top-level folders with @ aliases
      
      // For components
      content = content.replace(/from\s+['"](?:\.\.\/)+components\/(.*?)['"]/g, "from '@/app/components/$1'");
      content = content.replace(/from\s+['"]\.\/components\/(.*?)['"]/g, "from '@/app/components/$1'"); // specific fix for page.js which had './components'
      
      // For lib
      content = content.replace(/from\s+['"](?:\.\.\/)+lib\/(.*?)['"]/g, "from '@/app/lib/$1'");
      content = content.replace(/from\s+['"]\.\/lib\/(.*?)['"]/g, "from '@/app/lib/$1'");
      
      // For styles
      content = content.replace(/from\s+['"](?:\.\.\/)+styles\/(.*?)['"]/g, "from '@/app/styles/$1'");
      content = content.replace(/from\s+['"]\.\/styles\/(.*?)['"]/g, "from '@/app/styles/$1'");

      // Also fix TourTemplate where necessary since it might import things from `../components` or `../../components`
      // Check if anything else needs fixing.

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated imports in ${fullPath}`);
      }
    }
  }
}

traverse(frDir);
console.log('Done fixing imports!');
