import { toursActivitiesLib } from '../../lib/toursActivitiesLib';
import BlogTemplate from '../components/BlogTemplate';

export function generateMetadata() {
    const tour = toursActivitiesLib.find(t => t.slug === 'ouarzazate-cinematic-history');
    if (!tour) return { title: 'Blog Not Found' };
    
    return {
        title: `Maroc Explore Guide: ${tour.title} in 2026`,
        description: `Read the official Maroc Explore 2026 guide for travelling to ${tour.location}. ${tour.description}`,
        keywords: ['Maroc Explore', 'Morocco tours 2026', tour.location, ...tour.highlights],
        openGraph: {
            title: `Maroc Explore Guide: ${tour.title}`,
            description: tour.description,
            images: [{ url: tour.image }],
        }
    };
}

export default function StaticBlogPage() {
    const tour = toursActivitiesLib.find(t => t.slug === 'ouarzazate-cinematic-history');
    return <BlogTemplate tour={tour} />;
}
