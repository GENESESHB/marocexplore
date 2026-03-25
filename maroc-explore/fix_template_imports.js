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

      // Fix TourTemplate import
      content = content.replace(/from\s+['"]@\/app\/components\/TourTemplate['"]/g, "from '@/app/tours/components/TourTemplate'");
      content = content.replace(/from\s+['"]@\/app\/components\/BookingForm['"]/g, "from '@/app/tours/components/BookingForm'");
      
      // Fix BlogTemplate import
      content = content.replace(/from\s+['"]@\/app\/components\/BlogTemplate['"]/g, "from '@/app/blogs/components/BlogTemplate'");

      // Just in case, the template itself has an import to another thing?
      // TourTemplate inside /fr/tours/components might have imports that were modified.
      // Wait, `/fr/tours/components/TourTemplate.js` was modified by my script:
      // it might have had `import BookingForm from './BookingForm'`
      // `./BookingForm` to `@/app/components/BookingForm`?
      // Let's check my script: `content = content.replace(/from\s+['"]\.\/components\/(.*?)['"]/g, "from '@/app/components/$1'");`
      // That wouldn't touch `./BookingForm`

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed template imports in ${fullPath}`);
      }
    }
  }
}

traverse(frDir);
console.log('Done fixing template imports!');
