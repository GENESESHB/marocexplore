const fs = require('fs');
const path = require('path');

const enToFrMap = {
  // Top Level
  'tours': 'circuits',
  'blogs': 'blog',
  'about': 'a-propos',
  'activities': 'activites',
  'filter': 'recherche',
  'contact': 'contact',
  'experiences': 'experiences',
  'culture': 'culture',
  'destinations': 'destinations',

  // Tours & Blogs Slugs
  'agadir-beach-surf': 'agadir-plage-surf',
  'agadir-surf-sun-experience': 'agadir-experience-surf-soleil',
  'amazigh-cultural-immersion': 'immersion-culturelle-amazighe',
  'atlas-mountains-trek': 'trek-montagnes-atlas',
  'chefchaouen-blue-city-tour': 'visite-ville-bleue-chefchaouen',
  'chefchaouen-blue-pearl-walk': 'balade-perle-bleue-chefchaouen',
  'essaouira-coastal-escape': 'escapade-cotiere-essaouira',
  'essaouira-coastal-retreat': 'retraite-cotiere-essaouira',
  'fes-cultural-journey': 'voyage-culturel-fes',
  'fez-el-bali-time-travel': 'voyage-temps-fez-el-bali',
  'fes-el-bali-time-travel': 'voyage-temps-fes-el-bali',
  'luxury-desert-camp': 'camp-luxe-desert',
  'marrakech-medina-tour': 'visite-medina-marrakech',
  'meknes-imperial-heritage': 'heritage-imperial-meknes',
  'merzouga-camel-trek': 'trek-chameau-merzouga',
  'moroccan-celebration-sbou-wedding': 'celebration-mariage-sbou-marocain',
  'moroccan-cooking-msemen-briwate': 'cours-cuisine-marocaine-msemen-briwate',
  'ouarzazate-cinema-tour': 'visite-cinema-ouarzazate',
  'ouarzazate-cinematic-history': 'histoire-cinematographique-ouarzazate',
  'rabat-capital-explorer': 'explorateur-capitale-rabat',
  'rabat-historical-tour': 'visite-historique-rabat',
  'sahara-desert-expedition': 'expedition-desert-sahara',
  'tangier-day-trip': 'excursion-journee-tanger',
  'tanger-gateway-to-africa': 'tanger-porte-afrique',
  'traditional-henna-art-session': 'session-art-henne-traditionnel'
};

const frDir = path.join(__dirname, 'src', 'app', 'fr');

// 1. Rename inside tours
const toursDir = path.join(frDir, 'tours');
if (fs.existsSync(toursDir)) {
  const tourFolders = fs.readdirSync(toursDir);
  for (const folder of tourFolders) {
    if (enToFrMap[folder]) {
      fs.renameSync(path.join(toursDir, folder), path.join(toursDir, enToFrMap[folder]));
      console.log(`Renamed tour: ${folder} -> ${enToFrMap[folder]}`);
    }
  }
}

// 2. Rename inside blogs
const blogsDir = path.join(frDir, 'blogs');
if (fs.existsSync(blogsDir)) {
  const blogFolders = fs.readdirSync(blogsDir);
  for (const folder of blogFolders) {
    if (enToFrMap[folder]) {
      fs.renameSync(path.join(blogsDir, folder), path.join(blogsDir, enToFrMap[folder]));
      console.log(`Renamed blog: ${folder} -> ${enToFrMap[folder]}`);
    }
  }
}

// 3. Rename top-level folders in /fr
const rootFolders = ['tours', 'blogs', 'about', 'activities', 'filter'];
for (const folder of rootFolders) {
  if (enToFrMap[folder]) {
    const oldPath = path.join(frDir, folder);
    const newPath = path.join(frDir, enToFrMap[folder]);
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed top-level: ${folder} -> ${enToFrMap[folder]}`);
    }
  }
}

// 4. Create route map utility
const libDir = path.join(__dirname, 'src', 'app', 'lib');
if (!fs.existsSync(libDir)) fs.mkdirSync(libDir, { recursive: true });

const routeMapContent = `
export const enToFrMap = ${JSON.stringify(enToFrMap, null, 2)};

export const frToEnMap = Object.entries(enToFrMap).reduce((acc, [en, fr]) => {
  acc[fr] = en;
  return acc;
}, {});

export function translatePath(pathname, targetLang) {
  // If we are given /fr/tours/sahara, and targetLang is 'en'
  // Or if we are given /tours/sahara, and targetLang is 'fr'
  
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return targetLang === 'fr' ? '/fr' : '/';

  // Remove 'fr' if it exists
  const isCurrentlyFr = segments[0] === 'fr';
  if (isCurrentlyFr) segments.shift();

  // Translate remaining segments
  const translatedSegments = segments.map(seg => {
    if (targetLang === 'fr') {
      return enToFrMap[seg] || seg;
    } else {
      return frToEnMap[seg] || seg;
    }
  });

  const base = targetLang === 'fr' ? '/fr' : '';
  const result = base + '/' + translatedSegments.join('/');
  return result === '' ? '/' : result;
}
`;

fs.writeFileSync(path.join(libDir, 'routeMapper.js'), routeMapContent);
console.log('Created src/app/lib/routeMapper.js');

// 5. Replace references to old URLs in the FR files!
// For example, in /fr/ circuits, maybe there are <Link href="/tours/something"> or <Link href="/fr/tours/something">
function replaceContentRecursively(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceContentRecursively(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // Only perform replacements on /fr/... URLs if they are hardcoded.
      // E.g., href="/tours" -> href="/fr/circuits"
      // Replace /tours/ -> /circuits/
      // Loop over enToFrMap:
      for (const [en, fr] of Object.entries(enToFrMap)) {
        // E.g. /fr/tours
        const regexEnFr = new RegExp('\\\\/fr\\\\/' + en + '(?=[/\\\'"`\\\\?])', 'g');
        content = content.replace(regexEnFr, '/fr/' + fr);
        
        // E.g. href="/tours/ something => href="/fr/circuits/ something
        const regexSlashEn = new RegExp('(href=|router\\\\.push\\\\(\\\\s*))([\\\'"`])\\\\/' + en + '(?=[/\\\'"`\\\\?])', 'g');
        content = content.replace(regexSlashEn, '$1$2/fr/' + fr);
        
        // E.g. href="/fr/tours/something => href="/fr/circuits/something
        const regexSlashEnExt = new RegExp('(href=|router\\\\.push\\\\(\\\\s*))([\\\'"`])\\\\/fr\\\\/' + en + '(?=[/\\\'"`\\\\?])', 'g');
        content = content.replace(regexSlashEnExt, '$1$2/fr/' + fr);

        // Replace slug itself: /fr/circuits/sahara -> /fr/circuits/expedition-desert
        const regexSlug = new RegExp('(href=|router\\\\.push\\\\(\\\\s*))([\\\'"`].*\\\\/)' + en + '(?=[\\\'"`\\\\?]|\\\\b)', 'g');
        content = content.replace(regexSlug, '$1$2' + fr);
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceContentRecursively(frDir);
console.log('Replaced internal URLs in /fr pages');

