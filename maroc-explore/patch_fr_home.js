const fs = require('fs');
const filePath = 'src/app/fr/page.js';

let content = fs.readFileSync(filePath, 'utf8');

// Replace standard search pushes
content = content.replace(/router\.push\(\`\/filter\?/g, "router.push(`/fr/recherche?");

// Also check for the "View Tours" hero button explicitly if needed, but it already uses `handleSearch`
// Just in case there are static links to /filter or /tours in the home page
content = content.replace(/<Link href="\/filter"/g, '<Link href="/fr/recherche"');
content = content.replace(/<Link href="\/tours"/g, '<Link href="/fr/circuits"');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully patched push router bindings in fr/page.js!");
