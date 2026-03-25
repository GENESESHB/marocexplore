const fs = require('fs');
const path = require('path');

const routeMapperPath = path.join(__dirname, 'src', 'app', 'lib', 'routeMapper.js');
let mapperContent = fs.readFileSync(routeMapperPath, 'utf8');
const mapMatch = mapperContent.match(/const enToFrMap = ({[\s\S]*?});/);
if (!mapMatch) {
    console.error("Could not find enToFrMap");
    process.exit(1);
}
let slugMap = eval("(" + mapMatch[1] + ")");

// Fix toursActivitiesLibFr.js
const toursLibPath = path.join(__dirname, 'src', 'app', 'lib', 'toursActivitiesLibFr.js');
let toursContent = fs.readFileSync(toursLibPath, 'utf8');
let toursLibObj = null;
try {
    const st = toursContent.indexOf('[');
    const en = toursContent.lastIndexOf('];');
    const arrStr = toursContent.substring(st, en + 1);
    toursLibObj = eval(arrStr);
} catch(e) {
    console.error("Failed to parse tours", e);
}

if (toursLibObj) {
    toursLibObj.forEach(tour => {
        let ogSlug = tour.slug;
        if (slugMap[ogSlug]) {
            tour.slug = slugMap[ogSlug];
        }
    });
    fs.writeFileSync(toursLibPath, `export const toursActivitiesLibFr = ${JSON.stringify(toursLibObj, null, 4)};\n`);
    console.log("Updated toursActivitiesLibFr.js slugs.");
}

// Fix blogContentLibFr.js
const blogLibPath = path.join(__dirname, 'src', 'app', 'lib', 'blogContentLibFr.js');
let blogContent = fs.readFileSync(blogLibPath, 'utf8');
let blogLibObj = null;
try {
    const st = blogContent.indexOf('{');
    const en = blogContent.lastIndexOf('};');
    const objStr = blogContent.substring(st, en + 1);
    blogLibObj = eval("(" + objStr + ")");
} catch(e) {
    console.error("Failed to parse blogs", e);
}

if (blogLibObj) {
    let newBlogLibObj = {};
    for (const [key, data] of Object.entries(blogLibObj)) {
        let frKey = slugMap[key] || key;
        newBlogLibObj[frKey] = data;
    }
    
    let outContent = `export const blogContentLibFr = {\n`;
    for (const [slug, data] of Object.entries(newBlogLibObj)) {
        outContent += `    '${slug}': {\n        htmlContent: \`${data.htmlContent.replace(/`/g, '\\`')}\`\n    },\n`;
    }
    outContent += `};\n`;
    
    fs.writeFileSync(blogLibPath, outContent);
    console.log("Updated blogContentLibFr.js slugs.");
}
