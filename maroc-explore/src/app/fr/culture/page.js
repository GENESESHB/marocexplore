import Header from '@/app/components/Header';
import styles from './Culture.module.css';

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
    title: 'Moroccan & Amazigh Culture - Maroc Explore',
    description: 'Immerse yourself in the rich tapestry of Moroccan culture. Learn about Amazigh heritage, traditional crafts, music, and culinary traditions.',
};

export default function CulturePage() {
    const culturalItems = [
        {
            title: 'Héritage Amazigh',
            description: 'Peuple autochtone d\'Afrique du Nord, les Amazighs (Berbères) ont une histoire qui remonte à des millénaires. Leur langue, le tamazight, et leurs expressions artistiques uniques dans la bijouterie et le tissage sont fondamentales pour l\'identité marocaine.',
            image: '/images/maroc_explore-img/amazigh/maroc-explore-tamazight-travel-berber.avif'
        },
        {
            title: 'Artisanat Traditionnel',
            description: 'Le Maroc est un centre mondial d\'excellence artisanale.  Du travail complexe des zelliges de Fès à la sculpture sur bois de cèdre du Moyen Atlas, chaque métier raconte une histoire de patience, de compétence et d\'héritage.',
            image: '/images/maroc_explore-img/fes/maroc-explore-fes-ceramique-plaque.avif'
        },
        {
            title: 'Musique et Rythme',
            description: 'Des profondeurs spirituelles de la musique Gnawa aux danses énergiques Ahwach du Haut Atlas, la musique est le battement de cœur du Maroc. C\'est une célébration de la communauté et de l\'histoire.',
            image: '/images/maroc_explore-img/essaouira/maroc-explore-essaouira-view.avif'
        },
        {
            title: 'Traditions Culinaires',
            description: 'Découvrez les saveurs complexes de la cuisine marocaine.  Plus qu\'une simple nourriture, c\'est un rituel d\'hospitalité.  Découvrez l\'art de préparer le tajine, la tradition du couscous du vendredi et le thé à la menthe omniprésent.',
            image: '/images/maroc_explore-img/marrakech/marrakech-colors-culter.avif'
        },
        {
            title: 'Festivals et Célébrations',
            description: 'Participez à des festivals locaux animés comme le Festival de musique amazighe Timitar à Agadir, le Festival Gnawa à Essaouira, ou à des cérémonies de mariage traditionnelles qui rassemblent des communautés entières.',
            image: '/images/maroc_explore-img/agadir/agadir-maroc-cocher-du-solie.avif'
        },
        {
            title: 'Architecture Historique',
            description: 'Promenez-vous dans les anciennes médinas, admirez les motifs complexes des Kasbahs construites en terre et découvrez les élégantes cours intérieures des Riads détenant des siècles de maîtrise architecturale.',
            image: '/images/maroc_explore-img/rabat/maroc-explore-rabat-archetict-maroc-designe.avif'
        },
        {
            title: 'Vie Spirituelle',
            description: 'Découvrez l\'énergie sereine des vieilles mosquées, l\'héritage de l\'érudition islamique dans des endroits comme Al-Qarawiyyin, et les traditions syncrétiques des fraternités soufies qui influencent la vie quotidienne marocaine.',
            image: '/images/maroc_explore-img/casablanca/CASABLANCA-MOSQUE-HASSAN-2-view-from-ather-sied.avif'
        },
        {
            title: 'Hospitalité et Culture du Thé',
            description: 'L\'hospitalité marocaine est légendaire. La clé de celle-ci est le service du thé à la menthe marocain sucré, qui symbolise le respect et l\'amitié envers les invités et les étrangers.',
            image: '/images/maroc_explore-img/tanger/maroc-explore-tanger.avif'
        }
    ];

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Culture Marocaine</h1>
                    <p>Une mosaïque vibrante d\'histoire, d\'art et de traditions profondément enracinées.</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.intro}>
                    <h2>Le Cœur du Maroc</h2>
                    <p>
                        Morocco&apos;s culture is a unique blend of Arab, Amazigh, African, and European influences. It is a land where ancient history is living, and hospitality is a sacred duty. We invite you to explore the depth and beauty of our heritage.
                    </p>
                </div>

                <div className={styles.cultureGrid}>
                    {culturalItems.map((item, index) => (
                        <div key={index} className={styles.cultureCard}>
                            <div className={styles.cardImage}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.callout}>
                    <h2>Faites-en l\'expérience par vous-même</h2>
                    <p>Nos circuits sont conçus pour aller au-delà des apparences, offrant une véritable immersion culturelle et des liens significatifs.</p>
                    <a href="/filter?activity=cultural" className={styles.cta}>Explorer les Circuits Culturels</a>
                </div>
            </div>
        </div>
    );
}
