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

    const keywords = [
        'maroc explore',
        `${tour.title.toLowerCase()} 2026`,
        `morocco tours 2026`,
        `explore ${tour.location}`,
        'free enjoy morocco',
        'best morocco trips',
        `${tour.category} tour morocco`
    ].join(', ');

    return {
        title: `${tour.title} 2026 | Maroc Explore - Free Enjoy`,
        description: `Join Maroc Explore for the ${tour.title} in 2026. Free enjoy your journey to ${tour.location}. ${tour.description}`,
        keywords: keywords,
        alternates: {
            canonical: `https://marocexplore.com/tours/${tour.slug}`,
        },
        openGraph: {
            title: `${tour.title} 2026 | Maroc Explore - Free Enjoy`,
            description: `Join Maroc Explore for the ${tour.title} in 2026. Free enjoy your journey to ${tour.location}. ${tour.description}`,
            url: `https://marocexplore.com/tours/${tour.slug}`,
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
