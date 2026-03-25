const fs = require('fs');
const path = require('path');

const circuitsDir = path.join(__dirname, 'src', 'app', 'fr', 'circuits');

const folders = fs.readdirSync(circuitsDir).filter(name => {
    return fs.statSync(path.join(circuitsDir, name)).isDirectory() && 
           name !== 'components' && 
           name !== '[slug]';
});

let count = 0;
folders.forEach(folderName => {
    const pagePath = path.join(circuitsDir, folderName, 'page.js');
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        content = content.replace(/toursActivitiesLibFrFr/g, 'toursActivitiesLibFr');
        fs.writeFileSync(pagePath, content, 'utf8');
        count++;
    }
});
console.log(`Fixed import typos in ${count} files.`);
