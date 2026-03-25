import { toursActivitiesLibFr } from '@/app/lib/toursActivitiesLibFr';
import TourTemplate from '@/app/fr/circuits/components/TourTemplate';

export function generateMetadata() {
    const tour = toursActivitiesLibFr.find(t => t.slug === 'balade-perle-bleue-chefchaouen');
    if (!tour) return { title: 'Tour Not Found' };

    const keywords = [
        'maroc explore',
        `${tour.title.toLowerCase()} 2026`,
        'circuits maroc 2026',
        `explorer ${tour.location}`,
        'voyage authentique maroc',
        'meilleurs voyages maroc',
        `${tour.category} circuit maroc`
    ].join(', ');

    return {
        title: `${tour.title} 2026 | Maroc Explore - Circuits Authentiques`,
        description: `Rejoignez Maroc Explore pour le ${tour.title} en 2026. Profitez de votre voyage à ${tour.location}. ${tour.description}`,
        keywords: keywords,
        alternates: {
            canonical: `https://marocexplore.com/fr/circuits/${tour.slug}`,
        },
        openGraph: {
            title: `${tour.title} 2026 | Maroc Explore - Circuits Authentiques`,
            description: `Rejoignez Maroc Explore pour le ${tour.title} en 2026. Profitez de votre voyage à ${tour.location}. ${tour.description}`,
            url: `https://marocexplore.com/fr/circuits/${tour.slug}`,
            images: [{ url: `https://marocexplore.com${tour.image}` }],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${tour.title} 2026 | Maroc Explore`,
            description: tour.description,
            images: [`https://marocexplore.com${tour.image}`],
        }
    };
}

export default function StaticTourPage() {
    const tour = toursActivitiesLibFr.find(t => t.slug === 'balade-perle-bleue-chefchaouen');
    return <TourTemplate tour={tour} />;
}
