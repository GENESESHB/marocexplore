const fs = require('fs');
const path = require('path');

const circuitsDir = path.join(__dirname, 'src', 'app', 'fr', 'circuits');

if (!fs.existsSync(circuitsDir)) {
    console.error(`Directory not found: ${circuitsDir}`);
    process.exit(1);
}

const folders = fs.readdirSync(circuitsDir).filter(name => {
    return fs.statSync(path.join(circuitsDir, name)).isDirectory() && 
           name !== 'components' && 
           name !== '[slug]';
});

console.log(`Found ${folders.length} static tour directories to patch...`);

let successCount = 0;

folders.forEach(folderName => {
    const pagePath = path.join(circuitsDir, folderName, 'page.js');
    
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');

        // 1. Data Library Impots
        content = content.replace(/toursActivitiesLib/g, 'toursActivitiesLibFr');
        content = content.replace(/@\/app\/lib\/toursActivitiesLib/g, '@/app/lib/toursActivitiesLibFr');

        // 2. Component Template Import
        content = content.replace(/@\/app\/tours\/components\/TourTemplate/g, '@/app/fr/circuits/components/TourTemplate');

        // 3. Update the hardcoded slug to the folder name
        content = content.replace(/\.find\(t => t\.slug === '.*?'\)/g, `.find(t => t.slug === '${folderName}')`);

        // 4. Translate SEO tags
        content = content.replace(/'morocco tours 2026'/g, "'circuits maroc 2026'");
        content = content.replace(/'free enjoy morocco'/g, "'voyage authentique maroc'");
        content = content.replace(/'best morocco trips'/g, "'meilleurs voyages maroc'");
        content = content.replace(/tour morocco/g, "circuit maroc");
        content = content.replace(/explore \$\{tour\.location\}/g, "explorer ${tour.location}");
        
        content = content.replace(/\| Maroc Explore - Free Enjoy/g, "| Maroc Explore - Circuits Authentiques");
        content = content.replace(/Join Maroc Explore for the \$\{tour\.title\} in 2026\. Free enjoy your journey to \$\{tour\.location\}\./g, "Rejoignez Maroc Explore pour le ${tour.title} en 2026. Profitez de votre voyage à ${tour.location}.");
        
        // 5. Update Canonical & OpenGraph URLs
        content = content.replace(/https:\/\/marocexplore\.com\/tours\//g, "https://marocexplore.com/fr/circuits/");

        fs.writeFileSync(pagePath, content, 'utf8');
        successCount++;
        console.log(`Patched: ${folderName}`);
    } else {
        console.warn(`No page.js found in: ${folderName}`);
    }
});

console.log(`Successfully patched ${successCount} tour routes.`);
