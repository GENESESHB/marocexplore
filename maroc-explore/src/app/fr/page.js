'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header';
import styles from '@/app/styles/Home.module.css';
import { destinations, durations, activityTypes, categories, whyChooseTexts } from './homeDataBasic';
import { destinationContent, faqData, testimonials } from './homeDataFrench';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [duration, setDurée] = useState('');
  const [activityType, setActivitéType] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [isDuréeOpen, setIsDuréeOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [visibleImages, setVisibleImages] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const destRef = useRef(null);
  const durationRef = useRef(null);
  const activityRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const testimonialsRef = useRef(null);

  

  

  

  

  const whyChooseItems = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      text: whyChooseTexts[0]
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      text: whyChooseTexts[1]
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      text: whyChooseTexts[2]
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      text: whyChooseTexts[3]
    }
  ];

  const galleryImages = [
    {
      src: "/images/maroc_explore-img/merzouga/maroc-explore-marzouga-desert-trips.avif",
      alt: "Sahara Desert",
      span: "large"
    },
    {
      src: "/images/maroc_explore-img/marrakech/marrakech-tours.avif",
      alt: "Marrakech Medina",
      span: "tall"
    },
    {
      src: "/images/maroc_explore-img/marrakech/marrakech-colors-culter.avif",
      alt: "Atlas Mountains",
      span: "normal"
    },
    {
      src: "/images/maroc_explore-img/chefchaouen/chefchaouen-culter-blue-city-tours.avif",
      alt: "Blue City Chefchaouen",
      span: "normal"
    },
    {
      src: "/images/maroc_explore-img/rabat/maroc-explore-rabat-archetict-maroc-designe.avif",
      alt: "Moroccan Architecture",
      span: "wide"
    }
  ];

  // Destination data for the new alternating grid section
  // Testimonials data with Amazigh and Moroccan cultural experiences
  // FAQ data with Schema.org structured data
  const stats = [
    { number: "50,000+", label: "Happy Travelers" },
    { number: "15+", label: "Years Experience" },
    { number: "4.9", label: "TripAdvisor Rating" },
    { number: "200+", label: "5-Star Reviews" }
  ];

  // Generate FAQ Schema.org JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (destRef.current && !destRef.current.contains(event.target)) {
        setIsDestOpen(false);
      }
      if (durationRef.current && !durationRef.current.contains(event.target)) {
        setIsDuréeOpen(false);
      }
      if (activityRef.current && !activityRef.current.contains(event.target)) {
        setIsActivityOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleImages(prev => [...new Set([...prev, index])]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const images = document.querySelectorAll(`.${styles.galleryItem}`);
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (selectedDestination) params.set('destination', selectedDestination);
    if (duration) params.set('duration', duration);
    if (activityType) params.set('activity', activityType);
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);

    router.push(`/fr/recherche?${params.toString()}`);
  };

  const handleDestinationClick = (destId) => {
    setSelectedDestination(destId);
    const params = new URLSearchParams();
    params.set('destination', destId);
    router.push(`/fr/recherche?${params.toString()}`);
  };

  const handleActivityFilter = (activityId) => {
    setActivityType(activityId);
    const params = new URLSearchParams();
    params.set('activity', activityId);
    router.push(`/fr/recherche?${params.toString()}`);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const selectedDestObj = destinations.find(d => d.id === selectedDestination);
  const selectedActivityObj = activityTypes.find(a => a.id === activityType);

  return (
    <>
      {/* FAQ Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section with Header Inside */}
      <div suppressHydrationWarning className={styles.hero}>
        {/* Background Image */}
        <div suppressHydrationWarning className={styles.heroBackground}>
          <img
            src="/images/maroc_explore-img/chefchaouen/chefchaouen-culter-blue-city-tours.avif"
            alt="Morocco Landscape"
            className={styles.heroBgImage}
          />
          <div suppressHydrationWarning className={styles.heroOverlay}></div>
        </div>

        {/* Header Inside Hero */}
        <div suppressHydrationWarning className={styles.headerWrapper}>
          <Header />
        </div>

        {/* Hero Content */}
        <div suppressHydrationWarning className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Explorer le <span className={styles.heroHighlight}>Maroc</span>
          </h1>

          {/* Pill Search Bar - Now under the title */}
          <div suppressHydrationWarning className={styles.searchWrapper}>
            <div suppressHydrationWarning className={styles.searchPill}>

              {/* Destination */}
              <div suppressHydrationWarning className={styles.pillSection} ref={destRef}>
                <div suppressHydrationWarning
                  className={styles.pillContent}
                  onClick={() => {
                    setIsDestOpen(!isDestOpen);
                    setIsDuréeOpen(false);
                    setIsActivityOpen(false);
                  }}
                >
                  <div suppressHydrationWarning className={styles.pillLabel}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Destination
                  </div>
                  <span className={styles.pillValue}>
                    {selectedDestObj ? selectedDestObj.name : 'Où aller ?'}
                  </span>
                </div>

                {isDestOpen && (
                  <div suppressHydrationWarning className={styles.pillDropdown}>
                    <div suppressHydrationWarning className={styles.pillDropdownHeader}>Sélectionner une ville</div>
                    <div suppressHydrationWarning className={styles.pillDropdownList}>
                      {destinations.map((dest) => (
                        <div suppressHydrationWarning
                          key={dest.id}
                          className={`${styles.pillDropdownItem} ${selectedDestination === dest.id ? styles.pillDropdownItemActive : ''}`}
                          onClick={() => {
                            setSelectedDestination(dest.id);
                            setIsDestOpen(false);
                          }}
                        >
                          <span className={styles.pillDropdownText}>{dest.name}</span>
                          {selectedDestination === dest.id && (
                            <svg className={styles.checkIcon} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div suppressHydrationWarning className={styles.pillDivider}></div>

              {/* Durée */}
              <div suppressHydrationWarning className={styles.pillSection} ref={durationRef}>
                <div suppressHydrationWarning
                  className={styles.pillContent}
                  onClick={() => {
                    setIsDuréeOpen(!isDuréeOpen);
                    setIsDestOpen(false);
                    setIsActivityOpen(false);
                  }}
                >
                  <div suppressHydrationWarning className={styles.pillLabel}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Durée
                  </div>
                  <span className={styles.pillValue}>
                    {duration ? durations.find(d => d.value === duration)?.label : 'Combien de temps ?'}
                  </span>
                </div>

                {isDuréeOpen && (
                  <div suppressHydrationWarning className={styles.pillDropdown}>
                    <div suppressHydrationWarning className={styles.pillDropdownHeader}>Sélectionner la durée</div>
                    <div suppressHydrationWarning className={styles.pillDropdownList}>
                      {durations.map((dur) => (
                        <div suppressHydrationWarning
                          key={dur.value}
                          className={`${styles.pillDropdownItem} ${duration === dur.value ? styles.pillDropdownItemActive : ''}`}
                          onClick={() => {
                            setDurée(dur.value);
                            setIsDuréeOpen(false);
                          }}
                        >
                          <div suppressHydrationWarning className={styles.pillDropdownInfo}>
                            <span className={styles.pillDropdownText}>{dur.label}</span>
                            <span className={styles.pillDropdownSubtext}>{dur.days}</span>
                          </div>
                          {duration === dur.value && (
                            <svg className={styles.checkIcon} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div suppressHydrationWarning className={styles.pillDivider}></div>

              {/* Type d\'activité */}
              <div suppressHydrationWarning className={styles.pillSection} ref={activityRef}>
                <div suppressHydrationWarning
                  className={styles.pillContent}
                  onClick={() => {
                    setIsActivityOpen(!isActivityOpen);
                    setIsDestOpen(false);
                    setIsDuréeOpen(false);
                  }}
                >
                  <div suppressHydrationWarning className={styles.pillLabel}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Activity
                  </div>
                  <span className={styles.pillValue}>
                    {selectedActivityObj ? selectedActivityObj.label : 'Quel type ?'}
                  </span>
                </div>

                {isActivityOpen && (
                  <div suppressHydrationWarning className={styles.pillDropdown}>
                    <div suppressHydrationWarning className={styles.pillDropdownHeader}>Select Type d\'activité</div>
                    <div suppressHydrationWarning className={styles.pillDropdownList}>
                      {activityTypes.map((act) => (
                        <div suppressHydrationWarning
                          key={act.id}
                          className={`${styles.pillDropdownItem} ${activityType === act.id ? styles.pillDropdownItemActive : ''}`}
                          onClick={() => {
                            setActivityType(act.id);
                            setIsActivityOpen(false);
                          }}
                        >
                          <span className={styles.pillDropdownText}>{act.label}</span>
                          {activityType === act.id && (
                            <svg className={styles.checkIcon} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button className={styles.pillSearchButton} onClick={handleSearch}>
                <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

            </div>
          </div>

          {/* Subtitle - Hidden on mobile */}
          <p className={styles.heroSubtitle}>
            Des voyages authentiques à travers des médinas anciennes, des déserts dorés et une culture vibrante
          </p>

          <div suppressHydrationWarning className={styles.heroButtons}>
            <button className={styles.primaryButton} onClick={handleSearch}>
              <span>Voir les circuits</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className={styles.secondaryButton}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Voir la vidéo</span>
            </button>
          </div>
        </div>


      </div>

      {/* Why Choose Us - Compact Section */}
      <section className={styles.whyChooseCompact}>
        <div suppressHydrationWarning className={styles.whyChooseCompactContainer}>
          {whyChooseItems.map((item, index) => (
            <div suppressHydrationWarning key={index} className={styles.whyChooseItem}>
              <div suppressHydrationWarning className={styles.whyChooseIcon}>
                {item.icon}
              </div>
              <span className={styles.whyChooseText}>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className={styles.whatWeDoSection} ref={whatWeDoRef}>
        <div suppressHydrationWarning className={styles.whatWeDoContainer}>
          <div suppressHydrationWarning className={styles.whatWeDoContent}>
            <span className={styles.whatWeDoSubtitle}>Découvrir le Maroc</span>
            <h2 className={styles.whatWeDoTitle}>
              Nous Créons des Voyages <span className={styles.whatWeDoHighlight}>Inoubliables</span>
            </h2>
            <div suppressHydrationWarning className={styles.whatWeDoText}>
              <p>
                Chez <strong>Morocco Explore</strong>, nous transformons les rêves de voyage en réalité. Des dunes dorées du Sahara aux rues bleues de Chefchaouen, nous organisons des expériences immersives qui vous connectent à la riche tapisserie culturelle et historique du Maroc.</p>
              <p>
                Nos guides locaux experts révèlent des trésors cachés au-delà des sentiers touristiques - qu\'il s\'agisse d\'un thé à la menthe avec des familles berbères, de l\'exploration d\'anciennes kasbahs ou d\'une balade à dos de chameau au coucher du soleil. Chaque voyage est conçu avec soin.</p>
            </div>
            <div suppressHydrationWarning className={styles.whatWeDoFeatures}>
              <div suppressHydrationWarning className={styles.whatWeDoFeature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Expériences sur-mesure</span>
              </div>
              <div suppressHydrationWarning className={styles.whatWeDoFeature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Assistance 24/7</span>
              </div>
              <div suppressHydrationWarning className={styles.whatWeDoFeature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Rencontres Authentiques</span>
              </div>
            </div>
            <button className={styles.whatWeDoButton} onClick={handleSearch}>
              Commencer l\'Aventure
            </button>
          </div>

          <div suppressHydrationWarning className={styles.whatWeDoGallery}>
            {galleryImages.map((image, index) => (
              <div suppressHydrationWarning
                key={index}
                data-index={index}
                className={`${styles.galleryItem} ${styles[`gallery${image.span}`]} ${visibleImages.includes(index) ? styles.galleryItemVisible : ''}`}
              >
                <img src={image.src} alt={image.alt} />
                <div suppressHydrationWarning className={styles.galleryOverlay}>
                  <span>{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Destinations Section */}
      <section className={styles.alternatingDestinationsSection}>
        <div suppressHydrationWarning className={styles.alternatingContainer}>
          <div suppressHydrationWarning className={styles.alternatingHeader}>
            <span className={styles.alternatingSubtitle}>Explore Morocco</span>
            <h2 className={styles.alternatingTitle}>Découvrez Nos Destinations</h2>
            <p className={styles.alternatingDescription}>
              Voyagez à travers les villes impériales, les villages de montagne et les paysages désertiques tout en découvrant l\'authentique culture amazighe
            </p>
          </div>

          {destinationContent.map((dest, index) => (
            <article
              key={dest.id}
              className={`${styles.alternatingRow} ${index % 2 === 1 ? styles.alternatingRowReversed : ''}`}
            >
              {/* Image Column */}
              <div suppressHydrationWarning className={styles.alternatingImageCol}>
                <div suppressHydrationWarning className={styles.alternatingImageWrapper}>
                  <img src={dest.image} alt={`${dest.name} Morocco`} loading="lazy" />
                  <div suppressHydrationWarning className={styles.alternatingImageOverlay}>
                    <span className={styles.alternatingTagline}>{dest.tagline}</span>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div suppressHydrationWarning className={styles.alternatingContentCol}>
                <div suppressHydrationWarning className={styles.alternatingContent}>
                  <h3 className={styles.alternatingDestinationName}>{dest.name}</h3>

                  <div suppressHydrationWarning className={styles.alternatingBlock}>
                    <h4>Héritage Historique</h4>
                    <p>{dest.history}</p>
                  </div>

                  <div suppressHydrationWarning className={styles.alternatingBlock}>
                    <h4>Culture Amazighe</h4>
                    <p>{dest.amazigh}</p>
                  </div>

                  <div suppressHydrationWarning className={styles.alternatingActivities}>
                    <h4>What Travelers Can Do</h4>
                    <ul>
                      {dest.activities.map((activity, idx) => (
                        <li key={idx}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div suppressHydrationWarning className={styles.alternatingActivityLinks}>
                    <h4>Available Activities</h4>
                    <div suppressHydrationWarning className={styles.alternatingActivityTags}>
                      {dest.activityLinks.map((actId, idx) => {
                        const actLabel = activityTypes.find(a => a.id === actId)?.label;
                        return (
                          <Link
                            key={idx}
                            href={`/activities/${actId}`}
                            className={styles.alternatingActivityTag}
                          >
                            {actLabel}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    className={styles.alternatingCta}
                    onClick={() => handleDestinationClick(dest.id)}
                  >
                    Explore {dest.name} Tours
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Community & Testimonials Section */}
      <section className={styles.communitySection} ref={testimonialsRef}>
        <div suppressHydrationWarning className={styles.communityContainer}>

          {/* Stats Bar */}
          <div suppressHydrationWarning className={styles.statsBar}>
            {stats.map((stat, index) => (
              <div suppressHydrationWarning key={index} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Section Header */}
          <div suppressHydrationWarning className={styles.communityHeader}>
            <div suppressHydrationWarning className={styles.tripAdvisorBadge}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.tripAdvisorIcon}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span>TripAdvisor Traveler&apos;s Choice 2024</span>
            </div>
            <h2 className={styles.communityTitle}>Happy Travelers Share Their Stories</h2>
            <p className={styles.communitySubtitle}>
              Real experiences from our community discovering Amazigh heritage and Moroccan culture
            </p>
          </div>

          {/* Featured Testimonial */}
          <div suppressHydrationWarning className={styles.featuredTestimonial}>
            <div suppressHydrationWarning className={styles.testimonialCardLarge}>
              <div suppressHydrationWarning className={styles.testimonialHeader}>
                <div suppressHydrationWarning className={styles.testimonialAuthor}>
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className={styles.testimonialAvatar}
                  />
                  <div suppressHydrationWarning className={styles.testimonialMeta}>
                    <h4>{testimonials[activeTestimonial].name}</h4>
                    <span>{testimonials[activeTestimonial].location}</span>
                  </div>
                </div>
                <div suppressHydrationWarning className={styles.testimonialRating}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className={styles.ratingText}>5.0</span>
                </div>
              </div>

              <div suppressHydrationWarning className={styles.testimonialBadge}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                Verified Traveler
              </div>

              <h3 className={styles.testimonialTitle}>{testimonials[activeTestimonial].title}</h3>

              <p className={styles.testimonialText}>{testimonials[activeTestimonial].text}</p>

              <div suppressHydrationWarning className={styles.testimonialHighlights}>
                {testimonials[activeTestimonial].highlights.map((highlight, idx) => (
                  <span key={idx} className={styles.highlightTag}>
                    {highlight}
                  </span>
                ))}
              </div>

              <div suppressHydrationWarning className={styles.testimonialFooter}>
                <span className={styles.tripType}>{testimonials[activeTestimonial].tripType}</span>
                <span className={styles.testimonialDate}>{testimonials[activeTestimonial].date}</span>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div suppressHydrationWarning className={styles.testimonialNavigation}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.navDot} ${activeTestimonial === idx ? styles.navDotActive : ''}`}
                  onClick={() => setActiveTestimonial(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div suppressHydrationWarning className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                className={`${styles.testimonialCard} ${activeTestimonial === index ? styles.testimonialCardActive : ''}`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div suppressHydrationWarning className={styles.testimonialCardHeader}>
                  <img src={testimonial.avatar} alt={testimonial.name} className={styles.testimonialCardAvatar} />
                  <div suppressHydrationWarning className={styles.testimonialCardMeta}>
                    <h5>{testimonial.name}</h5>
                    <div suppressHydrationWarning className={styles.testimonialCardRating}>
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
          <div suppressHydrationWarning className={styles.communityCta}>
            <p>Join 50,000+ happy travelers who discovered authentic Morocco with us</p>
            <button className={styles.communityCtaButton} onClick={handleSearch}>
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema.org */}
      <section className={styles.faqSection} aria-label="Questions Fréquemment Posées">
        <div suppressHydrationWarning className={styles.faqContainer}>
          <div suppressHydrationWarning className={styles.faqHeader}>
            <span className={styles.faqSubtitle}>FAQ</span>
            <h2 className={styles.faqTitle}>Common Questions</h2>
            <p className={styles.faqDescription}>
              Everything you need to know about traveling to Morocco with us
            </p>
          </div>

          <div suppressHydrationWarning className={styles.faqList}>
            {faqData.map((faq, index) => (
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
                <div suppressHydrationWarning
                  className={styles.faqAnswer}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}