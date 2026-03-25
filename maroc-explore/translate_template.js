const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'fr', 'circuits', 'components', 'TourTemplate.js');
if (!fs.existsSync(filePath)) process.exit(0);

let content = fs.readFileSync(filePath, 'utf8');

const replacements = {
    'Home': 'Accueil',
    'Tours': 'Circuits',
    'reviews': 'avis',
    'Availability': 'Disponibilité',
    'Locations': 'Lieux',
    'Pick-up:': 'Prise en charge :',
    'Drop-off:': 'Retour :',
    'What to Expect': "À quoi s'attendre",
    '`Day ${item.day}`': '`Jour ${item.day}`',
    'Expertly Crafted Experience': 'Expérience conçue par des experts',
    'Every segment of the': 'Chaque segment du',
    'has been meticulously planned by our local Moroccan experts. We strike the perfect balance of thrilling discovery, cultural immersion, and relaxing free time. Let us handle the complex logistics, driving, and timings so you can simply focus on making unforgettable memories in': "a été méticuleusement planifié par nos experts locaux marocains. Nous trouvons l'équilibre parfait entre découverte passionnante, immersion culturelle et temps libre relaxant. Laissez-nous gérer la logistique complexe, la conduite et les horaires pour que vous puissiez simplement vous concentrer sur la création de souvenirs inoubliables à",
    "What's Included": 'Ce qui est inclus',
    'The Ultimate Maroc Explore Travel Guide': 'Le Guide de Voyage Ultime de Maroc Explore',
    'If you are looking for an unforgettable adventure in North Africa, the': "Si vous cherchez une aventure inoubliable en Afrique du Nord, le",
    'by': 'par',
    'offers a magical experience that goes beyond the ordinary. In 2026, traveling to Morocco is easier and more rewarding than ever, and immersing yourself in a': "offre une expérience magique qui va au-delà de l'ordinaire. En 2026, voyager au Maroc est plus facile et plus gratifiant que jamais, et vous plonger dans un voyage",
    'journey like this one will leave you with memories that last a lifetime.': "comme celui-ci vous laissera des souvenirs pour la vie.",
    'Maroc Explore Pro-Tip': 'Conseil de Pro Maroc Explore',
    "When visiting": "Lors de votre visite à",
    ", always carry a light scarf. It's perfect for sudden desert breezes or visiting sacred sites with respect. Our local guides ensure you're always prepared for the unique climate of": ", ayez toujours un foulard léger. C'est parfait pour les brises soudaines du désert ou pour visiter les sites sacrés avec respect. Nos guides locaux s'assurent que vous êtes toujours préparé au climat unique de",
    'Sustainable Travel': 'Voyage Durable',
    'By choosing Maroc Explore, you support local cooperatives in': 'En choisissant Maroc Explore, vous soutenez les coopératives locales à',
    '. We prioritize eco-friendly transport and authentic stays that protect the delicate Moroccan ecosystem for future generations.': ". Nous privilégions les transports écologiques et les séjours authentiques qui protègent le délicat écosystème marocain pour les générations futures.",
    "Morocco's rich history is woven into the very fabric of its bustling medinas, majestic kasbahs, and serene sweeping landscapes. Choosing the": "La riche histoire du Maroc est tissée dans le tissu même de ses médinas animées, de ses majestueuses kasbahs et de ses vastes paysages sereins. Choisir le",
    'allows you to trace the footsteps of ancient trading caravans that once crossed these very lands. Throughout': "vous permet de suivre les traces des anciennes caravanes commerciales qui ont autrefois traversé ces mêmes terres. Partout à",
    ', you will find architectural marvels decorated with intricate zellige tilework and vibrant souks fragrant with spices.': ", vous trouverez des merveilles architecturales décorées de zelliges complexes et des souks animés parfumés d'épices.",
    'Authentic': 'Authentique',
    'Moments': 'Moments',
    'What makes Maroc Explore different?': 'Qu\'est-ce qui différencie Maroc Explore ?',
    'According to the official': 'Selon',
    'Moroccan National Tourist Office': "l'Office National Marocain du Tourisme",
    ', tourism in this region emphasizes authentic encounters. This ethos is heavily embedded into the': ", le tourisme dans cette région met l'accent sur les rencontres authentiques. Cette philosophie est fortement intégrée dans le",
    '. Whether you are navigating intricate medinas or crossing golden dunes, every moment is crafted for authenticity.': ". Que vous naviguiez dans des médinas complexes ou que vous traversiez des dunes dorées, chaque instant est pensé pour l'authenticité.",
    'Join the Maroc Explore Community': 'Rejoignez la Communauté Maroc Explore',
    'Discover the soul of Morocco with our local experts.': "Découvrez l'âme du Maroc avec nos experts locaux.",
    'Browse All 2026 Tours': 'Parcourir Tous les Circuits 2026',
    'Need help booking?': "Besoin d'aide pour réserver ?",
    'Call us or WhatsApp': 'Appelez-nous ou WhatsApp',
    'Guest Reviews': 'Avis des Clients',
    'Based on': 'Basé sur',
    'Very Good': 'Très Bien',
    'Reviewed recently': 'Avis récent',
    'Additional Information': 'Informations Supplémentaires',
    'Confirmation will be received at time of booking.': 'La confirmation sera reçue au moment de la réservation.',
    'Not recommended for travelers with back problems or heart conditions (for desert/mountain tours).': 'Déconseillé aux voyageurs souffrant de problèmes de dos ou de problèmes cardiaques.',
    'Departure Time:': 'Heure de Départ :',
    'Return Details:': 'Détails de Retour :',
    'See booking details': 'Voir les détails de réservation',
    'Returns to original departure point': 'Retour au point de départ original',
    'This is a private tour/activity. Only your group will participate.': 'Ceci est une visite/activité privée. Seul votre groupe participera.',
    'Common Questions': 'Questions Fréquentes',
    'Everything you need to know about the': 'Tout ce que vous devez savoir sur le',
    'Join 50,000+ happy travelers who discovered authentic Morocco with us': 'Rejoignez plus de 50 000 voyageurs heureux qui ont découvert le Maroc authentique avec nous',
    'Start Your Journey': 'Commencez Votre Voyage'
};

for (const [en, fr] of Object.entries(replacements)) {
    content = content.replace(new RegExp(en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), fr);
}

fs.writeFileSync(filePath, content);
console.log('Finished translating TourTemplate.js strings');
