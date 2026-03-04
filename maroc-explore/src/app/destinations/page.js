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
            tagline: 'The Red City',
            description: 'Experience the magic of the Red City. A sensory explosion of color, sound, and scent in the legendary medina.',
            image: '/images/maroc_explore-img/marrakech/marrakech-tours-trip-archetecte.avif'
        },
        {
            id: 'fes',
            name: 'Fes',
            tagline: 'The Spiritual Heart',
            description: 'Step back in time in the largest living medieval city in the world. Home to the world\'s oldest university.',
            image: '/images/maroc_explore-img/fes/maroc-explore-fes-dar-debagh.avif'
        },
        {
            id: 'tanger',
            name: 'Tanger',
            tagline: 'Gateway Between Continents',
            description: 'Tangier\'s strategic location at the entrance to the Mediterranean has made it one of the most coveted cities in history.',
            image: '/images/maroc_explore-img/tanger/maroc-explore-tanger.avif'
        },
        {
            id: 'rabat',
            name: 'Rabat',
            tagline: 'The Capital of Light',
            description: 'Founded in the 12th century by the Almohad dynasty, Rabat is a UNESCO World Heritage site blending history and modern planning.',
            image: '/images/maroc_explore-img/rabat/maroc-explore-rabat-archetict-maroc-designe.avif'
        },
        {
            id: 'agadir',
            name: 'Agadir',
            tagline: 'The Pearl of the South',
            description: 'Morocco\'s premier beach resort with modern infrastructure, panoramic kasbah views, and year-round sunshine.',
            image: '/images/maroc_explore-img/agadir/agadir-maroc-cocher-du-solie.avif'
        },
        {
            id: 'casablanca',
            name: 'Casablanca',
            tagline: 'The White House',
            description: 'Morocco\'s economic powerhouse, featuring the iconic Hassan II Mosque with the world\'s tallest minaret.',
            image: '/images/maroc_explore-img/casablanca/CASABLANCA-MOSQUE-HASSAN-2-view-from-ather-sied.avif'
        },
        {
            id: 'chefchaouen',
            name: 'Chefchaouen',
            tagline: 'The Blue Pearl',
            description: 'Nestled in the Rif Mountains, this blue-washed city offers a tranquil escape and breathtaking mountain views.',
            image: '/images/maroc_explore-img/chefchaouen/BLUE_city_trips_travel-morocco.avif'
        },
        {
            id: 'essaouira',
            name: 'Essaouira',
            tagline: 'The Wind City',
            description: 'A fortified coastal town with blue-and-white houses, a bustling port, and a laid-back artistic soul.',
            image: '/images/maroc_explore-img/essaouira/maroc-explore-essaouira-view.avif'
        },
        {
            id: 'merzouga',
            name: 'Merzouga',
            tagline: 'Gateway to the Sahara',
            description: 'Adventure deep into the Erg Chebbi dunes. Experience the profound silence and spectacular stars of the Sahara.',
            image: '/images/maroc_explore-img/merzouga/maroc-explore-marzouga-desert-trips.avif'
        },
        {
            id: 'ouarzazate',
            name: 'Ouarzazate',
            tagline: 'The Door of the Desert',
            description: 'Famous for its distinctive kasbah architecture and international film studios on the edge of the desert.',
            image: '/images/maroc_explore-img/Ouarzazate/maroc-explore-ouarzazate.avif'
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
