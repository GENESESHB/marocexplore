'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Testimonials({ customTestimonials, title = "What Our Guests Say", subtitle = "Traveler Stories" }) {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const defaultTestimonials = [
        {
            id: 1,
            name: "Sarah & James Morrison",
            location: "London, UK",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            date: "October 2024",
            experience: "Desert & Amazigh Culture",
            title: "Life-Changing Amazigh Hospitality in the Sahara",
            text: "Our 3-day Merzouga tour was absolutely magical. Sleeping in a luxury desert camp under the stars, listening to the imzad (Amazigh violin) by the fire, and sharing mint tea with our nomadic hosts gave us a profound appreciation for Amazigh culture.",
            verified: true
        },
        {
            id: 2,
            name: "Marcus Chen",
            location: "Toronto, Canada",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            date: "September 2024",
            experience: "Atlas Mountains & Berber Villages",
            title: "Authentic Berber Life in the High Atlas",
            text: "Morocco Explore took us beyond the tourist trail into the heart of the Atlas Mountains. We stayed in a traditional Amazigh gîte in Imlil, learned to make tagine from a local family, and hiked through terraced valleys unchanged for centuries.",
            verified: true
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            location: "Madrid, Spain",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 5,
            date: "August 2024",
            experience: "Fes & Cultural Immersion",
            title: "Discovering Hidden Morocco in Fes",
            text: "We've traveled extensively, but Morocco Explore provided something truly special. In Fes, we didn't just see the tanneries—we met the master craftsmen and learned about the ancient techniques passed down through generations.",
            verified: true
        }
    ];

    const displayTestimonials = customTestimonials || defaultTestimonials;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % displayTestimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [displayTestimonials.length]);

    return (
        <section className={styles.communitySection}>
            <div className={styles.communityContainer}>
                {/* Section Header */}
                <div className={styles.communityHeader}>
                    <h2 className={styles.communityTitle}>{title}</h2>
                    <p className={styles.communitySubtitle}>{subtitle}</p>
                </div>

                {/* Testimonials Grid */}
                <div className={styles.testimonialsGrid}>
                    {displayTestimonials.map((testimonial, index) => (
                        <article
                            key={testimonial.id || index}
                            className={`${styles.testimonialCard} ${activeTestimonial === index ? styles.testimonialCardActive : ''}`}
                            onClick={() => setActiveTestimonial(index)}
                        >
                            <div className={styles.testimonialCardHeader}>
                                <img src={testimonial.avatar} alt={testimonial.name} className={styles.testimonialCardAvatar} />
                                <div className={styles.testimonialCardMeta}>
                                    <h5>{testimonial.name}</h5>
                                    <div className={styles.testimonialCardRating}>
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className={styles.testimonialCardPreview}>{testimonial.title}</p>
                            <span className={styles.testimonialCardExperience}>{testimonial.experience}</span>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className={styles.communityCta}>
                    <p>Join 50,000+ happy travelers who discovered authentic Morocco with us</p>
                    <button className={styles.communityCtaButton} onClick={() => window.location.href = '/tours'}>
                        Start Your Journey
                    </button>
                </div>
            </div>
        </section>
    );
}
