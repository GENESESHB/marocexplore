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

        // Change library import
        content = content.replace(/import { toursActivitiesLib } from '@\/app\/lib\/toursActivitiesLib';/g, "import { toursActivitiesLibFr } from '@/app/lib/toursActivitiesLibFr';");
        content = content.replace(/toursActivitiesLib/g, "toursActivitiesLibFr");

        // Fix the slug lookups: replace the English slug with the folder name!
        content = content.replace(/t\.slug === '([^']+)'/g, `t.slug === '${dirName}'`);

        // Translate SEO metadata
        content = content.replace(/Maroc Explore Guide:/g, 'Guide Maroc Explore :');
        content = content.replace(/in 2026`/g, 'en 2026`');
        content = content.replace(/Read the official Maroc Explore 2026 guide for travelling to/g, "Lisez le guide officiel Maroc Explore 2026 pour voyager à");
        content = content.replace(/Morocco tours 2026/g, "Circuits Maroc 2026");
        content = content.replace(/Blog Not Found/g, 'Blog Introuvable');

        // Fix Canonical URL
        content = content.replace(/https:\/\/marocexplore\.com\/blogs\/([^']+)/g, `https://marocexplore.com/fr/blog/${dirName}`);

        // Ensure BlogTemplate is correctly imported from the localized components if available. 
        // If they use @/app/blogs/components/BlogTemplate, change it to @/app/fr/blog/components/BlogTemplate
        content = content.replace(/@\/app\/blogs\/components\/BlogTemplate/g, '@/app/fr/blog/components/BlogTemplate');

        fs.writeFileSync(filePath, content);
        console.log(`Updated blog wrapper: ${dirName}`);
    }
});
