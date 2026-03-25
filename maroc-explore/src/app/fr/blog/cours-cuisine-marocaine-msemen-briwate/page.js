import { toursActivitiesLibFr } from '@/app/lib/toursActivitiesLibFr';
import BlogTemplate from '@/app/fr/blog/components/BlogTemplate';

export function generateMetadata() {
    const tour = toursActivitiesLibFr.find(t => t.slug === 'cours-cuisine-marocaine-msemen-briwate');
    if (!tour) return { title: 'Blog Introuvable' };
    
    return {
        title: `Guide Maroc Explore : ${tour.title} en 2026`,
        description: `Lisez le guide officiel Maroc Explore 2026 pour voyager à ${tour.location}. ${tour.description}`,
        keywords: ['Maroc Explore', 'Circuits Maroc 2026', tour.location, ...tour.highlights],
                alternates: {
            canonical: 'https://marocexplore.com/fr/blog/cours-cuisine-marocaine-msemen-briwate',
        },
        openGraph: {
            title: `Guide Maroc Explore : ${tour.title}`,
            description: tour.description,
            images: [{ url: tour.image }],
        }
    };
}

export default function StaticBlogPage() {
    const tour = toursActivitiesLibFr.find(t => t.slug === 'cours-cuisine-marocaine-msemen-briwate');
    return <BlogTemplate tour={tour} />;
}
