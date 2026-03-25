import Link from 'next/link';
import Header from '@/app/components/Header';
import styles from './Destinations.module.css';

export const metadata = {
  keywords: [
    "Maroc Explore",
    "Circuits Maroc Explore",
    "voyage Maroc Explore",
    "circuits authentiques au Maroc",
    "excursions désert Sahara",
    "guide local Maroc Explore",
    "vacances au Maroc",
    "découvrir le Maroc",
    "agence de voyage Maroc"
  ],
  title: 'Destinations Marocaines - Découvrez Marrakech, Fès, le Sahara & Plus | Maroc Explore',
  description: 'Découvrez les diverses régions du Maroc. Des villes impériales de Marrakech et Fès aux dunes dorées du Sahara et à la perle bleue de Chefchaouen.',
};

export default function DestinationsPage() {
  const regions = [
    {
      id: 'marrakech',
      name: 'Marrakech',
      tagline: 'La Ville Rouge',
      description: 'Découvrez la magie de la Ville Rouge. Une explosion sensorielle de couleurs, de sons et de parfums dans la médina légendaire.',
      image: '/images/maroc_explore-img/marrakech/marrakech-tours-trip-archetecte.avif'
    },
    {
      id: 'fes',
      name: 'Fes',
      tagline: 'Le Cœur Spirituel',
      description: 'Remontez le temps dans la plus grande ville médiévale vivante au monde. Abritant la plus ancienne université du monde.',
      image: '/images/maroc_explore-img/fes/maroc-explore-fes-dar-debagh.avif'
    },
    {
      id: 'tanger',
      name: 'Tanger',
      tagline: 'Porte Entre les Continents',
      description: "L'emplacement stratégique de Tanger à l'entrée de la Méditerranée en a fait l'une des villes les plus convoitées de l'histoire.",
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
      description: 'La première station balnéaire du Maroc avec des infrastructures modernes, des vues panoramiques sur la kasbah et un ensoleillement toute l\'année.',
      image: '/images/maroc_explore-img/agadir/agadir-maroc-cocher-du-solie.avif'
    },
    {
      id: 'casablanca',
      name: 'Casablanca',
      tagline: 'La Ville Blanche',
      description: 'La puissance économique du Maroc, abritant l\'emblématique mosquée Hassan II avec le minaret le plus haut du monde.',
      image: '/images/maroc_explore-img/casablanca/CASABLANCA-MOSQUE-HASSAN-2-view-from-ather-sied.avif'
    },
    {
      id: 'chefchaouen',
      name: 'Chefchaouen',
      tagline: 'La Perle Bleue',
      description: 'Nichée dans les montagnes du Rif, cette ville aux teintes bleues offre une escapade tranquille et des vues imprenables sur les montagnes.',
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