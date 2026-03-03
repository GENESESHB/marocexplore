import Header from '../components/Header';
import styles from './About.module.css';

export const metadata = {
    title: 'About Us - Maroc Explore',
    description: 'Learn about Maroc Explore, our mission to provide authentic Moroccan experiences, and our dedicated team of local experts.',
};

export default function AboutPage() {
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
                            Founded in Marrakech by a group of passionate local guides, Maroc Explore was born from a simple realization: the true beauty of Morocco lies beyond the typical tourist trails. We wanted to share the Morocco we know and love—the hidden riads, the silent majesty of the desert, and the vibrant traditions of Amazigh communities.
                        </p>
                        <p>
                            Over the last 15 years, we've grown from a small family operation into a leading boutique travel agency, but our core mission remains unchanged: to provide authentic, respectful, and deeply immersive journeys that benefit both our travelers and local communities.
                        </p>
                    </div>
                    <div className={styles.imageContent}>
                        <img src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800" alt="Our Story" />
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
                        <img src="https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800" alt="Our Mission" />
                    </div>
                </section>

                <section className={styles.teamSection}>
                    <h2>Meet the Experts</h2>
                    <div className={styles.teamGrid}>
                        <div className={styles.teamMember}>
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ahmed" />
                            <h3>Ahmed</h3>
                            <p>Founder & Lead Desert Guide</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Fatima" />
                            <h3>Fatima</h3>
                            <p>Cultural Heritage Specialist</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Mohamed" />
                            <h3>Mohamed</h3>
                            <p>Atlas Mountains Expert</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
