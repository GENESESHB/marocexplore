'use client';

import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function FAQ({ customFaqs, title = "Frequently Asked Questions", subtitle = "Everything you need to know about traveling with Morocco Explore." }) {
    const [activeFaq, setActiveFaq] = useState(null);

    const defaultFaqs = [
        {
            question: "What is the best time to visit Morocco?",
            answer: "Spring (March to May) and Autumn (September to November) offer ideal temperatures for exploring Morocco. During these months, you can enjoy pleasant weather ranging from 20-28°C (68-82°F), perfect for desert excursions, mountain trekking, and city exploration."
        },
        {
            question: "Do I need a visa to travel to Morocco?",
            answer: "Citizens from the US, Canada, UK, EU, Australia, and many other countries can enter Morocco visa-free for up to 90 days. Your passport must be valid for at least six months beyond your travel dates."
        },
        {
            question: "Is Morocco safe for tourists?",
            answer: "Morocco is generally very safe for tourists and has a well-developed tourism infrastructure. The country welcomes over 13 million visitors annually. As with any destination, we recommend normal precautions in crowded areas like medinas."
        },
        {
            question: "What should I pack for a Morocco tour?",
            answer: "Pack modest clothing respecting local culture—covering shoulders and knees is recommended. Essential items include: comfortable walking shoes, sunscreen, layers for temperature variations, and a reusable water bottle."
        },
        {
            question: "Can Morocco Explore customize private tours?",
            answer: "Absolutely! We specialize in tailor-made itineraries that match your interests, pace, and travel style. Contact us to start planning your perfect Morocco itinerary."
        }
    ];

    const displayFaqs = customFaqs || defaultFaqs;

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": displayFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className={styles.faqSection} aria-label="Frequently Asked Questions">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className={styles.faqContainer}>
                <div className={styles.faqHeader}>
                    <span className={styles.faqSubtitle}>{title}</span>
                    <h2 className={styles.faqTitle}>{title}</h2>
                    <p className={styles.faqDescription}>
                        {subtitle}
                    </p>
                </div>

                <div className={styles.faqList}>
                    {displayFaqs.map((faq, index) => (
                        <div
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
                            <div className={styles.faqAnswer}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
