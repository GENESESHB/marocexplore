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
            image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800'
        },
        {
            title: 'Traditional Crafts',
            description: 'Morocco is a world center for artisanal excellence. From the intricate zellige tilework of Fes to the cedar wood carving of the Middle Atlas, every craft tells a story of patience, skill, and heritage.',
            image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800'
        },
        {
            title: 'Music & Rhythm',
            description: 'From the spiritual depths of Gnawa music to the energetic Ahwach dances of the High Atlas, music is the heartbeat of Morocco. It is a celebration of community and history.',
            image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800'
        },
        {
            title: 'Culinary Traditions',
            description: 'Experience the complex flavors of Moroccan cuisine. More than just food, it is a ritual of hospitality. Learn about the art of the tagine, the Friday couscous tradition, and the omnipresent mint tea.',
            image: 'https://images.unsplash.com/photo-1553244619-cfd23e3e4ed5?w=800'
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
                        Morocco's culture is a unique blend of Arab, Amazigh, African, and European influences. It is a land where ancient history is living, and hospitality is a sacred duty. We invite you to explore the depth and beauty of our heritage.
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
