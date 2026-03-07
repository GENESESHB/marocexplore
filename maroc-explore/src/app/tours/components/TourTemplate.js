'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import BookingForm from './BookingForm';
import { Clock, MapPin, Calendar, Circle, Star, Check, X } from 'lucide-react';
import styles from './TourTemplate.module.css';

export default function TourTemplate({ tour }) {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    if (!tour) return null;

    return (
        <div suppressHydrationWarning className={styles.page}>
            <Header />

            {/* Hero Cover Section */}
            <div suppressHydrationWarning className={styles.hero}>
                <img src={tour.image} alt={tour.title} className={styles.heroImage} />
                <div suppressHydrationWarning className={styles.heroOverlay}></div>
                <div suppressHydrationWarning className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{tour.title}</h1>
                    <div suppressHydrationWarning className={styles.breadcrumbs}>
                        <Link href="/">Home</Link> &gt; <Link href="/tours">Tours</Link> &gt; <span>{tour.location}</span> &gt; <span className={styles.activeCrumb}>{tour.title}</span>
                    </div>
                </div>
            </div>

            {/* Header Meta Section */}
            <div suppressHydrationWarning className={styles.headerMetaSection}>
                <div suppressHydrationWarning className={styles.container}>
                    <div suppressHydrationWarning className={styles.headerMeta}>
                        <div suppressHydrationWarning className={styles.rating}>
                            <Star className={styles.tripAdvisorBubble} fill="#f97316" color="#f97316" size={18} />
                            <Star className={styles.tripAdvisorBubble} fill="#f97316" color="#f97316" size={18} />
                            <Star className={styles.tripAdvisorBubble} fill="#f97316" color="#f97316" size={18} />
                            <Star className={styles.tripAdvisorBubble} fill="#f97316" color="#f97316" size={18} />
                            <Star className={styles.tripAdvisorBubble} fill="#f97316" color="#f97316" size={18} />
                            <span className={styles.ratingScore} style={{ marginLeft: '5px' }}>{tour.rating}</span>
                            <span className={styles.reviewCount}>({tour.reviews} reviews)</span>

                        </div>
                        <div suppressHydrationWarning className={styles.location}>
                            <MapPin size={18} />
                            <span>{tour.location}, Morocco</span>
                        </div>
                        <span className={styles.categoryBadge}>{tour.category}</span>
                    </div>
                </div>
            </div>

            {/* Photo Gallery (TripAdvisor Style) */}
            <div suppressHydrationWarning className={styles.gallerySection}>
                <div suppressHydrationWarning className={styles.container}>
                    <div suppressHydrationWarning className={styles.galleryGrid}>
                        <div suppressHydrationWarning className={styles.mainImage}>
                            <img src={tour.gallery?.[0] || tour.image} alt={`${tour.title} main view`} />
                        </div>
                        <div suppressHydrationWarning className={styles.sideImages}>
                            <div suppressHydrationWarning className={styles.topImage}>
                                <img src={tour.gallery?.[1] || tour.image} alt={`${tour.title} secondary view`} />
                            </div>
                            <div suppressHydrationWarning className={styles.bottomImage}>
                                <img src={tour.gallery?.[2] || tour.image} alt={`${tour.title} detail view`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div suppressHydrationWarning className={styles.mainContent}>
                <div suppressHydrationWarning className={styles.container}>

                    {/* Full-width Overview */}
                    <section className={`${styles.section} ${styles.fullWidthOverview}`}>
                        <h2>Overview</h2>
                        <div suppressHydrationWarning className={styles.overviewContent}>
                            <p>{tour.fullDescription}</p>
                        </div>
                    </section>

                    <div suppressHydrationWarning className={styles.layoutGrid}>

                        {/* Left Column - Details */}
                        <div suppressHydrationWarning className={styles.detailsColumn}>

                            {/* Quick Info Bar */}
                            <div suppressHydrationWarning className={styles.quickInfoBox}>
                                <div suppressHydrationWarning className={styles.infoItem}>
                                    <Clock size={24} className={styles.infoIcon} />
                                    <div suppressHydrationWarning>
                                        <h4>Duration</h4>
                                        <p>{tour.duration}</p>
                                    </div>
                                </div>
                                <div suppressHydrationWarning className={styles.infoItem}>
                                    <Calendar size={24} className={styles.infoIcon} />
                                    <div suppressHydrationWarning>
                                        <h4>Availability</h4>
                                        <p>{tour.availability || 'Daily'}</p>
                                    </div>
                                </div>
                                <div suppressHydrationWarning className={styles.infoItem}>
                                    <MapPin size={24} className={styles.infoIcon} />
                                    <div suppressHydrationWarning>
                                        <h4>Locations</h4>
                                        <p style={{ fontSize: '0.9rem', marginTop: '4px' }}><strong>Pick-up:</strong> {tour.departurePoint}</p>
                                        <p style={{ fontSize: '0.9rem' }}><strong>Drop-off:</strong> {tour.returnPoint}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Highlights */}
                            <section className={styles.section}>
                                <h2>Highlights</h2>
                                <ul className={styles.highlightsList}>
                                    {tour.highlights.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                            </section>

                            {/* Itinerary */}
                            {tour.itinerary && tour.itinerary.length > 0 && (
                                <section className={styles.section}>
                                    <h2>What to Expect</h2>
                                    <div suppressHydrationWarning className={styles.itineraryWrapper}>
                                        {tour.itinerary.map((item, i) => (
                                            <div suppressHydrationWarning key={i} className={styles.itineraryItem}>
                                                <div suppressHydrationWarning className={styles.itineraryMarker}>
                                                    <div suppressHydrationWarning className={styles.markerDot}></div>
                                                    {i < tour.itinerary.length - 1 && <div suppressHydrationWarning className={styles.markerLine}></div>}
                                                </div>
                                                <div suppressHydrationWarning className={styles.itineraryContent}>
                                                    <span className={styles.timeLabel}>
                                                        {item.day ? `Day ${item.day}` : item.time}
                                                    </span>
                                                    <h3>{item.title || item.activity}</h3>
                                                    <p>{item.content}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Inclusions & Exclusions */}
                            <section className={styles.section}>
                                <h2>What&apos;s Included</h2>
                                <div suppressHydrationWarning className={styles.inExGrid}>
                                    <div suppressHydrationWarning className={styles.inclusions}>
                                        <ul className={styles.checkList}>
                                            {tour.included?.map((item, i) => (
                                                <li key={i} className={styles.includedItem}>
                                                    <Check size={18} className={styles.checkIcon} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {tour.excluded && tour.excluded.length > 0 && (
                                        <div suppressHydrationWarning className={styles.exclusions}>
                                            <ul className={styles.crossList}>
                                                {tour.excluded.map((item, i) => (
                                                    <li key={i} className={styles.excludedItem}>
                                                        <X size={18} className={styles.crossIcon} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </section>

                        </div>

                        {/* Right Column - Booking Form Widget */}
                        <div suppressHydrationWarning className={styles.sidebarColumn}>
                            <div suppressHydrationWarning className={styles.stickyWidget}>
                                <BookingForm tourTitle={tour.title} price={tour.price} />

                                <div suppressHydrationWarning className={styles.widgetFooter}>
                                    <div suppressHydrationWarning className={styles.supportBox}>
                                        <h4>Need help booking?</h4>
                                        <p>Call us or WhatsApp</p>
                                        <a href="tel:+212675576139">+212 675576139</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            {/* Full-Width Bottom Sections */}
            <div suppressHydrationWarning className={styles.bottomSectionsWrapper}>
                <div suppressHydrationWarning className={styles.bottomSectionsContainer}>
                            {/* Guest Reviews */}
                            {tour.reviewsList && tour.reviewsList.length > 0 && (
                                <section className={styles.section}>
                                    <h2>Guest Reviews</h2>
                                    <div suppressHydrationWarning className={styles.reviewsSummary}>
                                        <div suppressHydrationWarning className={styles.reviewScoreBox}>
                                            <span className={styles.bigScore}>{Math.max(...tour.reviewsList.map(r => r.rating || 5)).toFixed(1)}</span>
                                            <span className={styles.outOf}>/ 5</span>
                                            <p>Based on {tour.reviews} reviews</p>
                                        </div>
                                        <div suppressHydrationWarning className={styles.reviewBars} style={{ marginTop: '10px' }}>
                                            <div suppressHydrationWarning className={styles.reviewBarRow}>
                                                <span>Excellent</span>
                                                <div suppressHydrationWarning className={styles.bar}><div suppressHydrationWarning className={styles.fillExcellent} style={{ width: '85%' }}></div></div>
                                                <span>{Math.floor(tour.reviews * 0.85)}</span>
                                            </div>
                                            <div suppressHydrationWarning className={styles.reviewBarRow}>
                                                <span>Very Good</span>
                                                <div suppressHydrationWarning className={styles.bar}><div suppressHydrationWarning className={styles.fillVeryGood} style={{ width: '10%' }}></div></div>
                                                <span>{Math.floor(tour.reviews * 0.10)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimonial Navigation */}
                                    <div suppressHydrationWarning className={styles.testimonialNavigation}>
                                        {tour.reviewsList.map((_, idx) => (
                                            <button
                                                key={idx}
                                                className={`${styles.navDot} ${activeTestimonial === idx ? styles.navDotActive : ''}`}
                                                onClick={() => setActiveTestimonial(idx)}
                                                aria-label={`Go to testimonial ${idx + 1}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Testimonials Grid */}
                                    <div suppressHydrationWarning className={styles.testimonialsGrid}>
                                        {tour.reviewsList.map((testimonial, index) => (
                                            <article
                                                key={testimonial.id || index}
                                                className={`${styles.testimonialCard} ${activeTestimonial === index ? styles.testimonialCardActive : ''}`}
                                                onClick={() => setActiveTestimonial(index)}
                                            >
                                                <div suppressHydrationWarning className={styles.testimonialCardHeader}>
                                                    <img src={testimonial.avatar} alt={testimonial.name} className={styles.testimonialCardAvatar} />
                                                    <div suppressHydrationWarning className={styles.testimonialCardMeta}>
                                                        <h5>{testimonial.name}</h5>
                                                        <div suppressHydrationWarning className={styles.testimonialCardRating}>
                                                            {[...Array(testimonial.rating || 5)].map((_, i) => (
                                                                <Star key={i} size={14} fill="#00af87" color="#00af87" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className={styles.testimonialCardPreview}>{testimonial.title}</p>
                                                <span className={styles.testimonialCardExperience}>{testimonial.experience} • Reviewed recently</span>

                                                <p style={{ marginTop: '15px', color: '#4b5563', fontSize: '14px', lineHeight: '1.6' }}>"{testimonial.text}"</p>
                                            </article>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Additional Info */}
                            <section className={styles.section}>
                                <h2>Additional Information</h2>
                                <ul className={styles.additionalInfoList}>
                                    <li>Confirmation will be received at time of booking.</li>
                                    <li>Not recommended for travelers with back problems or heart conditions (for desert/mountain tours).</li>
                                    <li><strong>Departure Time:</strong> {tour.departureTime || 'See booking details'}.</li>
                                    <li><strong>Return Details:</strong> {tour.returnPoint || 'Returns to original departure point'}.</li>
                                    <li>This is a private tour/activity. Only your group will participate.</li>
                                </ul>
                            </section>

                            {/* FAQ Section */}
                            {tour.faqs && tour.faqs.length > 0 && (
                                <section className={styles.faqSection} aria-label="Frequently Asked Questions">
                                    <div suppressHydrationWarning className={styles.faqContainer}>
                                        <div suppressHydrationWarning className={styles.faqHeader}>
                                            <span className={styles.faqSubtitle}>FAQ</span>
                                            <h2 className={styles.faqTitle}>Common Questions</h2>
                                            <p className={styles.faqDescription}>
                                                Everything you need to know about the {tour.title}
                                            </p>
                                        </div>

                                        <div suppressHydrationWarning className={styles.faqList}>
                                            {tour.faqs.map((faq, index) => (
                                                <div suppressHydrationWarning
                                                    key={index}
                                                    className={`${styles.faqItem} ${activeFaq === index ? styles.faqItemActive : ''}`}
                                                >
                                                    <button
                                                        className={styles.faqQuestion}
                                                        onClick={() => toggleFaq(index)}
                                                        aria-expanded={activeFaq === index}
                                                    >
                                                        {faq.question}
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </button>
                                                    <div suppressHydrationWarning className={styles.faqAnswer}>
                                                        <p>{faq.answer}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* CTA */}
                            <div suppressHydrationWarning className={styles.communityCta}>
                                <p>Join 50,000+ happy travelers who discovered authentic Morocco with us</p>
                                <button className={styles.communityCtaButton} onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}>
                                    Start Your Journey
                                </button>
                            </div>

                </div>
            </div>
            </div>
        </div>
    );
}
