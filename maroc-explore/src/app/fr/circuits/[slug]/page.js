import Link from 'next/link';
import { toursActivitiesLibFr } from '@/app/lib/toursActivitiesLibFr';
import Header from '@/app/components/Header';
import TourTemplate from '@/app/fr/circuits/components/TourTemplate';
import styles from './TourDetail.module.css';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const tour = toursActivitiesLibFr.find(t => t.slug === slug);

    if (!tour) {
        return {
            title: 'Circuit Introuvable - Maroc Explore',
            description: 'Le circuit demandé est introuvable.'
        };
    }

    const keywords = [
        'maroc explore',
        `${tour.title.toLowerCase()} 2026`,
        `circuits maroc 2026`,
        `explorer ${tour.location}`,
        'voyage authentique maroc',
        'meilleurs voyages maroc',
        `circuit ${tour.category} maroc`
    ].join(', ');

    return {
        title: `${tour.title} 2026 | Maroc Explore - Circuits Authentiques`,
        description: `Rejoignez Maroc Explore pour le ${tour.title} en 2026. Profitez de votre voyage à ${tour.location}. ${tour.description}`,
        keywords: keywords,
        alternates: {
            canonical: `https://marocexplore.com/fr/circuits/${tour.slug}`,
        },
        openGraph: {
            title: `${tour.title} 2026 | Maroc Explore - Circuits Authentiques`,
            description: `Rejoignez Maroc Explore pour le ${tour.title} en 2026. Profitez de votre voyage à ${tour.location}. ${tour.description}`,
            url: `https://marocexplore.com/fr/circuits/${tour.slug}`,
            images: [{ url: `https://marocexplore.com${tour.image}` }],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${tour.title} 2026 | Maroc Explore`,
            description: tour.description,
            images: [`https://marocexplore.com${tour.image}`],
        }
    };
}

export default async function TourDetailPage({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const tour = toursActivitiesLibFr.find(t => t.slug === slug);

    if (!tour) {
        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.notFound}>
                    <h1>Circuit Introuvable</h1>
                    <p>Désolé, le circuit que vous recherchez n'existe pas.</p>
                    <Link href="/fr/recherche" className={styles.backBtn}>Retour aux Circuits</Link>
                </div>
            </div>
        );
    }

    return <TourTemplate tour={tour} />;
}
