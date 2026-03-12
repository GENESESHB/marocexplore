const fs = require('fs');
const path = require('path');

const blogsDir = path.join(process.cwd(), 'src', 'app', 'blogs');
const blogFolders = fs.readdirSync(blogsDir).filter(f => {
    const stats = fs.statSync(path.join(blogsDir, f));
    return stats.isDirectory() && f !== 'components' && f !== '[slug]';
});

blogFolders.forEach(folder => {
    const filePath = path.join(blogsDir, folder, 'page.js');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if alternates/canonical already exists
        if (content.includes('alternates:')) {
            console.log(`Skipping ${folder} - alternates already exists`);
            return;
        }

        const canonicalUrl = `https://marocexplore.com/blogs/${folder}`;
        const metadataUpdate = `        alternates: {
            canonical: '${canonicalUrl}',
        },
        openGraph: {`;
        
        const newContent = content.replace('openGraph: {', metadataUpdate);
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent);
            console.log(`Updated ${folder}`);
        } else {
            console.log(`Could not find openGraph in ${folder}`);
        }
    }
});
