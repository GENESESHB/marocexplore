'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import BookingForm from './BookingForm';
import { Clock, MapPin, Calendar, Circle, Star, Check, X, Sparkles, Award, Globe } from 'lucide-react';
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org/',
                        '@type': 'Product',
                        name: tour.title,
                        description: tour.fullDescription || tour.description,
                        image: [`https://marocexplore.com${tour.image}`],
                        sku: tour.slug,
                        mpn: `ME-${tour.slug.toUpperCase().replace(/\s+/g, '-')}`,
                        brand: {
                            '@type': 'Brand',
                            name: 'Maroc Explore'
                        },
                        review: tour.reviewsList?.[0] ? {
                            '@type': 'Review',
                            reviewRating: {
                                '@type': 'Rating',
                                ratingValue: tour.reviewsList[0].rating || 5,
                                bestRating: 5,
                                worstRating: 1
                            },
                            author: {
                                '@type': 'Person',
                                name: tour.reviewsList[0].name
                            }
                        } : undefined,
                        offers: {
                            '@type': 'Offer',
                            price: tour.price,
                            priceCurrency: 'USD',
                            availability: 'https://schema.org/InStock',
                            url: `https://marocexplore.com/tours/${tour.slug}`,
                            priceValidUntil: '2026-12-31',
                            hasMerchantReturnPolicy: {
                                '@type': 'MerchantReturnPolicy',
                                applicableCountry: 'MA',
                                returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
                                merchantReturnDays: 30,
                                returnMethod: 'https://schema.org/ReturnByMail',
                                returnFees: 'https://schema.org/FreeReturn'
                            },
                            shippingDetails: {
                                '@type': 'OfferShippingDetails',
                                shippingRate: {
                                    '@type': 'MonetaryAmount',
                                    value: 0,
                                    currency: 'USD'
                                },
                                shippingDestination: {
                                    '@type': 'DefinedRegion',
                                    addressCountry: 'MA'
                                },
                                deliveryTime: {
                                    '@type': 'ShippingDeliveryTime',
                                    handlingTime: {
                                        '@type': 'QuantitativeValue',
                                        minValue: 0,
                                        maxValue: 0,
                                        unitCode: 'd'
                                    },
                                    transitTime: {
                                        '@type': 'QuantitativeValue',
                                        minValue: 0,
                                        maxValue: 0,
                                        unitCode: 'd'
                                    }
                                }
                            }
                        },
                        aggregateRating: tour.reviews ? {
                            '@type': 'AggregateRating',
                            ratingValue: tour.rating,
                            reviewCount: tour.reviews,
                            bestRating: 5,
                            worstRating: 1
                        } : undefined,
                    })
                }}
            />
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

                                    <div suppressHydrationWarning style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                        <div style={{ backgroundColor: '#22c55e', color: 'white', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Check size={20} />
                                        </div>
                                        <div>
                                            <h4 style={{ margin: '0 0 8px 0', color: '#166534', fontSize: '1.1rem', fontWeight: '700' }}>Expertly Crafted Experience</h4>
                                            <p style={{ margin: 0, color: '#15803d', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                                Every segment of the <strong>{tour.title}</strong> has been meticulously planned by our local Moroccan experts. We strike the perfect balance of thrilling discovery, cultural immersion, and relaxing free time. Let us handle the complex logistics, driving, and timings so you can simply focus on making unforgettable memories in <strong>{tour.location}</strong>.
                                            </p>
                                        </div>
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

                            {/* Premium Integrated SEO Content */}
                            <section className={styles.seoRedesignSection}>
                                <h2 style={{ fontSize: '2.2rem', fontWeight: '900', border: 'none', padding: '0', margin: '0 0 30px 0' }}>
                                    {tour.title} <span style={{ color: '#0ea5e9' }}>2026</span>: The Ultimate Maroc Explore Travel Guide
                                </h2>
                                
                                <div className={styles.premiumGlassContent}>
                                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155', marginBottom: '24px' }}>
                                        If you are looking for an unforgettable adventure in North Africa, the <strong>{tour.title}</strong> by <strong>Maroc Explore</strong> offers a magical experience that goes beyond the ordinary. In 2026, traveling to Morocco is easier and more rewarding than ever, and immersing yourself in a {tour.category} journey like this one will leave you with memories that last a lifetime.
                                    </p>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', margin: '40px 0' }}>
                                        <div className={styles.seoProTip}>
                                            <h3 style={{ color: '#166534', marginTop: '0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Sparkles size={18} /> Maroc Explore Pro-Tip
                                            </h3>
                                            <p style={{ color: '#15803d', margin: '0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                                When visiting {tour.location}, always carry a light scarf. It&apos;s perfect for sudden desert breezes or visiting sacred sites with respect. Our local guides ensure you&apos;re always prepared for the unique climate of {tour.location}.
                                            </p>
                                        </div>
                                        
                                        <div className={styles.seoSustainableBox}>
                                            <h3 style={{ color: '#0369a1', marginTop: '0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Globe size={18} /> Sustainable Travel
                                            </h3>
                                            <p style={{ color: '#075985', margin: '0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                                By choosing Maroc Explore, you support local cooperatives in {tour.location}. We prioritize eco-friendly transport and authentic stays that protect the delicate Moroccan ecosystem for future generations.
                                            </p>
                                        </div>
                                    </div>

                                    <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '30px' }}>
                                        Morocco&apos;s rich history is woven into the very fabric of its bustling medinas, majestic kasbahs, and serene sweeping landscapes. Choosing the <strong>{tour.title}</strong> allows you to trace the footsteps of ancient trading caravans that once crossed these very lands. Throughout <strong>{tour.location}</strong>, you will find architectural marvels decorated with intricate zellige tilework and vibrant souks fragrant with spices.
                                    </p>

                                    <div className={styles.seoImageWrapper}>
                                        <img 
                                            src={tour.image} 
                                            alt={`${tour.title} - Premium Morocco ${tour.category} Experience 2026`} 
                                            style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
                                        />
                                        <div className={styles.seoImageBadge}>
                                            Authentic {tour.location} Moments
                                        </div>
                                    </div>

                                    <h3 style={{ fontSize: '1.6rem', color: '#0f172a', margin: '40px 0 20px', fontWeight: '800' }}>What makes Maroc Explore different?</h3>
                                    <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '30px' }}>
                                        According to the official <a href="https://www.visitmorocco.com/fr" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9', textDecoration: 'none', borderBottom: '2px solid rgba(14, 165, 233, 0.2)' }}>Moroccan National Tourist Office</a>, tourism in this region emphasizes authentic encounters. This ethos is heavily embedded into the <strong>{tour.title}</strong>. Whether you are navigating intricate medinas or crossing golden dunes, every moment is crafted for authenticity.
                                    </p>

                                    <div className={styles.seoCommunityCta}>
                                        <h4 style={{ fontSize: '1.4rem', margin: '0 0 10px', fontWeight: '800' }}>Join the Maroc Explore Community</h4>
                                        <p style={{ color: '#cbd5e1', marginBottom: '25px', fontSize: '0.95rem' }}>Discover the soul of Morocco with our local experts.</p>
                                        <Link href="/tours" className={styles.seoBrowseButton}>
                                            Browse All 2026 Tours
                                        </Link>
                                    </div>
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

                                                <p style={{ marginTop: '15px', color: '#4b5563', fontSize: '14px', lineHeight: '1.6' }}>&quot;{testimonial.text}&quot;</p>
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
