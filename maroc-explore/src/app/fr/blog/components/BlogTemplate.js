'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { blogContentLibFr } from '@/app/lib/blogContentLibFr';
import styles from './blogPost.module.css';
import Header from '@/app/components/Header';
import { Clock, MapPin, Globe, Award, Sparkles, ChevronRight } from 'lucide-react';

export default function BlogTemplate({ tour }) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const blogData = blogContentLibFr[tour.slug];

    useEffect(() => {
        const updateScrollProgress = () => {
            const currentScrollY = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setScrollProgress((currentScrollY / scrollHeight) * 100);
            }
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    if (!tour || !blogData) return <div style={{ padding: '100px', textAlign: 'center' }}>Blog content missing for slug: {tour?.slug}</div>;

    const baseUrl = 'https://marocexplore.com';
    const postUrl = `${baseUrl}/blogs/${tour.slug}`;
    const absoluteImage = tour.image.startsWith('http') ? tour.image : `${baseUrl}${tour.image}`;

    const blogPostingJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: tour.title,
        description: tour.description,
        image: absoluteImage,
        author: {
            '@type': 'Organization',
            name: 'Maroc Explore',
            url: baseUrl
        },
        publisher: {
            '@type': 'Organization',
            name: 'Maroc Explore',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/icon.png`
            }
        },
        datePublished: '2026-01-01',
        dateModified: '2026-03-12',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': postUrl
        },
        articleBody: blogData.htmlContent.replace(/<[^>]*>?/gm, '').substring(0, 1000) // Plain text snippet
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: `${baseUrl}/fr`
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: `${baseUrl}/fr/blog`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: tour.title,
                item: postUrl
            }
        ]
    };

    return (
        <div className={styles.articleContainer}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {/* Inject Premium Fonts */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
            `}</style>

            <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />
            
            <Header />
            
            {/* Premium Hero Section */}
            <header className={styles.heroHeader} style={{ backgroundImage: `url(${tour.image})` }}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <div className={styles.metaInfo}>
                        <span className={styles.category}>{tour.category}</span>
                        <span className={styles.readTime}>10 Minutes de Lecture • Guide Premium</span>
                    </div>
                    <h1>{tour.title}</h1>
                    <p className={styles.subtitle}>{tour.description}</p>
                </div>
            </header>

            <div className={styles.contentLayout}>
                <main className={styles.mainContent}>
                    {/* Architectural Fact Box */}
                    <div className={styles.factBox}>
                        <h4><Award size={20} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Points Forts du Voyage</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
                            <div style={{ fontSize: '0.9rem' }}>
                                <span style={{ color: '#78716c', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', display: 'block' }}>Durée Principale</span>
                                <strong>{tour.duration}</strong>
                            </div>
                            <div style={{ fontSize: '0.9rem' }}>
                                <span style={{ color: '#78716c', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', display: 'block' }}>Lieu Principal</span>
                                <strong>{tour.location}</strong>
                            </div>
                            <div style={{ fontSize: '0.9rem' }}>
                                <span style={{ color: '#78716c', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', display: 'block' }}>Type d'Expérience</span>
                                <strong>Culturel Authentique</strong>
                            </div>
                        </div>
                    </div>

                    {/* The Article Body */}
                    <article 
                        className={styles.proseBlock} 
                        dangerouslySetInnerHTML={{ __html: blogData.htmlContent }} 
                    />

                    {/* Refined Footer CTA */}
                    <section className={styles.ctaBox}>
                        <h3>Commencez Votre Histoire à {tour.location}</h3>
                        <p>Vivez le <strong>{tour.title}</strong> exactement comme décrit. Départs privés. Guides experts. Confort absolu.</p>
                        <Link href={`/fr/circuits/${tour.slug}`} className={styles.bookButton}>
                            Explorer l'Itinéraire <ChevronRight size={16} style={{ display: 'inline', marginLeft: '5px' }} />
                        </Link>
                    </section>
                </main>

                <aside className={styles.sidebar}>
                    <div className={styles.sidebarSticky}>
                        <div className={styles.authorCard}>
                            <div className={styles.authorAvatar}>ME</div>
                            <h4>Organisé Par</h4>
                            <p>L'Équipe Éditoriale de Maroc Explore. Profondément enracinée dans le sol de l'Afrique du Nord.</p>
                        </div>

                        <div className={styles.toursWidget}>
                            <h4>Expédition Recommandée</h4>
                            <img src={tour.image} alt={`Experience ${tour.title}`} />
                            <h5>{tour.title}</h5>
                            <Link href={`/fr/circuits/${tour.slug}`}>Voir les Disponibilités</Link>
                        </div>
                        
                        <div style={{ marginTop: '40px' }}>
                            <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#78716c', letterSpacing: '2px', marginBottom: '15px' }}>Assistance</h4>
                            <a href="tel:+212675576139" style={{ color: '#1c1917', fontSize: '0.85rem', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Globe size={16} color="#0ea5e9" /> Support WhatsApp
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
