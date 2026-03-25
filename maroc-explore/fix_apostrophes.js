const fs = require('fs');
const path = require('path');

const frDir = path.join(__dirname, 'src', 'app', 'fr');

function fixApostrophes(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixApostrophes(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Find any unescaped apostrophe between two letters and escape it!
            // E.g. l'UNESCO -> l\\'UNESCO
            // It ignores already escaped ones because the character before is a backslash, not a letter!
            content = content.replace(/([a-zA-Zçéèàùâêîôûäëïöü])'([a-zA-Zçéèàùâêîôûäëïöü])/gi, "$1\\'$2");

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log('Fixed apostrophes in ' + fullPath);
            }
        }
    }
}

fixApostrophes(frDir);
console.log('Finished fixing apostrophes');
