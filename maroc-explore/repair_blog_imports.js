const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app', 'fr', 'blog');
if (!fs.existsSync(baseDir)) process.exit(0);

const dirs = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'components' && dirent.name !== '[slug]')
    .map(dirent => dirent.name);

dirs.forEach(dirName => {
    const filePath = path.join(baseDir, dirName, 'page.js');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(/toursActivitiesLibFrFr/g, "toursActivitiesLibFr");
        fs.writeFileSync(filePath, content);
    }
});
console.log('Repaired imports!');
