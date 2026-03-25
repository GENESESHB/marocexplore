import React from 'react';
import Link from 'next/link';
import { toursActivitiesLib } from '@/app/lib/toursActivitiesLib';
import { blogContentLib } from '@/app/lib/blogContentLib';
import styles from './blogPost.module.css';
import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const tour = toursActivitiesLib.find(t => t.slug === slug);
    
    if (!tour) return { title: 'Blog Not Found' };
    
    return {
        title: `Maroc Explore Guide: ${tour.title} in 2026`,
        description: `Read the official Maroc Explore 2026 guide for travelling to ${tour.location}. ${tour.description}`,
        keywords: ['Maroc Explore', 'Morocco tours 2026', tour.location, ...tour.highlights],
        openGraph: {
            title: `Maroc Explore Guide: ${tour.title}`,
            description: tour.description,
            images: [{ url: tour.image }],
        }
    };
}

export async function generateStaticParams() {
    return toursActivitiesLib.map((tour) => ({
        slug: tour.slug,
    }));
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const tour = toursActivitiesLib.find(t => t.slug === slug);
    const blogData = blogContentLib[slug];

    if (!tour || !blogData) return notFound();

    return (
        <div className={styles.articleContainer}>
            <Header />
            {/* Hero Image */}
            <header className={styles.heroHeader} style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url(${tour.image})` }}>
                <div className={styles.heroContent}>
                    <div className={styles.metaInfo}>
                        <span className={styles.category}>{tour.category}</span>
                        <span className={styles.readTime}>By Maroc Explore Experts</span>
                    </div>
                    <h1>Maroc Explore Ultimate 2026 Guide: {tour.title}</h1>
                    <p className={styles.subtitle}>{tour.description}</p>
                </div>
            </header>

            <div className={styles.contentLayout}>
                <main className={styles.mainContent}>
                    {/* Render the Completely Unique Custom Blog HTML */}
                    <section 
                        className={styles.proseBlock} 
                        dangerouslySetInnerHTML={{ __html: blogData.htmlContent }} 
                    />

                    {/* Footer CTA appended to the unique content */}
                    <section className={styles.proseBlock} style={{ marginTop: '0' }}>
                        <div className={styles.ctaBox}>
                            <h3>Ready to Write Your Own Travel Story?</h3>
                            <p>Don&apos;t just read about <strong>{tour.location}</strong>. Experience the magic for yourself with the expertly guided <strong>{tour.title}</strong> expedition.</p>
                            <Link href={`/fr/circuits/${tour.slug}`} className={styles.bookButton}>Voir le Circuit et Réserver</Link>
                        </div>
                    </section>
                </main>

                <aside className={styles.sidebar}>
                    <div className={styles.sidebarSticky}>
                        <div className={styles.authorCard}>
                            <div className={styles.authorAvatar}>ME</div>
                            <h4>Maroc Explore Experts</h4>
                            <p>Local guides sharing the best-kept secrets of Morocco since 2010.</p>
                        </div>

                        <div className={styles.toursWidget}>
                            <h4>Explore The Highlight</h4>
                            <img src={tour.image} alt={`Book ${tour.title} with Maroc Explore`} />
                            <h5>{tour.title}</h5>
                            <p>{tour.duration} • {tour.location}</p>
                            <Link href={`/fr/circuits/${tour.slug}`}>Voir les Détails</Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
