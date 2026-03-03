import { toursActivitiesLib } from '../../lib/toursActivitiesLib';
import TourTemplate from '../components/TourTemplate';

export function generateMetadata() {
    const tour = toursActivitiesLib.find(t => t.slug === 'marrakech-medina-tour');
    if (!tour) return { title: 'Tour Not Found' };
    return {
        title: `${tour.title} | ${tour.location} Tours - Maroc Explore`,
        description: tour.description,
        openGraph: { title: tour.title, description: tour.description, images: [{ url: tour.image }] },
    };
}

export default function StaticTourPage() {
    const tour = toursActivitiesLib.find(t => t.slug === 'marrakech-medina-tour');
    return <TourTemplate tour={tour} />;
}
