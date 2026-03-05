import Link from 'next/link';
import { toursActivitiesLib } from '../../lib/toursActivitiesLib';
import Header from '../../components/Header';
import TourTemplate from '../components/TourTemplate';
import styles from './TourDetail.module.css';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const tour = toursActivitiesLib.find(t => t.slug === slug);

    if (!tour) {
        return {
            title: 'Tour Not Found - Maroc Explore',
            description: 'The requested tour could not be found.'
        };
    }

    return {
        title: `${tour.title} | ${tour.location} Tours - Maroc Explore`,
        description: tour.description,
        openGraph: {
            title: tour.title,
            description: tour.description,
            images: [{ url: tour.image }],
        },
    };
}

export default async function TourDetailPage({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const tour = toursActivitiesLib.find(t => t.slug === slug);

    if (!tour) {
        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.notFound}>
                    <h1>Tour Not Found</h1>
                    <p>Sorry, the tour you are looking for does not exist.</p>
                    <Link href="/filter" className={styles.backBtn}>Back to Tours</Link>
                </div>
            </div>
        );
    }

    return <TourTemplate tour={tour} />;
}
