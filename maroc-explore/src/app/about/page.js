import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import styles from './About.module.css';

export const metadata = {
    title: 'About Us - Maroc Explore',
    description: 'Learn about Maroc Explore, our mission to provide authentic Moroccan experiences, and our dedicated team of local experts.',
};

export default function AboutPage() {
    const aboutTestimonials = [
        {
            id: 1,
            name: "Eleanor Rigby",
            location: "Sydney, Australia",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            title: "Expert guides that felt like family",
            text: "Learning about the history of Fes from Fatima was incredible. She didn't just show us the sites; she shared her passion and her family's heritage with us. It felt incredibly authentic.",
            experience: "Fes Cultural Immersion"
        },
        {
            id: 2,
            name: "David Chen",
            location: "Vancouver, Canada",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            title: "The real Moroccan experience",
            text: "We wanted a tour that respected the local communities. Maroc Explore's dedication to sustainable tourism and deep Atlas Mountain connections gave us exactly that.",
            experience: "Atlas Mountains Trek"
        }
    ];

    const aboutFaqs = [
        {
            question: "How long has Maroc Explore been operating?",
            answer: "We have been crafting authentic Moroccan journeys for over 15 years, starting as a small family operation and growing into a leading boutique agency."
        },
        {
            question: "Are your guides certified professionals?",
            answer: "Yes, absolutely. All our guides are licensed by the Moroccan Ministry of Tourism and possess deep historical and cultural knowledge of the regions they cover."
        },
        {
            question: "What makes your tours 'sustainable'?",
            answer: "We partner directly with local Amazigh families, cooperatives, and small-scale artisans, ensuring that the revenue from our tours directly benefits the local economy and preserves traditional ways of life."
        }
    ];

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>About Maroc Explore</h1>
                    <p>Connecting curious travelers with the authentic heart of Morocco.</p>
                </div>
            </div>

            <div className={styles.content}>
                <section className={styles.section}>
                    <div className={styles.textContent}>
                        <h2>Our Story</h2>
                        <p>
                            Founded in Marrakech by a group of passionate local guides, Maroc Explore was born from a simple realization: the true beauty of Morocco lies far beyond the typical, crowded tourist trails. We wanted to share the authentic Morocco we know and love—the hidden, tranquil riads, the silent, awe-inspiring majesty of the Sahara desert, and the vibrant, welcoming traditions of the Amazigh communities.
                        </p>
                        <p>
                            Over the last 15 years, we've grown from a small family operation into a leading boutique travel agency, but our core mission remains completely unchanged: to provide authentic, respectful, and deeply immersive journeys that benefit both our travelers and the local communities we visit. From navigating the bustling, aromatic souks of Fes to sipping fresh mint tea under a canopy of Saharan stars, we handle every detail with meticulous care and passion.
                        </p>
                        <p>
                            Today, our team consists of over 50 local experts, drivers, and cultural guides. We pride ourselves on our deep local connections, ensuring that every itinerary is crafted with insider knowledge and an unwavering commitment to quality, safety, and sustainable tourism.
                        </p>
                    </div>
                    <div className={styles.imageContent}>
                        <img src="/images/maroc_explore-img/marrakech/marrakech-tours-trips-jamaaelfna.avif" alt="Our Story" />
                    </div>
                </section>

                <section className={`${styles.section} ${styles.reverse}`}>
                    <div className={styles.textContent}>
                        <h2>Our Mission</h2>
                        <p>
                            We believe that travel should be more than just sightseeing. It should be a bridge between cultures. Our mission is to promote sustainable tourism that preserves Morocco's unique cultural heritage while providing life-changing experiences for our guests.
                        </p>
                        <ul className={styles.missionList}>
                            <li><strong>Authenticity</strong>: We prioritize genuine encounters over manufactured tourist experiences.</li>
                            <li><strong>Sustainability</strong>: We work directly with local families and cooperatives to ensure tourism revenue stays in the community.</li>
                            <li><strong>Local Expertise</strong>: All our guides are certified locals with deep knowledge of history, language, and culture.</li>
                        </ul>
                    </div>
                    <div className={styles.imageContent}>
                        <img src="/images/maroc_explore-img/Ouarzazate/maroc-explore-ouarzazate.avif" alt="Our Mission" />
                    </div>
                </section>

                <Testimonials
                    customTestimonials={aboutTestimonials}
                    title="What Travelers Say About Us"
                    subtitle="Our Reputation"
                />
                <FAQ
                    customFaqs={aboutFaqs}
                    title="About Maroc Explore"
                    subtitle="Learn more about our agency and values."
                />
            </div>
        </div>
    );
}
