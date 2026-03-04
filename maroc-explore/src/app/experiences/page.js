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
            image: '/images/maroc_explore-img/merzouga/maroc-explore-marzouga-desert-trips.avif',
            activity: 'adventure'
        },
        {
            id: 'mountain',
            title: 'Atlas Mountain Treks',
            description: 'Breathtaking landscapes, terraced valleys, and traditional Berber villages in North Africa\'s highest peaks.',
            image: '/images/maroc_explore-img/chefchaouen/BLUE_city_trips_travel-morocco.avif',
            activity: 'adventure'
        },
        {
            id: 'coastal',
            title: 'Atlantic Coastal Escapes',
            description: 'Relax in the wind-swept town of Essaouira or catch waves in Agadir. Fresh seafood and ocean breezes.',
            image: '/images/maroc_explore-img/essaouira/maroc-explore-essaouira-view.avif',
            activity: 'relaxation'
        },
        {
            id: 'city',
            title: 'Imperial City Journeys',
            description: 'Navigate the labyrinthine medinas of Marrakech, Fes, and Rabat. History, architecture, and vibrant souks.',
            image: '/images/maroc_explore-img/marrakech/marrakech-tours.avif',
            activity: 'cultural'
        },
        {
            id: 'luxury',
            title: 'Ultra-Luxury Retreats',
            description: 'The finest riads, private villas, and exclusive experiences tailored to your every desire.',
            image: '/images/maroc_explore-img/casablanca/CASABLANCA-MOSQUE-HASSAN-2-view-from-ather-sied.avif',
            activity: 'luxury'
        },
        {
            id: 'authentic',
            title: 'Authentic Local Life',
            description: 'Go beyond the surface. Join a family for tea, learn traditional crafts like Henna (tatoige), or be a guest at a Moroccan celebration like a marriage or Sbou.',
            image: '/images/maroc_explore-img/fes/maroc-explore-fes-dar-debagh.avif',
            activity: 'cultural'
        },
        {
            id: 'photography',
            title: 'Photography Tours',
            description: 'Capture the vivid colors of Chefchaouen, the bustling souks of Marrakech, and the golden hour over golden dunes.',
            image: '/images/maroc_explore-img/chefchaouen/chefchaouen-culter-blue-city-tours.avif',
            activity: 'photography'
        },
        {
            id: 'wildlife',
            title: 'Wildlife & Nature',
            description: 'Discover the unique fauna of Morocco, from the famous tree-climbing goats of the Souss Valley to Barbary macaques.',
            image: '/images/maroc_explore-img/agadir/berber-goat-view-beber-culter.avif',
            activity: 'wildlife'
        },
        {
            id: 'camping',
            title: 'Desert Camping under the Stars',
            description: 'Spend an unforgettable night at a traditional or luxury desert camp in the heart of the Sahara.',
            image: '/images/maroc_explore-img/merzouga/maroc-explore-camp-desert-morocco-adventure.avif',
            activity: 'camping'
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
                                    <Link href={`/filter?activity=${exp.activity}`} className={styles.cta}>
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
