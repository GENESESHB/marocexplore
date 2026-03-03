import { Suspense } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { toursActivitiesLib } from '../lib/toursActivitiesLib';
import styles from './page.module.css';
import { MapPin, Clock, SlidersHorizontal, Sun } from 'lucide-react';

export const metadata = {
    title: 'All Tours & Experiences - Maroc Explore',
    description: 'Browse our full collection of authentic Moroccan tours and activities. From the Sahara to the High Atlas, and cultural classes in the Medinas.',
};

export default function ToursPage() {
    return (
        <div className={styles.page}>
            <Header />

            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Discover Morocco</h1>
                    <p>Authentic journeys, cultural classes, and unforgettable adventures curated just for you.</p>
                </div>
            </div>

            <div className={styles.container}>

                {/* Header / Filter Toolbar */}
                <div className={styles.toursHeader}>
                    <h2>All Tours & Experiences ({toursActivitiesLib.length})</h2>
                    <Link href="/filter" className={styles.filterBtn}>
                        <SlidersHorizontal size={18} />
                        Advanced Filters
                    </Link>
                </div>

                {/* Tours Grid */}
                <div className={styles.grid}>
                    {toursActivitiesLib.map((tour) => (
                        <div key={tour.id} className={styles.tourCard}>
                            <div className={styles.imageContainer}>
                                <span className={styles.badge}>{tour.category}</span>
                                <div className={styles.durationBadge}>
                                    <Clock size={14} /> {tour.duration}
                                </div>
                                <img src={tour.image} alt={tour.title} />
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.locationAndRating}>
                                    <div className={styles.location}>
                                        <MapPin size={16} /> {tour.location}
                                    </div>
                                    <div className={styles.rating}>
                                        <div className={styles.stars}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#f97316" color="#f97316">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                        <strong>{tour.rating}</strong>
                                        <span className={styles.reviewCount}>({tour.reviews})</span>
                                    </div>
                                </div>

                                <h3>{tour.title}</h3>
                                <p>{tour.description}</p>

                                <div className={styles.cardFooter}>
                                    <div className={styles.price}>
                                        <span>From</span>
                                        <strong>€{tour.price}</strong>
                                    </div>
                                    <Link href={`/tours/${tour.slug}`} className={styles.viewBtn}>
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
