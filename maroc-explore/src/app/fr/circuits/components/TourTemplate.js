'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
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

    const imageAltKeywords = `${tour.title}, ${tour.location}, circuit ${tour.category ? tour.category.toLowerCase() : 'maroc'}, voyage Maroc 2026, Maroc Explore`;

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
                        review: (tour.avisList?.[0] || tour.reviewsList?.[0]) ? {
                            '@type': 'Review',
                            reviewRating: {
                                '@type': 'Rating',
                                ratingValue: (tour.avisList?.[0]?.rating || tour.reviewsList?.[0]?.rating) || 5,
                                bestRating: 5,
                                worstRating: 1
                            },
                            author: {
                                '@type': 'Person',
                                name: (tour.avisList?.[0]?.name || tour.reviewsList?.[0]?.name) || "Voyageur Vérifié"
                            }
                        } : {
                            '@type': 'Review',
                            reviewRating: {
                                '@type': 'Rating',
                                ratingValue: tour.rating || 5,
                                bestRating: 5,
                                worstRating: 1
                            },
                            author: {
                                '@type': 'Person',
                                name: "Voyageur Vérifié"
                            }
                        },
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
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: tour.rating || 5,
                            reviewCount: tour.avis || tour.reviews || 10,
                            bestRating: 5,
                            worstRating: 1
                        },
                    })
                }}
            />
            <Header />

            {/* Hero Cover Section */}
            <div suppressHydrationWarning className={styles.hero}>
                <img src={tour.image} alt={`${tour.title} - ${imageAltKeywords}`} className={styles.heroImage} />
                <div suppressHydrationWarning className={styles.heroOverlay}></div>
                <div suppressHydrationWarning className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{tour.title}</h1>
                    <div suppressHydrationWarning className={styles.breadcrumbs}>
                        <Link href="/fr">Accueil</Link> &gt; <Link href="/fr/circuits">Circuits</Link> &gt; <span>{tour.location}</span> &gt; <span className={styles.activeCrumb}>{tour.title}</span>
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
                            <span className={styles.reviewCount}>({tour.avis} avis)</span>

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
                            <img src={tour.gallery?.[0] || tour.image} alt={`${tour.title} vue principale - ${imageAltKeywords}`} />
                        </div>
                        <div suppressHydrationWarning className={styles.sideImages}>
                            <div suppressHydrationWarning className={styles.topImage}>
                                <img src={tour.gallery?.[1] || tour.image} alt={`${tour.title} vue secondaire - ${imageAltKeywords}`} />
                            </div>
                            <div suppressHydrationWarning className={styles.bottomImage}>
                                <img src={tour.gallery?.[2] || tour.image} alt={`${tour.title} vue détaillée - ${imageAltKeywords}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div suppressHydrationWarning className={styles.mainContent}>
                <div suppressHydrationWarning className={styles.container}>

                    {/* Full-width Aperçu */}
                    <section className={`${styles.section} ${styles.fullWidthAperçu}`}>
                        <h2>Aperçu</h2>
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
                                        <h4>Durée</h4>
                                        <p>{tour.duration}</p>
                                    </div>
                                </div>
                                <div suppressHydrationWarning className={styles.infoItem}>
                                    <Calendar size={24} className={styles.infoIcon} />
                                    <div suppressHydrationWarning>
                                        <h4>Disponibilité</h4>
                                        <p>{tour.availability || 'Daily'}</p>
                                    </div>
                                </div>
                                <div suppressHydrationWarning className={styles.infoItem}>
                                    <MapPin size={24} className={styles.infoIcon} />
                                    <div suppressHydrationWarning>
                                        <h4>Lieux</h4>
                                        <p style={{ fontSize: '0.9rem', marginTop: '4px' }}><strong>Prise en charge :</strong> {tour.departurePoint}</p>
                                        <p style={{ fontSize: '0.9rem' }}><strong>Retour :</strong> {tour.returnPoint}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Points Forts */}
                            <section className={styles.section}>
                                <h2>Points Forts</h2>
                                <ul className={styles.highlightsList}>
                                    {tour.highlights.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                            </section>

                            {/* Itinéraire */}
                            {tour.itinerary && tour.itinerary.length > 0 && (
                                <section className={styles.section}>
                                    <h2>À quoi s'attendre</h2>
                                    <div suppressHydrationWarning className={styles.itineraryWrapper}>
                                        {tour.itinerary.map((item, i) => (
                                            <div suppressHydrationWarning key={i} className={styles.itineraryItem}>
                                                <div suppressHydrationWarning className={styles.itineraryMarker}>
                                                    <div suppressHydrationWarning className={styles.markerDot}></div>
                                                    {i < tour.itinerary.length - 1 && <div suppressHydrationWarning className={styles.markerLine}></div>}
                                                </div>
                                                <div suppressHydrationWarning className={styles.itineraryContent}>
                                                    <span className={styles.timeLabel}>
                                                        {item.day ? `Jour ${item.day}` : item.time}
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
                                            <h4 style={{ margin: '0 0 8px 0', color: '#166534', fontSize: '1.1rem', fontWeight: '700' }}>Expérience conçue par des experts</h4>
                                            <p style={{ margin: 0, color: '#15803d', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                                Chaque segment du <strong>{tour.title}</strong> a été méticuleusement planifié par nos experts locaux marocains. Nous trouvons l'équilibre parfait entre découverte passionnante, immersion culturelle et temps libre relaxant. Laissez-nous gérer la logistique complexe, la conduite et les horaires pour que vous puissiez simplement vous concentrer sur la création de souvenirs inoubliables à <strong>{tour.location}</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* Inclusions & Exclusions */}
                            <section className={styles.section}>
                                <h2>Ce qui est inclus</h2>
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
                                    {tour.title} <span style={{ color: '#0ea5e9' }}>2026</span>: Le Guide de Voyage Ultime de Maroc Explore
                                </h2>
                                
                                <div className={styles.premiumGlassContent}>
                                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155', marginBottom: '24px' }}>
                                        Si vous cherchez une aventure inoubliable en Afrique du Nord, le <strong>{tour.title}</strong> par <strong>Maroc Explore</strong> offre une expérience magique qui va au-delà de l'ordinaire. En 2026, voyager au Maroc est plus facile et plus gratifiant que jamais, et vous plonger dans un voyage {tour.category} comme celui-ci vous laissera des souvenirs pour la vie.
                                    </p>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', margin: '40px 0' }}>
                                        <div className={styles.seoProTip}>
                                            <h3 style={{ color: '#166534', marginTop: '0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Sparkles size={18} /> Conseil de Pro Maroc Explore
                                            </h3>
                                            <p style={{ color: '#15803d', margin: '0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                                Lors de votre visite à {tour.location}, ayez toujours une écharpe légère. C'est parfait pour les brises soudaines du désert ou pour visiter des sites sacrés avec respect. Nos guides locaux s'assurent que vous êtes toujours préparé pour le climat unique de {tour.location}.
                                            </p>
                                        </div>
                                        
                                        <div className={styles.seoSustainableBox}>
                                            <h3 style={{ color: '#0369a1', marginTop: '0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Globe size={18} /> Voyage Durable
                                            </h3>
                                            <p style={{ color: '#075985', margin: '0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                                En choisissant Maroc Explore, vous soutenez les coopératives locales à {tour.location}. Nous privilégions les transports écologiques et les séjours authentiques qui protègent le délicat écosystème marocain pour les générations futures.
                                            </p>
                                        </div>
                                    </div>

                                    <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '30px' }}>
                                        La riche histoire du Maroc est tissée dans le tissu même de ses médinas animées, de ses majestueuses kasbahs et de ses paysages sereins. Choisir le <strong>{tour.title}</strong> vous permet de suivre les traces des anciennes caravanes commerciales qui ont autrefois traversé ces mêmes terres. Partout à <strong>{tour.location}</strong>, vous trouverez des merveilles architecturales décorées de zelliges complexes et des souks animés parfumés d'épices.
                                    </p>

                                    <div className={styles.seoImageWrapper}>
                                        <img 
                                            src={tour.image} 
                                            alt={`${tour.title} - Expérience authentique ${tour.category} au Maroc 2026 - ${imageAltKeywords}`} 
                                            style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
                                        />
                                        <div className={styles.seoImageBadge}>
                                            Moments Authentiques à {tour.location}
                                        </div>
                                    </div>

                                    <h3 style={{ fontSize: '1.6rem', color: '#0f172a', margin: '40px 0 20px', fontWeight: '800' }}>Qu'est-ce qui différencie Maroc Explore ?</h3>
                                    <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '30px' }}>
                                        Selon <a href="https://www.visitmorocco.com/fr" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9', textDecoration: 'none', borderBottom: '2px solid rgba(14, 165, 233, 0.2)' }}>l'Office National Marocain du Tourisme</a>, le tourisme dans cette région met l'accent sur les rencontres authentiques. Cette philosophie est fortement intégrée dans le <strong>{tour.title}</strong>. Que vous naviguiez dans des médinas complexes ou que vous traversiez des dunes dorées, chaque instant est pensé pour l'authenticité.
                                    </p>

                                    <div className={styles.seoCommunityCta}>
                                        <h4 style={{ fontSize: '1.4rem', margin: '0 0 10px', fontWeight: '800' }}>Rejoignez la Communauté Maroc Explore</h4>
                                        <p style={{ color: '#cbd5e1', marginBottom: '25px', fontSize: '0.95rem' }}>Découvrez l'âme du Maroc avec nos experts locaux.</p>
                                        <Link href="/fr/circuits" className={styles.seoBrowseButton}>
                                            Voir Tous les Circuits 2026
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
                                        <h4>Besoin d'aide pour réserver ?</h4>
                                        <p>Appelez-nous ou WhatsApp</p>
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
                            {/* Avis des Clients */}
                            {tour.avisList && tour.avisList.length > 0 && (
                                <section className={styles.section}>
                                    <h2>Avis des Clients</h2>
                                    <div suppressHydrationWarning className={styles.avisSummary}>
                                        <div suppressHydrationWarning className={styles.reviewScoreBox}>
                                            <span className={styles.bigScore}>{Math.max(...tour.avisList.map(r => r.rating || 5)).toFixed(1)}</span>
                                            <span className={styles.outOf}>/ 5</span>
                                            <p>Basé sur {tour.avis} avis</p>
                                        </div>
                                        <div suppressHydrationWarning className={styles.reviewBars} style={{ marginTop: '10px' }}>
                                            <div suppressHydrationWarning className={styles.reviewBarRow}>
                                                <span>Excellent</span>
                                                <div suppressHydrationWarning className={styles.bar}><div suppressHydrationWarning className={styles.fillExcellent} style={{ width: '85%' }}></div></div>
                                                <span>{Math.floor(tour.avis * 0.85)}</span>
                                            </div>
                                            <div suppressHydrationWarning className={styles.reviewBarRow}>
                                                <span>Très Bien</span>
                                                <div suppressHydrationWarning className={styles.bar}><div suppressHydrationWarning className={styles.fillVeryGood} style={{ width: '10%' }}></div></div>
                                                <span>{Math.floor(tour.avis * 0.10)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimonial Navigation */}
                                    <div suppressHydrationWarning className={styles.testimonialNavigation}>
                                        {tour.avisList.map((_, idx) => (
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
                                        {tour.avisList.map((testimonial, index) => (
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
                                                <span className={styles.testimonialCardExperience}>{testimonial.experience} • Avis récent</span>

                                                <p style={{ marginTop: '15px', color: '#4b5563', fontSize: '14px', lineHeight: '1.6' }}>&quot;{testimonial.text}&quot;</p>
                                            </article>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Additional Info */}
                            <section className={styles.section}>
                                <h2>Informations Supplémentaires</h2>
                                <ul className={styles.additionalInfoList}>
                                    <li>La confirmation sera reçue au moment de la réservation.</li>
                                    <li>Déconseillé aux voyageurs souffrant de problèmes de dos ou de problèmes cardiaques.</li>
                                    <li><strong>Heure de Départ :</strong> {tour.departureTime || 'Voir les détails de réservation'}.</li>
                                    <li><strong>Détails de Retour :</strong> {tour.returnPoint || 'Retour au point de départ original'}.</li>
                                    <li>Ceci est une visite/activité privée. Seul votre groupe participera.</li>
                                </ul>
                            </section>

                            {/* FAQ Section */}
                            {tour.faqs && tour.faqs.length > 0 && (
                                <section className={styles.faqSection} aria-label="Frequently Asked Questions">
                                    <div suppressHydrationWarning className={styles.faqContainer}>
                                        <div suppressHydrationWarning className={styles.faqHeader}>
                                            <span className={styles.faqSubtitle}>FAQ</span>
                                            <h2 className={styles.faqTitle}>Questions Fréquentes</h2>
                                            <p className={styles.faqDescription}>
                                                Tout ce que vous devez savoir sur le {tour.title}
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
                                <p>Rejoignez plus de 50 000 voyageurs heureux qui ont découvert le Maroc authentique avec nous</p>
                                <button className={styles.communityCtaButton} onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}>
                                    Commencez Votre Voyage
                                </button>
                            </div>




                </div>
            </div>
            </div>
        </div>
    );
}
