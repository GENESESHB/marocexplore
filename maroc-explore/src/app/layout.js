import './styles/globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'Maroc Explore - Authentic Moroccan Tours & Sahara Desert Expeditions',
  description: 'Experience authentic Morocco with our guided tours. Explore the Sahara Desert, Atlas Mountains, and Imperial Cities with local experts. Book your Moroccan adventure today!',
  keywords: ['Morocco tours', 'Sahara desert tour', 'Marrakech excursions', 'Fes medina guide', 'Atlas Mountains trekking', 'Amazigh culture', 'Morocco travel'],
  icons: {
    icon: '/images/logo-marocexplore-v2.png',
    apple: '/images/logo-marocexplore-v2.png',
  },
  verification: {
    google: '_iemuxt4NWmHLj6bfBovlZn9vLYBkbkwPAExlBYPvuY',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        {children}
        <Footer />
      </body>
    </html>
  );
}