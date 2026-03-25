const fs = require('fs');
const path = require('path');
const translate = require('translate').default;

translate.engine = 'google';
translate.key = '';

const SLEEP_MS = 500;
const sleep = ms => new Promise(res => setTimeout(res, ms));

async function main() {
    const libPath = path.join(__dirname, 'src', 'app', 'lib', 'blogContentLib.js');
    let content = fs.readFileSync(libPath, 'utf8');

    const startIndex = content.indexOf('{');
    const endIndex = content.lastIndexOf('};');
    const objStr = content.substring(startIndex, endIndex + 1);
    
    let blogLib = eval("(" + objStr + ")");

    const routeMapperPath = path.join(__dirname, 'src', 'app', 'lib', 'routeMapper.js');
    let mapperContent = fs.readFileSync(routeMapperPath, 'utf8');
    const mapMatch = mapperContent.match(/const tourSlugMap = ({[\s\S]*?});/);
    let slugMap = {};
    if (mapMatch) {
        slugMap = eval("(" + mapMatch[1] + ")");
    }

    let translatedLib = {};
    console.log("Starting translation of " + Object.keys(blogLib).length + " blog posts...");
    
    for (const [enSlug, data] of Object.entries(blogLib)) {
        console.log(`Translating HTML payload for: ${enSlug}`);
        const frSlug = slugMap[enSlug] || enSlug;

        let translatedHtml = data.htmlContent;
        try {
            await sleep(SLEEP_MS);
            // Split into blocks (paragraphs) to reduce payload size and maintain HTML structure better
            const blocks = translatedHtml.split(/(<[^>]+>)/g); // split by HTML tags
            for (let i = 0; i < blocks.length; i++) {
                if (!blocks[i].startsWith('<') && blocks[i].trim().length > 0) {
                    blocks[i] = await translate(blocks[i], { to: 'fr', from: 'en' });
                }
            }
            translatedHtml = blocks.join('');
        } catch(e) {
            console.error('Translation error for:', enSlug, e.message);
        }

        translatedLib[frSlug] = { htmlContent: translatedHtml };
    }

    const outPath = path.join(__dirname, 'src', 'app', 'lib', 'blogContentLibFr.js');
    
    let outContent = `export const blogContentLibFr = {\n`;
    for (const [slug, data] of Object.entries(translatedLib)) {
        outContent += `    '${slug}': {\n        htmlContent: \`${data.htmlContent.replace(/`/g, '\\`')}\`\n    },\n`;
    }
    outContent += `};\n`;
    
    fs.writeFileSync(outPath, outContent);
    console.log("Finished translating blogContentLib.js -> blogContentLibFr.js");
}

main().catch(console.error);
