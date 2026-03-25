import Link from 'next/link';
import Header from '@/app/components/Header';
import styles from './Experiences.module.css';

export const metadata = {
  keywords: [
    "Maroc Explore", 
    "Maroc Explore circuits", 
    "voyage Maroc Explore", 
    "circuits authentiques au Maroc", 
    "excursions désert Sahara", 
    "guide local Maroc Explore", 
    "vacances au Maroc", 
    "découvrir le Maroc",
    "agence de voyage Maroc"
  ],
    title: 'Moroccan Travel Expériences - Maroc Explore',
    description: 'Explorez our curated Moroccan travel Expériences. From desert expeditions and mountain treks to coastal escapes and luxury retreats.',
};

export default function ExperiencesPage() {
    const experiences = [
        {
            id: 'desert',
            title: 'Expéditions Désert du Sahara',
            description: 'Découvrez le silence et la majesté des dunes de sable. Balades à dos de chameau, camps de luxe et rencontres nomades.',
            image: '/images/maroc_explore-img/merzouga/maroc-explore-marzouga-desert-trips.avif',
            activity: 'adventure'
        },
        {
            id: 'mountain',
            title: 'Treks dans les Montagnes de l\'Atlas',
            description: 'Breathtaking landscapes, terraced valleys, and traditional Berber villages in North Africa\'s highest peaks.',
            image: '/images/maroc_explore-img/chefchaouen/BLUE_city_trips_travel-morocco.avif',
            activity: 'adventure'
        },
        {
            id: 'coastal',
            title: 'Évasions Côtières de l\'Atlantique',
            description: 'Détendez-vous dans la ville balayée par les vents d\'Essaouira ou surfez sur les vagues d\'Agadir.  Fruits de mer frais et brises océaniques.',
            image: '/images/maroc_explore-img/essaouira/maroc-explore-essaouira-view.avif',
            activity: 'relaxation'
        },
        {
            id: 'city',
            title: 'Voyages dans les Villes Impériales',
            description: 'Naviguez dans les médinas labyrinthiques de Marrakech, Fès et Rabat. Histoire, architecture et souks animés.',
            image: '/images/maroc_explore-img/marrakech/marrakech-tours.avif',
            activity: 'cultural'
        },
        {
            id: 'luxury',
            title: 'Retraites Ultra-Luxe',
            description: 'Les meilleurs riads, villas privées et expériences exclusives adaptées à tous vos désirs.',
            image: '/images/maroc_explore-img/casablanca/CASABLANCA-MOSQUE-HASSAN-2-view-from-ather-sied.avif',
            activity: 'luxury'
        },
        {
            id: 'authentic',
            title: 'Vie Locale Authentique',
            description: 'Allez au-delà des apparences.  Rejoignez une famille pour le thé, apprenez des métiers traditionnels comme le Henné, ou soyez l\'invité d\'une célébration marocaine comme un mariage.',
            image: '/images/maroc_explore-img/fes/maroc-explore-fes-dar-debagh.avif',
            activity: 'cultural'
        },
        {
            id: 'photography',
            title: 'Circuits Photographiques',
            description: 'Capturez les couleurs vives de Chefchaouen, les souks animés de Marrakech et l\'heure dorée sur les dunes dorées.',
            image: '/images/maroc_explore-img/chefchaouen/chefchaouen-culter-blue-city-tours.avif',
            activity: 'photography'
        },
        {
            id: 'wildlife',
            title: 'Faune & Nature',
            description: 'Découvrez la faune unique du Maroc, des célèbres chèvres grimpant aux arbres de la vallée du Souss aux macaques de Barbarie.',
            image: '/images/maroc_explore-img/agadir/berber-goat-view-beber-culter.avif',
            activity: 'wildlife'
        },
        {
            id: 'camping',
            title: 'Camping dans le Désert sous les Étoiles',
            description: 'Passez une nuit inoubliable dans un camp traditionnel ou de luxe en plein cœur du Sahara.',
            image: '/images/maroc_explore-img/merzouga/maroc-explore-camp-desert-morocco-adventure.avif',
            activity: 'camping'
        }
    ];

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Nos Expériences</h1>
                    <p>Des voyages soigneusement conçus pour inspirer, défier et ravir.</p>
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
                                    <Link href={`/fr/recherche?activity=${exp.activity}`} className={styles.cta}>
                                        Voir les Circuits
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
