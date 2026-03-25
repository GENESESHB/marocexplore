const fs = require('fs');
const path = require('path');

const frDir = path.join(__dirname, 'src', 'app', 'fr');

const aboutTranslations = {
    'Connecting curious travelers with the authentic heart of Morocco.': 'Connecter les voyageurs curieux au cœur authentique du Maroc.',
    'Our Story': 'Notre Histoire',
    'Founded in Marrakech by a group of passionate local guides, Maroc Explore was born from a simple realization: the true beauty of Morocco lies far beyond the typical, crowded tourist trails. We wanted to share the authentic Morocco we know and love—the hidden, tranquil riads, the silent, awe-inspiring majesty of the Sahara desert, and the vibrant, welcoming traditions of the Amazigh communities.': "Fondée à Marrakech par un groupe de guides locaux passionnés, Maroc Explore est née d\\'un constat simple : la véritable beauté du Maroc se trouve bien au-delà des sentiers touristiques typiques et bondés. Nous voulions partager le Maroc authentique que nous connaissons et aimons — les riads cachés et tranquilles, la majesté silencieuse et grandiose du désert du Sahara, et les traditions vibrantes et accueillantes des communautés amazighes.",
    "Over the last 15 years, we've grown from a small family operation into a leading boutique travel agency, but our core mission remains completely unchanged: to provide authentic, respectful, and deeply immersive journeys that benefit both our travelers and the local communities we visit. From navigating the bustling, aromatic souks of Fes to sipping fresh mint tea under a canopy of Saharan stars, we handle every detail with meticulous care and passion.": "Au cours des 15 dernières années, nous sommes passés d\\'une petite entreprise familiale à une agence de voyage boutique de premier plan, mais notre mission principale reste totalement inchangée : offrir des voyages authentiques, respectueux et profondément immersifs qui profitent à la fois à nos voyageurs et aux communautés locales que nous visitons. Que ce soit pour naviguer dans les souks aromatiques et animés de Fès ou pour siroter un thé à la menthe frais sous un ciel étoilé du Sahara, nous gérons chaque détail avec un soin et une passion méticuleux.",
    "Today, our team consists of over 50 local experts, drivers, and cultural guides. We pride ourselves on our deep local connections, ensuring that every itinerary is crafted with insider knowledge and an unwavering commitment to quality, safety, and sustainable tourism.": "Aujourd\\'hui, notre équipe se compose de plus de 50 experts locaux, chauffeurs et guides culturels. Nous sommes fiers de nos liens locaux étroits, veillant à ce que chaque itinéraire soit élaboré avec des connaissances approfondies et un engagement inébranlable envers la qualité, la sécurité et le tourisme durable.",
    'Our Mission': 'Notre Mission',
    "We believe that travel should be more than just sightseeing. It should be a bridge between cultures. Our mission is to promote sustainable tourism that preserves Morocco's unique cultural heritage while providing life-changing experiences for our guests.": "Nous croyons que le voyage devrait être plus qu\\'une simple visite touristique. Cela devrait être un pont entre les cultures. Notre mission est de promouvoir un tourisme durable qui préserve le patrimoine culturel unique du Maroc tout en offrant des expériences inoubliables.",
    'Authenticity': 'Authenticité',
    'We prioritize genuine encounters over manufactured tourist experiences.': 'Nous privilégions les rencontres authentiques aux expériences touristiques artificielles.',
    'Sustainability': 'Durabilité',
    'We work directly with local families and cooperatives to ensure tourism revenue stays in the community.': 'Nous travaillons directement avec les familles locales et les coopératives pour garantir que les revenus du tourisme restent dans la communauté.',
    'Local Expertise': 'Expertise Locale',
    'All our guides are certified locals with deep knowledge of history, language, and culture.': "Tous nos guides sont des locaux certifiés ayant une connaissance approfondie de l\\'histoire, de la langue et de la culture.",
    'What Travelers Say About Us': 'Ce que les voyageurs disent de nous',
    'Our Reputation': 'Notre Réputation',
    'Learn more about our agency and values.': 'En savoir plus sur notre agence et nos valeurs.',
    'Expert guides that felt like family': 'Des guides experts qui semblaient être de la famille',
    "Learning about the history of Fes from Fatima was incredible. She didn't just show us the sites; she shared her passion and her family's heritage with us. It felt incredibly authentic.": "Découvrir l\\'histoire de Fès avec Fatima était incroyable. Elle ne nous a pas seulement montré les sites ; elle a partagé sa passion et l\\'héritage de sa famille avec nous. C\\'était incroyablement authentique.",
    'The real Moroccan experience': 'La véritable expérience marocaine',
    "We wanted a tour that respected the local communities. Maroc Explore's dedication to sustainable tourism and deep Atlas Mountain connections gave us exactly that.": "Nous voulions un circuit respectueux des communautés locales. L\\'engagement de Maroc Explore envers le tourisme durable nous a offert exactement cela.",
    'How long has Maroc Explore been operating?': 'Depuis combien de temps Maroc Explore existe-t-elle ?',
    'We have been crafting authentic Moroccan journeys for over 15 years, starting as a small family operation and growing into a leading boutique agency.': 'Nous créons des voyages authentiques au Maroc depuis plus de 15 ans.',
    'Are your guides certified professionals?': 'Vos guides sont-ils des professionnels certifiés ?',
    'Yes, absolutely. All our guides are licensed by the Moroccan Ministry of Tourism and possess deep historical and cultural knowledge of the regions they cover.': 'Oui, absolument. Tous nos guides sont certifiés par le Ministère du Tourisme Marocain.',
    "What makes your tours 'sustainable'?": "Qu\\'est-ce qui rend vos circuits 'durables' ?",
    'We partner directly with local Amazigh families, cooperatives, and small-scale artisans, ensuring that the revenue from our tours directly benefits the local economy and preserves traditional ways of life.': 'Nous collaborons directement avec des familles, des coopératives et des artisans locaux.'
};

const contactTranslations = {
    'Get in Touch': 'Contactez-nous',
    'Ready for an adventure? Our local experts are standing by to help you craft the perfect Moroccan journey.': "Prêt pour l\\'aventure ? Nos experts locaux sont à votre disposition pour vous aider.",
    "Let's Start Planning": 'Commençons à Planifier',
    'Reach out to us through any of these channels. Whether you want a complete 14-day grand tour or a quick weekend desert escape, our team is available 24/7 to assist you.': "Contactez-nous via l\\'un de ces canaux. Notre équipe est disponible 24/7 pour vous assister.",
    'Phone / WhatsApp': 'Téléphone / WhatsApp',
    'Office': 'Bureau',
    'Working Hours': "Heures d\\'Ouverture",
    'Mon - Sun: 24/7 Support': 'Lun - Dim : Support 24/7',
    'Full Name': 'Nom Complet',
    'Subject': 'Sujet',
    'Tour Inquiry': 'Demande de Circuit',
    'Booking Support': 'Support de Réservation',
    'Other': 'Autre',
    'How can we help you plan your ideal Moroccan adventure?': 'Comment pouvons-nous vous aider à planifier votre aventure marocaine ?',
    'Service Excellence': 'Excellence du Service',
    'Booking with Us': 'Réserver avec Nous',
    'Booking & Support FAQ': 'FAQ de Réservation & Support',
    'Common questions about planning your trip.': 'Questions courantes sur la planification de votre voyage.',
    'Seamless booking process': 'Processus de réservation fluide',
    "From my very first email, the team was incredibly responsive. They customized our 10-day itinerary perfectly to fit our schedule and interests. The communication was flawless.": "Dès mon tout premier e-mail, l\\'équipe a été incroyablement réactive.",
    'Exceptional customer support 24/7': 'Support client exceptionnel 24/7',
    "We had a last-minute change in our flight schedule, and the Maroc Explore team handled the riad and transfer adjustments within minutes. Truly reliable support.": "Nous avons eu un changement de dernière minute et l\\'équipe a géré les ajustements des transferts en quelques minutes.",
    'How quickly will I get a response to my inquiry?': 'Dans quel délai recevrai-je une réponse à ma demande ?',
    'We aim to respond to all inquiries within 12-24 hours. Our local travel experts will review your request and provide a detailed, personalized initial itinerary.': 'Nous nous efforçons de répondre à toutes les demandes dans un délai de 12 à 24 heures.',
    'Is my booking payment secure?': 'Le paiement de ma réservation est-il sécurisé ?',
    'Yes. Once you approve your custom itinerary, we require a 30% deposit via a secure credit card link, PayPal, or bank transfer. The balance is settled upon arrival.': 'Oui. Une fois votre itinéraire approuvé, nous demandons un acompte de 30% via un lien sécurisé.',
    'Can I customize the tours listed on the website?': 'Puis-je personnaliser les circuits répertoriés sur le site ?',
    'Absolutely! Every single detail of your journey can be tailored. From accommodation level to specific cultural activities and routes, we build it your way.': 'Absolument ! Chaque détail de votre voyage peut être personnalisé.'
};

function processTranslations(filePath, translationsMap) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    for (const [en, fr] of Object.entries(translationsMap)) {
        content = content.replace(en, fr);
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log("Translated " + filePath);
    }
}

processTranslations(path.join(frDir, 'a-propos', 'page.js'), aboutTranslations);
processTranslations(path.join(frDir, 'contact', 'page.js'), contactTranslations);

console.log('Finished deep header page translations');
