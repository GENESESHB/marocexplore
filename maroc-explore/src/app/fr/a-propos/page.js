import Header from '@/app/components/Header';
import Testimonials from '@/app/components/Testimonials';
import FAQ from '@/app/components/FAQ';
import styles from './About.module.css';

export const metadata = {
    title: 'About Us - Maroc Explore',
    description: 'Learn about Maroc Explorez, our mission to provide Authentique Moroccan Expériences, and our dedicated team of local experts.',
};

export default function AboutPage() {
    const aboutTestimonials = [
        {
            id: 1,
            name: "Eleanor Rigby",
            location: "Sydney, Australia",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            title: 'Des guides experts qui semblaient être de la famille',
            text: "Découvrir l\'histoire de Fès avec Fatima était incroyable. Elle ne nous a pas seulement montré les sites ; elle a partagé sa passion et l\'héritage de sa famille avec nous. C\'était incroyablement authentique.",
            experience: "Fes Cultural Immersion"
        },
        {
            id: 2,
            name: "David Chen",
            location: "Vancouver, Canada",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            title: 'La véritable expérience marocaine',
            text: "Nous voulions un circuit respectueux des communautés locales. L\'engagement de Maroc Explore envers le tourisme durable nous a offert exactement cela.",
            experience: "Atlas Mountains Trek"
        }
    ];

    const aboutFaqs = [
        {
            question: "Depuis combien de temps Maroc Explore existe-t-elle ?",
            answer: "Nous créons des voyages authentiques au Maroc depuis plus de 15 ans."
        },
        {
            question: "Vos guides sont-ils des professionnels certifiés ?",
            answer: "Oui, absolument. Tous nos guides sont certifiés par le Ministère du Tourisme Marocain."
        },
        {
            question: "Qu\'est-ce qui rend vos circuits 'durables' ?",
            answer: "Nous collaborons directement avec des familles, des coopératives et des artisans locaux."
        }
    ];

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>About Maroc Explore</h1>
                    <p>Connecter les voyageurs curieux au cœur authentique du Maroc.</p>
                </div>
            </div>

            <div className={styles.content}>
                <section className={styles.section}>
                    <div className={styles.textContent}>
                        <h2>Notre Histoire</h2>
                        <p>
                            Fondée à Marrakech par un groupe de guides locaux passionnés, Maroc Explore est née d\'un constat simple : la véritable beauté du Maroc se trouve bien au-delà des sentiers touristiques typiques et bondés. Nous voulions partager le Maroc authentique que nous connaissons et aimons — les riads cachés et tranquilles, la majesté silencieuse et grandiose du désert du Sahara, et les traditions vibrantes et accueillantes des communautés amazighes.
                        </p>
                        <p>
                            Au cours des 15 dernières années, nous sommes passés d\'une petite entreprise familiale à une agence de voyage boutique de premier plan, mais notre mission principale reste totalement inchangée : offrir des voyages authentiques, respectueux et profondément immersifs qui profitent à la fois à nos voyageurs et aux communautés locales que nous visitons. Que ce soit pour naviguer dans les souks aromatiques et animés de Fès ou pour siroter un thé à la menthe frais sous un ciel étoilé du Sahara, nous gérons chaque détail avec un soin et une passion méticuleux.
                        </p>
                        <p>
                            Aujourd\'hui, notre équipe se compose de plus de 50 experts locaux, chauffeurs et guides culturels. Nous sommes fiers de nos liens locaux étroits, veillant à ce que chaque itinéraire soit élaboré avec des connaissances approfondies et un engagement inébranlable envers la qualité, la sécurité et le tourisme durable.
                        </p>
                    </div>
                    <div className={styles.imageContent}>
                        <img src="/images/maroc_explore-img/marrakech/marrakech-tours-trips-jamaaelfna.avif" alt="Our Story" />
                    </div>
                </section>

                <section className={`${styles.section} ${styles.reverse}`}>
                    <div className={styles.textContent}>
                        <h2>Notre Mission</h2>
                        <p>
                            Nous croyons que le voyage devrait être plus qu\'une simple visite touristique. Cela devrait être un pont entre les cultures. Notre mission est de promouvoir un tourisme durable qui préserve le patrimoine culturel unique du Maroc tout en offrant des expériences inoubliables.
                        </p>
                        <ul className={styles.missionList}>
                            <li><strong>Authenticité</strong>: Nous privilégions les rencontres authentiques aux expériences touristiques artificielles.</li>
                            <li><strong>Durabilité</strong>: Nous travaillons directement avec les familles locales et les coopératives pour garantir que les revenus du tourisme restent dans la communauté.</li>
                            <li><strong>Expertise Locale</strong>: Tous nos guides sont des locaux certifiés ayant une connaissance approfondie de l\'histoire, de la langue et de la culture.</li>
                        </ul>
                    </div>
                    <div className={styles.imageContent}>
                        <img src="/images/maroc_explore-img/Ouarzazate/maroc-explore-ouarzazate.avif" alt="Our Mission" />
                    </div>
                </section>

                <Testimonials
                    customTestimonials={aboutTestimonials}
                    title="Ce que les voyageurs disent de nous"
                    subtitle="Notre Réputation"
                />
                <FAQ
                    customFaqs={aboutFaqs}
                    title="About Maroc Explore"
                    subtitle="En savoir plus sur notre agence et nos valeurs."
                />
            </div>
        </div>
    );
}
