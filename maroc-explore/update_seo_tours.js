const fs = require('fs');
const path = require('path');

const toursDir = path.join(__dirname, 'src', 'app', 'tours');
const dirs = fs.readdirSync(toursDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== '[slug]' && dirent.name !== 'components')
    .map(dirent => dirent.name);

dirs.forEach(slug => {
    const pagePath = path.join(toursDir, slug, 'page.js');
    if (fs.existsSync(pagePath)) {
        const content = `import { toursActivitiesLib } from '../../lib/toursActivitiesLib';
import TourTemplate from '../components/TourTemplate';

export function generateMetadata() {
    const tour = toursActivitiesLib.find(t => t.slug === '${slug}');
    if (!tour) return { title: 'Tour Not Found' };

    const keywords = [
        'maroc explore',
        \`\${tour.title.toLowerCase()} 2026\`,
        'morocco tours 2026',
        \`explore \${tour.location}\`,
        'free enjoy morocco',
        'best morocco trips',
        \`\${tour.category} tour morocco\`
    ].join(', ');

    return {
        title: \`\${tour.title} 2026 | Maroc Explore - Free Enjoy\`,
        description: \`Join Maroc Explore for the \${tour.title} in 2026. Free enjoy your journey to \${tour.location}. \${tour.description}\`,
        keywords: keywords,
        alternates: {
            canonical: \`https://marocexplore.com/tours/\${tour.slug}\`,
        },
        openGraph: {
            title: \`\${tour.title} 2026 | Maroc Explore - Free Enjoy\`,
            description: \`Join Maroc Explore for the \${tour.title} in 2026. Free enjoy your journey to \${tour.location}. \${tour.description}\`,
            url: \`https://marocexplore.com/tours/\${tour.slug}\`,
            images: [{ url: \`https://marocexplore.com\${tour.image}\` }],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: \`\${tour.title} 2026 | Maroc Explore\`,
            description: tour.description,
            images: [\`https://marocexplore.com\${tour.image}\`],
        }
    };
}

export default function StaticTourPage() {
    const tour = toursActivitiesLib.find(t => t.slug === '${slug}');
    return <TourTemplate tour={tour} />;
}
`;
        fs.writeFileSync(pagePath, content);
        console.log(`Updated SEO for ${slug}`);
    }
});
