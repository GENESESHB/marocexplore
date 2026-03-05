import Link from 'next/link';
import Header from '../../components/Header';
import BookingForm from './BookingForm';
import { Clock, MapPin, Calendar, Circle, Star, Check, X } from 'lucide-react';
import styles from './TourTemplate.module.css';

export default function TourTemplate({ tour }) {
    if (!tour) return null;

    return (
        <div className={styles.page}>
            <Header />

            {/* Hero Cover Section */}
            <div className={styles.hero}>
                <img src={tour.image} alt={tour.title} className={styles.heroImage} />
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{tour.title}</h1>
                    <div className={styles.breadcrumbs}>
                        <Link href="/">Home</Link> &gt; <Link href="/tours">Tours</Link> &gt; <span>{tour.location}</span> &gt; <span className={styles.activeCrumb}>{tour.title}</span>
                    </div>
                </div>
            </div>

            {/* Header Meta Section */}
            <div className={styles.headerMetaSection}>
                <div className={styles.container}>
                    <div className={styles.headerMeta}>
                        <div className={styles.rating}>
                            <Star className={styles.tripAdvisorBubble} fill="#f97316" color="#f97316" size={18} />
                            <Star className={styles.tripAdvisorBubble} fill="#f97316" color="#f97316" size={18} />
                            <Star className={styles.tripAdvisorBubble} fill="#f97316" color="#f97316" size={18} />
                            <Star className={styles.tripAdvisorBubble} fill="#f97316" color="#f97316" size={18} />
                            <Star className={styles.tripAdvisorBubble} fill="#f97316" color="#f97316" size={18} />
                            <span className={styles.ratingScore} style={{ marginLeft: '5px' }}>{tour.rating}</span>
                            <span className={styles.reviewCount}>({tour.reviews} reviews)</span>

                        </div>
                        <div className={styles.location}>
                            <MapPin size={18} />
                            <span>{tour.location}, Morocco</span>
                        </div>
                        <span className={styles.categoryBadge}>{tour.category}</span>
                    </div>
                </div>
            </div>

            {/* Photo Gallery (TripAdvisor Style) */}
            <div className={styles.gallerySection}>
                <div className={styles.container}>
                    <div className={styles.galleryGrid}>
                        <div className={styles.mainImage}>
                            <img src={tour.gallery?.[0] || tour.image} alt={`${tour.title} main view`} />
                        </div>
                        <div className={styles.sideImages}>
                            <div className={styles.topImage}>
                                <img src={tour.gallery?.[1] || tour.image} alt={`${tour.title} secondary view`} />
                            </div>
                            <div className={styles.bottomImage}>
                                <img src={tour.gallery?.[2] || tour.image} alt={`${tour.title} detail view`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className={styles.mainContent}>
                <div className={styles.container}>

                    {/* Full-width Overview */}
                    <section className={`${styles.section} ${styles.fullWidthOverview}`}>
                        <h2>Overview</h2>
                        <div className={styles.overviewContent}>
                            <p>{tour.fullDescription}</p>
                        </div>
                    </section>

                    <div className={styles.layoutGrid}>

                        {/* Left Column - Details */}
                        <div className={styles.detailsColumn}>

                            {/* Quick Info Bar */}
                            <div className={styles.quickInfoBox}>
                                <div className={styles.infoItem}>
                                    <Clock size={24} className={styles.infoIcon} />
                                    <div>
                                        <h4>Duration</h4>
                                        <p>{tour.duration}</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <Calendar size={24} className={styles.infoIcon} />
                                    <div>
                                        <h4>Availability</h4>
                                        <p>{tour.availability || 'Daily'}</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <MapPin size={24} className={styles.infoIcon} />
                                    <div>
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
                                    <div className={styles.itineraryWrapper}>
                                        {tour.itinerary.map((item, i) => (
                                            <div key={i} className={styles.itineraryItem}>
                                                <div className={styles.itineraryMarker}>
                                                    <div className={styles.markerDot}></div>
                                                    {i < tour.itinerary.length - 1 && <div className={styles.markerLine}></div>}
                                                </div>
                                                <div className={styles.itineraryContent}>
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
                                <h2>What's Included</h2>
                                <div className={styles.inExGrid}>
                                    <div className={styles.inclusions}>
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
                                        <div className={styles.exclusions}>
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

                            {/* Guest Reviews Example */}
                            <section className={styles.section}>
                                <h2>Guest Reviews</h2>
                                <div className={styles.reviewsSummary}>
                                    <div className={styles.reviewScoreBox}>
                                        <span className={styles.bigScore}>{tour.rating}</span>
                                        <span className={styles.outOf}>/ 5</span>
                                        <p>Based on {tour.reviews} reviews</p>
                                    </div>
                                    <div className={styles.reviewBars}>
                                        <div className={styles.reviewBarRow}>
                                            <span>Excellent</span>
                                            <div className={styles.bar}><div className={styles.fillExcellent} style={{ width: '85%' }}></div></div>
                                            <span>{Math.floor(tour.reviews * 0.85)}</span>
                                        </div>
                                        <div className={styles.reviewBarRow}>
                                            <span>Very Good</span>
                                            <div className={styles.bar}><div className={styles.fillVeryGood} style={{ width: '10%' }}></div></div>
                                            <span>{Math.floor(tour.reviews * 0.10)}</span>
                                        </div>
                                        <div className={styles.reviewBarRow}>
                                            <span>Average</span>
                                            <div className={styles.bar}><div className={styles.fillAverage} style={{ width: '4%' }}></div></div>
                                            <span>{Math.floor(tour.reviews * 0.04)}</span>
                                        </div>
                                        <div className={styles.reviewBarRow}>
                                            <span>Poor</span>
                                            <div className={styles.bar}><div className={styles.fillPoor} style={{ width: '1%' }}></div></div>
                                            <span>{Math.floor(tour.reviews * 0.01)}</span>
                                        </div>
                                        <div className={styles.reviewBarRow}>
                                            <span>Terrible</span>
                                            <div className={styles.bar}><div className={styles.fillTerrible} style={{ width: '0%' }}></div></div>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.reviewCards}>
                                    <div className={styles.reviewCard}>
                                        <div className={styles.reviewHeader}>
                                            <div className={styles.reviewerInfo}>
                                                <div className={styles.reviewerAvatar}>SM</div>
                                                <div>
                                                    <h4>Sarah Jenkins</h4>
                                                    <span>London, UK • Reviewed 2 weeks ago</span>
                                                </div>
                                            </div>
                                            <div className={styles.reviewStars}>
                                                <Star size={14} fill="#f97316" color="#f97316" />
                                                <Star size={14} fill="#f97316" color="#f97316" />
                                                <Star size={14} fill="#f97316" color="#f97316" />
                                                <Star size={14} fill="#f97316" color="#f97316" />
                                                <Star size={14} fill="#f97316" color="#f97316" />
                                            </div>
                                        </div>
                                        <h4>An absolute dream experience!</h4>
                                        <p>"Every detail was perfectly organized. Our guide was incredibly knowledgeable and the accommodation exceeded all our expectations. Definitely the highlight of our trip to Morocco."</p>
                                    </div>
                                    <div className={styles.reviewCard}>
                                        <div className={styles.reviewHeader}>
                                            <div className={styles.reviewerInfo}>
                                                <div className={styles.reviewerAvatar}>MT</div>
                                                <div>
                                                    <h4>Marco Tari</h4>
                                                    <span>Milan, Italy • Reviewed last month</span>
                                                </div>
                                            </div>
                                            <div className={styles.reviewStars}>
                                                <Star size={14} fill="#f97316" color="#f97316" />
                                                <Star size={14} fill="#f97316" color="#f97316" />
                                                <Star size={14} fill="#f97316" color="#f97316" />
                                                <Star size={14} fill="#f97316" color="#f97316" />
                                                <Star size={14} fill="#f97316" color="#f97316" />
                                            </div>
                                        </div>
                                        <h4>Authentic and well-paced</h4>
                                        <p>"We saw so much without feeling rushed. The meals included were delicious and truly authentic. I highly recommend Maroc Explore for anyone wanting to see the real Morocco."</p>
                                    </div>
                                </div>
                            </section>

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

                        </div>

                        {/* Right Column - Booking Form Widget */}
                        <div className={styles.sidebarColumn}>
                            <div className={styles.stickyWidget}>
                                <BookingForm tourTitle={tour.title} price={tour.price} />

                                <div className={styles.widgetFooter}>
                                    <div className={styles.supportBox}>
                                        <h4>Need help booking?</h4>
                                        <p>Call us or WhatsApp</p>
                                        <a href="tel:+212675576139">+212 675576139</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
