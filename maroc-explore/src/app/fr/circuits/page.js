import { Suspense } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import { toursActivitiesLibFr } from '@/app/lib/toursActivitiesLibFr';
import styles from './page.module.css';
import { MapPin, Clock, SlidersHorizontal, Sun } from 'lucide-react';

export const metadata = {
    title: 'Tous les Circuits & Expériences - Maroc Explore',
    description: "Parcourez notre collection complète de circuits et d\\'activités authentiques au Maroc. Du Sahara au Haut Atlas, en passant par les médinas.",
};

export default function ToursPage() {
    return (
        <div className={styles.page}>
            <Header />

            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumbs}>
                        <Link href="/fr">Accueil</Link> &gt; <span className={styles.activeCrumb}>Circuits</span>
                    </div>
                    <h1>Découvrez le Maroc</h1>
                    <p>Des voyages authentiques, des cours culturels et des aventures inoubliables conçus pour vous.</p>
                </div>
            </div>

            <div className={styles.container}>

                {/* Header / Filter Toolbar */}
                <div className={styles.toursHeader}>
                    <h2>Tous les Circuits et Expériences ({toursActivitiesLibFr.length})</h2>
                    <Link href="/fr/recherche" className={styles.filterBtn}>
                        <SlidersHorizontal size={18} />
                        Filtres Avancés
                    </Link>
                </div>

                {/* Tours Grid */}
                <div className={styles.grid}>
                    {toursActivitiesLibFr.map((tour) => (
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
                                        <span>À partir de</span>
                                        <strong>€{tour.price}</strong>
                                    </div>
                                    <Link href={`/fr/circuits/${tour.slug}`} className={styles.viewBtn}>
                                        Voir les Détails
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
