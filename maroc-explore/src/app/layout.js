import './styles/globals.css';

export const metadata = {
  title: 'Maroc Explore - Authentic Moroccan Tours',
  description: 'Discover authentic Morocco through guided tours, desert camps, and cultural experiences',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}