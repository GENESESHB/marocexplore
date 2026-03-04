import './styles/globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'Maroc Explore - Authentic Moroccan Tours & Sahara Desert Expeditions',
  description: 'Experience authentic Morocco with our guided tours. Explore the Sahara Desert, Atlas Mountains, and Imperial Cities with local experts. Book your Moroccan adventure today!',
  keywords: ['Morocco tours', 'Sahara desert tour', 'Marrakech excursions', 'Fes medina guide', 'Atlas Mountains trekking', 'Amazigh culture', 'Morocco travel'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}