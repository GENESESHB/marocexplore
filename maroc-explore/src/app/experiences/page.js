import Link from 'next/link';
import Header from '../components/Header';
import styles from './Experiences.module.css';

export const metadata = {
    title: 'Moroccan Travel Experiences - Maroc Explore',
    description: 'Explore our curated Moroccan travel experiences. From desert expeditions and mountain treks to coastal escapes and luxury retreats.',
};

export default function ExperiencesPage() {
    const experiences = [
        {
            id: 'desert',
            title: 'Sahara Desert Expeditions',
            description: 'Experience the silence and majesty of the sand dunes. Camel treks, luxury camps, and nomadic encounters.',
            image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800',
            activity: 'adventure'
        },
        {
            id: 'mountain',
            title: 'Atlas Mountain Treks',
            description: 'Breathtaking landscapes, terraced valleys, and traditional Berber villages in North Africa\'s highest peaks.',
            image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800',
            activity: 'adventure'
        },
        {
            id: 'coastal',
            title: 'Atlantic Coastal Escapes',
            description: 'Relax in the wind-swept town of Essaouira or catch waves in Agadir. Fresh seafood and ocean breezes.',
            image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800',
            activity: 'relaxation'
        },
        {
            id: 'city',
            title: 'Imperial City Journeys',
            description: 'Navigate the labyrinthine medinas of Marrakech, Fes, and Rabat. History, architecture, and vibrant souks.',
            image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
            activity: 'cultural'
        },
        {
            id: 'luxury',
            title: 'Ultra-Luxury Retreats',
            description: 'The finest riads, private villas, and exclusive experiences tailored to your every desire.',
            image: 'https://images.unsplash.com/photo-1553244619-cfd23e3e4ed5?w=800',
            activity: 'luxury'
        },
        {
            id: 'authentic',
            title: 'Authentic Local Life',
            description: 'Go beyond the surface. Join a family for tea, learn traditional crafts like Henna (tatoige), or be a guest at a Moroccan celebration like a marriage or Sbou.',
            image: 'https://images.unsplash.com/photo-1516053303025-5d9f5173d216?w=800',
            activity: 'cultural'
        }
    ];

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Our Experiences</h1>
                    <p>Carefully curated journeys designed to inspire, challenge, and delight.</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.expGrid}>
                    {experiences.map((exp) => (
                        <div key={exp.id} className={styles.expCard}>
                            <div className={styles.cardImage}>
                                <img src={exp.image} alt={exp.title} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{exp.title}</h3>
                                <p>{exp.description}</p>
                                <div className={styles.cardFooter}>
                                    <Link href={`/activities/${exp.activity}`} className={styles.cta}>
                                        View Tours
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
