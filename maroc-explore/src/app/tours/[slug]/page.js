import Link from 'next/link';
import { toursActivitiesLib } from '../../lib/toursActivitiesLib';
import Header from '../../components/Header';
import styles from './TourDetail.module.css';

export async function generateMetadata({ params }) {
    const { slug } = params;
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

export default function TourDetailPage({ params }) {
    const { slug } = params;
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

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <img src={tour.image} alt={tour.title} className={styles.heroImage} />
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.badges}>
                        <span className={styles.badge}>{tour.location}</span>
                        <span className={styles.badge}>{tour.duration}</span>
                    </div>
                    <h1 className={styles.title}>{tour.title}</h1>
                    <div className={styles.meta}>
                        <span className={styles.rating}>★ {tour.rating} ({tour.reviews} reviews)</span>
                        <span className={styles.price}>From €{tour.price}</span>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.mainCol}>
                    <section className={styles.section}>
                        <h2>Description</h2>
                        <p>{tour.fullDescription}</p>
                    </section>

                    <section className={styles.section}>
                        <h2>Highlights</h2>
                        <ul className={styles.highlightsList}>
                            {tour.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>Itinerary</h2>
                        <div className={styles.itinerary}>
                            {tour.itinerary.map((item, i) => (
                                <div key={i} className={styles.itineraryItem}>
                                    <div className={styles.itineraryDay}>
                                        {item.day ? `Day ${item.day}` : item.time}
                                    </div>
                                    <div className={styles.itineraryContent}>
                                        <h3>{item.title || item.activity}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.bookingCard}>
                        <h3>Book This Tour</h3>
                        <div className={styles.bookingPrice}>
                            <span className={styles.priceAmount}>€{tour.price}</span>
                            <span className={styles.priceUnit}>per person</span>
                        </div>
                        <button className={styles.bookBtn}>Book Now</button>

                        <div className={styles.inclusions}>
                            <h4>Included</h4>
                            <ul>
                                {tour.included.map((item, i) => (
                                    <li key={i} className={styles.includedItem}>✓ {item}</li>
                                ))}
                            </ul>
                            {tour.excluded && tour.excluded.length > 0 && (
                                <>
                                    <h4>Excluded</h4>
                                    <ul>
                                        {tour.excluded.map((item, i) => (
                                            <li key={i} className={styles.excludedItem}>✕ {item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>

                    <Link href="/filter" className={styles.backLink}>
                        ← Back to all tours
                    </Link>
                </aside>
            </div>
        </div>
    );
}
