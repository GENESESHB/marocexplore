import '@/app/globals.css';
import Footer from '@/app/components/Footer';

export const metadata = {
  metadataBase: new URL('https://marocexplore.com'),
  title: "Maroc Explore - Circuits Authentiques au Maroc & Expéditions dans le Sahara",
  description: "Vivez l\'expérience authentique du Maroc avec nos visites guidées. Explorez le désert du Sahara, les montagnes de l\'Atlas et les villes impériales avec des experts locaux. Réservez votre aventure marocaine dès aujourd\'hui !",
  keywords: ["Circuits Maroc", "Excursion désert Sahara", "Excursions Marrakech", "Guide médina de Fès", "Trekking montagnes de l\'Atlas", "Culture Amazighe", "Voyage au Maroc"],
  icons: {
    icon: '/images/logo-marocexplore-v2.png',
    apple: '/images/logo-marocexplore-v2.png',
  },
  verification: {
    google: '_iemuxt4NWmHLj6bfBovlZn9vLYBkbkwPAExlBYPvuY',
  },
};

export default function FrLayout({ children }) {
  return <>{children}</>;
}