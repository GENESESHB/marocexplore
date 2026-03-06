import Header from '../components/Header';
import styles from './Culture.module.css';

export const metadata = {
    title: 'Moroccan & Amazigh Culture - Maroc Explore',
    description: 'Immerse yourself in the rich tapestry of Moroccan culture. Learn about Amazigh heritage, traditional crafts, music, and culinary traditions.',
};

export default function CulturePage() {
    const culturalItems = [
        {
            title: 'Amazigh Heritage',
            description: 'The indigenous people of North Africa, the Amazigh (Berber) people have a history stretching back millennia. Their language, Tamazight, and their unique artistic expressions in jewelry and weaving are foundational to Moroccan identity.',
            image: '/images/maroc_explore-img/amazigh/maroc-explore-tamazight-travel-berber.avif'
        },
        {
            title: 'Traditional Crafts',
            description: 'Morocco is a world center for artisanal excellence. From the intricate zellige tilework of Fes to the cedar wood carving of the Middle Atlas, every craft tells a story of patience, skill, and heritage.',
            image: '/images/maroc_explore-img/fes/maroc-explore-fes-ceramique-plaque.avif'
        },
        {
            title: 'Music & Rhythm',
            description: 'From the spiritual depths of Gnawa music to the energetic Ahwach dances of the High Atlas, music is the heartbeat of Morocco. It is a celebration of community and history.',
            image: '/images/maroc_explore-img/essaouira/maroc-explore-essaouira-view.avif'
        },
        {
            title: 'Culinary Traditions',
            description: 'Experience the complex flavors of Moroccan cuisine. More than just food, it is a ritual of hospitality. Learn about the art of the tagine, the Friday couscous tradition, and the omnipresent mint tea.',
            image: '/images/maroc_explore-img/marrakech/marrakech-colors-culter.avif'
        },
        {
            title: 'Festivals & Celebrations',
            description: 'Participate in vibrant local festivals like the Timitar Amazigh Music Festival in Agadir, the Gnawa Festival in Essaouira, or traditional marriage ceremonies that bring entire communities together.',
            image: '/images/maroc_explore-img/agadir/agadir-maroc-cocher-du-solie.avif'
        },
        {
            title: 'Historical Architecture',
            description: 'Wander through ancient medinas, admire the intricate designs of Kasbahs built from earth, and discover the elegant courtyards of Riads holding centuries of architectural mastery.',
            image: '/images/maroc_explore-img/rabat/maroc-explore-rabat-archetict-maroc-designe.avif'
        },
        {
            title: 'Spiritual Life',
            description: 'Explore the serene energy of old mosques, the legacy of Islamic scholarship in places like Al-Qarawiyyin, and the syncretic traditions of Sufi fraternities that influence daily Moroccan life.',
            image: '/images/maroc_explore-img/casablanca/CASABLANCA-MOSQUE-HASSAN-2-view-from-ather-sied.avif'
        },
        {
            title: 'Hospitality & Tea Culture',
            description: 'Moroccan hospitality is legendary. Central to this is the serving of sweet Moroccan mint tea, symbolizing respect and friendship to guests and strangers alike.',
            image: '/images/maroc_explore-img/tanger/maroc-explore-tanger.avif'
        }
    ];

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Moroccan Culture</h1>
                    <p>A vibrant mosaic of history, art, and deep-rooted traditions.</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.intro}>
                    <h2>The Heart of Morocco</h2>
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
                    <h2>Experience it for yourself</h2>
                    <p>Our tours are designed to go beyond the surface, offering genuine cultural immersion and meaningful connections.</p>
                    <a href="/filter?activity=cultural" className={styles.cta}>Explore Cultural Tours</a>
                </div>
            </div>
        </div>
    );
}
