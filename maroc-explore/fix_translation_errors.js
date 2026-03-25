const fs = require('fs');
const path = require('path');

const frDir = path.join(__dirname, 'src', 'app', 'fr');

function fixFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixFiles(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Fix the broken classNames where 'Highlights' became 'Points Forts'
            content = content.replace(/styles\.([a-zA-Z0-9]+)Points Forts/g, 'styles.$1Highlights');
            
            // Fix unescaped single quotes inside metadata description that is wrapped in single quotes
            // E.g., description: 'Vivez l'expérience...'
            // We transform description: '...' to description: "..."
            content = content.replace(/description:\s*'([^']*)'expérience([^']*)'/g, 'description: "Vivez l\\'expérience$2"');
            
            // Since there are multiple apostrophes, the safest way is regex that matches description: ' ... ' but stops at newline.
            // Wait, what if I just use a regex to wrap the whole description line in double quotes? 
            // It looks like `description: 'Vivez l'expérience authentique du Maroc avec nos visites guidées. Explorez le désert du Sahara, l'Atlas et les villes impériales avec nos experts. Réservez aujourd'hui !',`
            // Let's replace the EXACT description line in layout.js 
            content = content.replace(/description:\s*'Vivez l'expérience authentique([^!]*)!',/, 'description: "Vivez l\\'expérience authentique$1!",');
            

            // Are there other broken titles or descriptions?
            // "title: '... l'Atlas'" -> "title: \"... l'Atlas\""
            content = content.replace(/title:\s*'([^']*)l'Atlas([^']*)',/, 'title: "$1l\\'Atlas$2",');
            
            // Just specifically for layout.js, since that was the one breaking right now.
            // The metadata regex in translate_pages.js didn't affect most page.js files because they don't have "Experience" or "Morocco" or whatever in their description? 
            // Wait, let's fix any `description: '... l'...'` globally if we can, or just run Next build to see if anything else fails.
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log('Fixed syntax errors in ' + fullPath);
            }
        }
    }
}

fixFiles(frDir);
console.log('Finished fixing syntax errors');
