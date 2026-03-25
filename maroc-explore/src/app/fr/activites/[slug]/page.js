import Link from 'next/link';
import { toursActivitiesLib, getFilteredTours } from '@/app/lib/toursActivitiesLib';
import Header from '@/app/components/Header';
import styles from './ActivityPage.module.css';

const activityData = {
    adventure: {
        title: 'Adventure Tours in Morocco',
        description: 'Push your limits with our thrilling adventure tours. From Sahara expeditions to Atlas Mountain treks, discover the wild side of Morocco.',
        icon: '🏔️'
    },
    cultural: {
        title: 'Cultural Immersion Experiences',
        description: 'Dive deep into Morocco\'s rich heritage. Explore ancient medinas, learn traditional crafts, and connect with local communities.',
        icon: '🏺'
    },
    relaxation: {
        title: 'Relaxation & Wellness Retreats',
        description: 'Unwind on pristine beaches or in tranquil traditional hammams. Experience the peaceful side of Moroccan hospitality.',
        icon: '🧖‍♂️'
    },
    photography: {
        title: 'Morocco Photography Expeditions',
        description: 'Capture the stunning colors and textures of Morocco. Our photography-focused tours take you to the most cinematic locations.',
        icon: '📸'
    },
    luxury: {
        title: 'Luxury Moroccan Escapes',
        description: 'Experience Morocco in ultimate comfort. Private guides, premium accommodations, and exclusive access to hidden gems.',
        icon: '✨'
    },
    wildlife: {
        title: 'Wildlife & Nature Discoveries',
        description: 'Discover Morocco\'s diverse ecosystems, from birdwatching in coastal lagoons to observing desert life.',
        icon: '🦅'
    },
    camping: {
        title: 'Authentic Desert Camping',
        description: 'Sleep under the Saharan stars. Experience traditional nomadic life with modern comforts in our desert camps.',
        icon: '⛺'
    }
};

export async function generateMetadata({ params }) {
    const { slug } = params;
    const activity = activityData[slug];

    if (!activity) {
        return {
            title: 'Activity Not Found - Maroc Explore',
            description: 'The requested activity category could not be found.'
        };
    }

    return {
        title: `${activity.title} | Maroc Explore`,
        description: activity.description,
    };
}

export default function ActivityPage({ params }) {
    const { slug } = params;
    const activity = activityData[slug];
    const tours = getFilteredTours({ activity: slug });

    if (!activity) {
        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.notFound}>
                    <h1>Activity Not Found</h1>
                    <p>Sorry, the activity category you are looking for does not exist.</p>
                    <Link href="/filter" className={styles.backBtn}>Explore All Tours</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.activityIcon}>{activity.icon}</span>
                    <h1 className={styles.title}>{activity.title}</h1>
                    <p className={styles.description}>{activity.description}</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.gridHeader}>
                    <h2>Available {slug} tours ({tours.length})</h2>
                    <Link href="/filter" className={styles.allLink}>View all tours →</Link>
                </div>

                <div className={styles.toursGrid}>
                    {tours.map((tour) => (
                        <div key={tour.id} className={styles.tourCard}>
                            <div className={styles.cardImage}>
                                <img src={tour.image} alt={tour.title} />
                                <span className={styles.priceTag}>€{tour.price}</span>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.cardMeta}>
                                    <span>{tour.location}</span>
                                    <span>{tour.duration}</span>
                                </div>
                                <h3>{tour.title}</h3>
                                <p>{tour.description}</p>
                                <Link href={`/tours/${tour.slug}`} className={styles.detailsBtn}>
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {tours.length === 0 && (
                    <div className={styles.empty}>
                        <p>No {slug} tours available at the moment. Please check back later or explore other activities.</p>
                        <Link href="/filter" className={styles.exploreBtn}>Explore Other Tours</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
