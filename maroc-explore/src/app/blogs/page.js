import React from 'react';
import Link from 'next/link';
import { toursActivitiesLib } from '@/app/lib/toursActivitiesLib';
import styles from './blogs.module.css';
import Header from '../components/Header';

export const metadata = {
    title: 'Morocco Travel Blog & Guides 2026 - Maroc Explore',
    description: 'Discover the best travel guides, hidden gems, and expert tips for touring Morocco from the local experts at Maroc Explore.',
    keywords: ['Maroc Explore', 'Morocco Travel Blog', 'Morocco 2026', 'Sahara Desert tips', 'Marrakech guide', 'Morocco tours'],
};

export default function BlogsPage() {
    return (
        <div className={styles.blogsContainer}>
            <Header />
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Morocco Travel Blog & Guides</h1>
                    <p>Discover the secrets of the Sahara, the magic of the medinas, and ultimate travel tips directly from Maroc Explore experts.</p>
                </div>
            </div>

            <div className={styles.blogsGridContainer}>
                <h2 className={styles.sectionTitle}>Latest Travel Guides</h2>
                <div className={styles.grid}>
                    {toursActivitiesLib.map((tour) => (
                        <Link href={`/blogs/${tour.slug}`} key={tour.id} className={styles.blogCard}>
                            <div className={styles.imageWrapper}>
                                <img src={tour.image} alt={`Maroc Explore Guide to ${tour.title}`} />
                                <div className={styles.categoryBadge}>{tour.category}</div>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.meta}>
                                    <span>By Maroc Explore</span>
                                    <span>Guided Travel</span>
                                </div>
                                <h3>The Ultimate Maroc Explore Guide to {tour.location} in 2026</h3>
                                <p className={styles.excerpt}>
                                    {tour.description} Explore authentic travel tips and cultural insights for your next Moroccan adventure.
                                </p>
                                <span className={styles.readMore}>Read Full Guide &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
