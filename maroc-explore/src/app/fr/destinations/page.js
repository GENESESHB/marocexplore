import Link from 'next/link';
import Header from '@/app/components/Header';
import styles from './Destinations.module.css';

export const metadata = {
    title: 'Destinations Marocaines - Découvrez Marrakech, Fès, le Sahara & Plus | Maroc Explore',
    description: 'Découvrez les diverses régions du Maroc. Des villes impériales de Marrakech et Fès aux dunes dorées du Sahara et à la perle bleue de Chefchaouen.',
};

export default function DestinationsPage() {
    const regions = [
        {
            id: 'marrakech',
            name: 'Marrakech',
            tagline: 'La Ville Rouge',
            description: 'Expérience the magic of the Red City. A sensory explosion of color, sound, and scent in the legendary medina.',
            image: '/images/maroc_explore-img/marrakech/marrakech-tours-trip-archetecte.avif'
        },
        {
            id: 'fes',
            name: 'Fes',
            tagline: 'Le Cœur Spirituel',
            description: 'Step back in time in the largest living medieval city in the world. Home to the world\'s oldest university.',
            image: '/images/maroc_explore-img/fes/maroc-explore-fes-dar-debagh.avif'
        },
        {
            id: 'tanger',
            name: 'Tanger',
            tagline: 'Porte Entre les Continents',
            description: 'Tangier\'s strategic location at the entrance to the Mediterranean has made it one of the most coveted cities in history.',
            image: '/images/maroc_explore-img/tanger/maroc-explore-tanger.avif'
        },
        {
            id: 'rabat',
            name: 'Rabat',
            tagline: 'La Capitale des Lumières',
            description: 'Fondée au 12ème siècle par la dynastie des Almohades, Rabat est un site du patrimoine mondial de l\'UNESCO mêlant histoire et urbanisme moderne.',
            image: '/images/maroc_explore-img/rabat/maroc-explore-rabat-archetict-maroc-designe.avif'
        },
        {
            id: 'agadir',
            name: 'Agadir',
            tagline: 'La Perle du Sud',
            description: 'Maroc\'s premier beach resort with modern infrastructure, panoramic kasbah views, and year-round sunshine.',
            image: '/images/maroc_explore-img/agadir/agadir-maroc-cocher-du-solie.avif'
        },
        {
            id: 'casablanca',
            name: 'Casablanca',
            tagline: 'La Ville Blanche',
            description: 'Maroc\'s economic powerhouse, featuring the iconic Hassan II Mosque with the world\'s tallest minaret.',
            image: '/images/maroc_explore-img/casablanca/CASABLANCA-MOSQUE-HASSAN-2-view-from-ather-sied.avif'
        },
        {
            id: 'chefchaouen',
            name: 'Chefchaouen',
            tagline: 'La Perle Bleue',
            description: 'Nestled in the Rif Montagnes, this blue-washed city offers a tranquil escape and breathtaking mountain views.',
            image: '/images/maroc_explore-img/chefchaouen/BLUE_city_trips_travel-morocco.avif'
        },
        {
            id: 'essaouira',
            name: 'Essaouira',
            tagline: 'La Cité des Alizés',
            description: 'Une ville côtière fortifiée avec des maisons bleues et blanches, un port animé et une âme artistique décontractée.',
            image: '/images/maroc_explore-img/essaouira/maroc-explore-essaouira-view.avif'
        },
        {
            id: 'merzouga',
            name: 'Merzouga',
            tagline: 'La Porte du Sahara',
            description: 'Aventurez-vous au cœur des dunes de l\'Erg Chebbi. Vivez le silence profond et le ciel étoilé spectaculaire du Sahara.',
            image: '/images/maroc_explore-img/merzouga/maroc-explore-marzouga-desert-trips.avif'
        },
        {
            id: 'ouarzazate',
            name: 'Ouarzazate',
            tagline: 'La Porte du Désert',
            description: 'Célèbre pour son architecture distinctive de kasbah et ses studios de cinéma internationaux à la lisière du désert.',
            image: '/images/maroc_explore-img/Ouarzazate/maroc-explore-ouarzazate.avif'
        }
    ];

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Nos Destinations</h1>
                    <p>De la côte atlantique aux sables du Sahara, découvrez la diversité du Maroc.</p>
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
                                    <span className={styles.cta}>Voir les Circuits →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
