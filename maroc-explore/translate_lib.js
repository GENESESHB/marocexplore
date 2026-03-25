const fs = require('fs');
const path = require('path');
const translate = require('translate').default;

translate.engine = 'google';
translate.key = '';

const SLEEP_MS = 100;
const sleep = ms => new Promise(res => setTimeout(res, ms));

async function main() {
    const libPath = path.join(__dirname, 'src', 'app', 'lib', 'toursActivitiesLib.js');
    let content = fs.readFileSync(libPath, 'utf8');

    const startIndex = content.indexOf('[');
    const endIndex = content.lastIndexOf('];');
    const arrayString = content.substring(startIndex, endIndex + 1);
    
    let toursArray = [];
    try {
        toursArray = eval(arrayString);
    } catch (e) {
        console.error("Eval failed", e);
        return;
    }

    const keysToTranslate = ['title', 'description', 'fullDescription', 'content', 'text', 'question', 'answer', 'highlights', 'included', 'excluded'];

    async function translateValue(val) {
        if (!val || typeof val !== 'string') return val;
        try {
            await sleep(SLEEP_MS);
            let result = await translate(val, { to: 'fr', from: 'en' });
            return result;
        } catch (e) {
            console.error('Translation error for:', val, e.message);
            return val;
        }
    }

    async function translateObject(obj) {
        if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
            for (const key of Object.keys(obj)) {
                if (keysToTranslate.includes(key)) {
                    if (typeof obj[key] === 'string') {
                        obj[key] = await translateValue(obj[key]);
                    } else if (Array.isArray(obj[key])) {
                        for (let j = 0; j < obj[key].length; j++) {
                            if (typeof obj[key][j] === 'string') {
                                obj[key][j] = await translateValue(obj[key][j]);
                            }
                        }
                    }
                } else if (Array.isArray(obj[key])) {
                    for (let i = 0; i < obj[key].length; i++) {
                        if (typeof obj[key][i] === 'object' && obj[key][i] !== null) {
                            await translateObject(obj[key][i]);
                        }
                    }
                } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                    await translateObject(obj[key]);
                }
            }
        }
    }

    console.log("Starting translation of " + toursArray.length + " tours...");
    
    // Process in batches of 3 to speed it up without spamming too much
    for (let i = 0; i < toursArray.length; i += 3) {
        const batch = toursArray.slice(i, i + 3);
        const promises = batch.map(async (tour, idx) => {
            const actualIdx = i + idx;
            console.log(`Translating tour ${actualIdx + 1}/${toursArray.length}: ${tour.title}`);
            await translateObject(tour);

            const routeMapperPath = path.join(__dirname, 'src', 'app', 'lib', 'routeMapper.js');
            try {
                let mapperContent = fs.readFileSync(routeMapperPath, 'utf8');
                const mapMatch = mapperContent.match(/const tourSlugMap = ({[\s\S]*?});/);
                if (mapMatch) {
                    let slugMap = eval("(" + mapMatch[1] + ")");
                    let ogSlug = tour.slug;
                    if (slugMap[ogSlug]) {
                        tour.slug = slugMap[ogSlug];
                    }
                }
            } catch(e) {}
        });
        await Promise.all(promises);
    }

    const outPath = path.join(__dirname, 'src', 'app', 'lib', 'toursActivitiesLibFr.js');
    const outContent = `export const toursActivitiesLibFr = ${JSON.stringify(toursArray, null, 4)};\n`;
    fs.writeFileSync(outPath, outContent);
    console.log("Finished translating toursActivitiesLib.js -> toursActivitiesLibFr.js");
}

main().catch(console.error);
