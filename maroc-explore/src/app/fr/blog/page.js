import React from 'react';
import Link from 'next/link';
import { toursActivitiesLibFr } from '@/app/lib/toursActivitiesLibFr';
import styles from './blogs.module.css';
import Header from '@/app/components/Header';

export const metadata = {
    title: 'Maroc Travel Blog & Guides 2026 - Maroc Explore',
    description: "Découvrez les meilleurs guides de voyage, joyaux cachés et conseils d'experts pour visiter le Maroc auprès des experts locaux de Maroc Explore.",
    keywords: ['Maroc Explore', 'Blog Voyage Maroc', 'Maroc 2026', 'Conseils Désert Sahara', 'Guide Marrakech', 'Circuits Maroc'],
};

export default function BlogsPage() {
    return (
        <div className={styles.blogsContainer}>
            <Header />
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Blog Voyage Maroc & Guides</h1>
                    <p>Découvrez les secrets du Sahara, la magie des médinas et nos conseils de voyage essentiels directement avec les experts de Maroc Explore.</p>
                </div>
            </div>

            <div className={styles.blogsGridContainer}>
                <h2 className={styles.sectionTitle}>Derniers Guides de Voyage</h2>
                <div className={styles.grid}>
                    {toursActivitiesLibFr.map((tour) => (
                        <Link href={`/fr/blog/${tour.slug}`} key={tour.id} className={styles.blogCard}>
                            <div className={styles.imageWrapper}>
                                <img src={tour.image} alt={`Maroc Explore Guide to ${tour.title}`} />
                                <div className={styles.categoryBadge}>{tour.category}</div>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.meta}>
                                    <span>Par Maroc Explore</span>
                                    <span>Voyage Guidé</span>
                                </div>
                                <h3>Le Guide Ultime Maroc Explore pour {tour.location} en 2026</h3>
                                <p className={styles.excerpt}>
                                    {tour.description} Découvrez des conseils de voyage authentiques et des astuces culturelles pour votre prochaine aventure marocaine.
                                </p>
                                <span className={styles.readMore}>Lire le Guide &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
