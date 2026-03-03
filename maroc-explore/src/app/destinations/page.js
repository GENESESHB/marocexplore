import Link from 'next/link';
import Header from '../components/Header';
import styles from './Destinations.module.css';

export const metadata = {
    title: 'Moroccan Destinations - Explore Marrakech, Fes, Sahara & More | Maroc Explore',
    description: 'Discover the diverse regions of Morocco. From the imperial cities of Marrakech and Fes to the golden dunes of the Sahara and the blue pearl of Chefchaouen.',
};

export default function DestinationsPage() {
    const regions = [
        {
            id: 'marrakech',
            name: 'Marrakech',
            tagline: 'The vibrant heart of the south',
            description: 'Experience the magic of the Red City. A sensory explosion of color, sound, and scent in the legendary medina.',
            image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800'
        },
        {
            id: 'fes',
            name: 'Fes',
            tagline: 'The spiritual and intellectual capital',
            description: 'Step back in time in the largest living medieval city in the world. Home to the world\'s oldest university.',
            image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800'
        },
        {
            id: 'merzouga',
            name: 'The Sahara',
            tagline: 'Golden dunes and infinite horizons',
            description: 'Adventure deep into the Erg Chebbi dunes. Experience the profound silence and spectacular stars of Merzouga.',
            image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800'
        },
        {
            id: 'chefchaouen',
            name: 'Chefchaouen',
            tagline: 'The serene Blue Pearl',
            description: 'Nestled in the Rif Mountains, this blue-washed city offers a tranquil escape and breathtaking mountain views.',
            image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800'
        },
        {
            id: 'essaouira',
            name: 'Essaouira',
            tagline: 'The windy city of the Atlantic',
            description: 'A fortified coastal town with blue-and-white houses, a bustling port, and a laid-back artistic soul.',
            image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800'
        },
        {
            id: 'atlas',
            name: 'Atlas Mountains',
            tagline: 'Majestic peaks and Berber life',
            description: 'Hike through terraced valleys and stay in traditional Amazigh gites in the shadow of Mount Toubkal.',
            image: 'https://images.unsplash.com/photo-1553244619-cfd23e3e4ed5?w=800'
        }
    ];

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Our Destinations</h1>
                    <p>From the Atlantic coast to the Sahara sands, discover the diversity of Morocco.</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.destGrid}>
                    {regions.map((region) => (
                        <Link
                            key={region.id}
                            href={`/filter?destination=${region.id}`}
                            className={styles.destCard}
                        >
                            <div className={styles.cardImage}>
                                <img src={region.image} alt={region.name} />
                                <div className={styles.cardOverlay}></div>
                                <div className={styles.cardContent}>
                                    <span className={styles.tagline}>{region.tagline}</span>
                                    <h3>{region.name}</h3>
                                    <p>{region.description}</p>
                                    <span className={styles.cta}>Explore Tours →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
