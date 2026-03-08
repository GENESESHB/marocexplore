const fs = require('fs');
const path = require('path');

// Pull the tours library to know the slugs
const { toursActivitiesLib } = require('../src/app/lib/toursActivitiesLib.js');

const blogsDir = path.join(__dirname, '../src/app/blogs');

toursActivitiesLib.forEach(tour => {
    const slug = tour.slug;
    const folderPath = path.join(blogsDir, slug);
    
    // Create physical folder
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    // Write the specific page.js for this blog
    const pageContent = `import { toursActivitiesLib } from '../../lib/toursActivitiesLib';
import BlogTemplate from '../components/BlogTemplate';

export function generateMetadata() {
    const tour = toursActivitiesLib.find(t => t.slug === '${slug}');
    if (!tour) return { title: 'Blog Not Found' };
    
    return {
        title: \`Maroc Explore Guide: \${tour.title} in 2026\`,
        description: \`Read the official Maroc Explore 2026 guide for travelling to \${tour.location}. \${tour.description}\`,
        keywords: ['Maroc Explore', 'Morocco tours 2026', tour.location, ...tour.highlights],
        openGraph: {
            title: \`Maroc Explore Guide: \${tour.title}\`,
            description: tour.description,
            images: [{ url: tour.image }],
        }
    };
}

export default function StaticBlogPage() {
    const tour = toursActivitiesLib.find(t => t.slug === '${slug}');
    return <BlogTemplate tour={tour} />;
}
`;

    fs.writeFileSync(path.join(folderPath, 'page.js'), pageContent);
    console.log(`Successfully generated static folder & route for: /blogs/${slug}`);
});
