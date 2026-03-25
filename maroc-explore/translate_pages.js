const fs = require('fs');
const path = require('path');

const frDir = path.join(__dirname, 'src', 'app', 'fr');

const dictionary = {
    // English -> French mapping for strict replacements
    // Destinations Page
    'Our Destinations': 'Nos Destinations',
    'From the Atlantic coast to the Sahara sands, discover the diversity of Morocco.': 'De la côte atlantique aux sables du Sahara, découvrez la diversité du Maroc.',
    'The Red City': 'La Ville Rouge',
    'The Spiritual Heart': 'Le Cœur Spirituel',
    'Gateway Between Continents': 'Porte Entre les Continents',
    'The Capital of Light': 'La Capitale des Lumières',
    'The Pearl of the South': 'La Perle du Sud',
    'The White House': 'La Ville Blanche',
    'The Blue Pearl': 'La Perle Bleue',
    'The Wind City': 'La Cité des Alizés',
    'Gateway to the Sahara': 'La Porte du Sahara',
    'The Door of the Desert': 'La Porte du Désert',
    'Explore Tours →': 'Voir les Circuits →',
    'Explore Tours': 'Voir les Circuits',

    // Global / Tour Template
    'Overview': 'Aperçu',
    'Highlights': 'Points Forts',
    'Itinerary': 'Itinéraire',
    "What's Included": "Ce qui est Inclus",
    'Not Included': 'Non Inclus',
    'Duration': 'Durée',
    'Group Size': 'Taille du Groupe',
    'Activity Level': "Niveau d'Activité",
    'Languages': 'Langues',
    'Book This Tour': 'Réserver ce Circuit',
    'Related Tours': 'Circuits Similaires',
    'Starting from': 'À partir de',
    'Per Person': 'Par Personne',
    
    // Blog Template
    'Table of Contents': 'Table des matières',
    'Read Time': 'Temps de lecture',
    'Share this article:': 'Partager cet article :',
    'Related Articles': 'Articles Similaires',
    'Read More': 'Lire la suite',

    // Other UI
    'Contact Us': 'Contactez-nous',
    'Send Message': 'Envoyer le Message',
    'First Name': 'Prénom',
    'Last Name': 'Nom',
    'Email Address': 'Adresse Email',
    'Phone Number': 'Numéro de Téléphone',
    'Message': 'Message',
    'Your message': 'Votre message',
    'Submit': 'Soumettre',
    
    // SEO Meta specific strings (exact matches in quotes)
    "'Moroccan Destinations - Explore Marrakech, Fes, Sahara & More | Maroc Explore'": "'Destinations Marocaines - Découvrez Marrakech, Fès, le Sahara & Plus | Maroc Explore'",
    "'Discover the diverse regions of Morocco. From the imperial cities of Marrakech and Fes to the golden dunes of the Sahara and the blue pearl of Chefchaouen.'": "'Découvrez les diverses régions du Maroc. Des villes impériales de Marrakech et Fès aux dunes dorées du Sahara et à la perle bleue de Chefchaouen.'",
    "'Morocco tours, Sahara desert tour, Marrakech excursions, Fes medina guide, Atlas Mountains trekking, Amazigh culture, Morocco travel'": "'Circuits Maroc, Excursion désert Sahara, Excursions Marrakech, Guide médina de Fès, Trekking montagnes de l\\'Atlas, Culture Amazighe, Voyage au Maroc'",
    "'Maroc Explore - Authentic Moroccan Tours & Sahara Desert Expeditions'": "'Maroc Explore - Circuits Authentiques au Maroc & Expéditions dans le Sahara'",
    "'Experience authentic Morocco with our guided tours. Explore the Sahara Desert, Atlas Mountains, and Imperial Cities with local experts. Book your Moroccan adventure today!'": "'Vivez l\\'expérience authentique du Maroc avec nos visites guidées. Explorez le désert du Sahara, l\\'Atlas et les villes impériales avec nos experts. Réservez aujourd\\'hui !'",
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^$\\{\\}()|[\\]\\\\]/g, '\\\\$&');
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Apply strict dictionary replacements
    for (const [en, fr] of Object.entries(dictionary)) {
        // Find literal strings within HTML tags, JSX text, or standard quotes
        // Using global string replacement
        content = content.split(en).join(fr);
    }
    
    // Metadata block string replacement for dynamic tours/blogs where we just translate the common keywords
    // e.g. title: 'Sahara Desert Expedition - 3 Days | Maroc Explore'
    // keywords: ['Tours', 'Morocco']
    if (content.includes('export const metadata')) {
        // Regex for the keywords array
        content = content.replace(/keywords:\s*\[([^\]]+)\]/g, (match, keywordsStr) => {
            let translated = keywordsStr
                .replace(/Morocco tours/g, 'Circuits Maroc')
                .replace(/Morocco travel/g, 'Voyage Maroc')
                .replace(/Sahara desert/g, 'Désert du Sahara')
                .replace(/Marrakech excursions/g, 'Excursions Marrakech')
                .replace(/Morocco/g, 'Maroc')
                .replace(/Tours/g, 'Circuits')
                .replace(/Tour/g, 'Circuit')
                .replace(/Desert/g, 'Désert')
                .replace(/Mountains/g, 'Montagnes')
                .replace(/Guide/g, 'Guide');
            return "keywords: [" + translated + "]";
        });

        // Regex for the title string
        content = content.replace(/title:\s*['"\`]([^'"\`]+)['"\`]/g, (match, titleStr) => {
             let translated = titleStr
                .replace(/Morocco/g, 'Maroc')
                .replace(/Tours/g, 'Circuits')
                .replace(/Tour/g, 'Circuit')
                .replace(/Desert/g, 'Désert')
                .replace(/Mountains/g, 'Montagnes')
                .replace(/Day Trip/g, 'Excursion')
                .replace(/Experience/g, 'Expérience')
                .replace(/Day/g, 'Jour');
             return "title: '" + translated + "'";
        });

        // Regex for the description string
        content = content.replace(/description:\s*['"\`]([^'"\`]+)['"\`]/g, (match, descStr) => {
             let translated = descStr
                .replace(/Morocco/g, 'Maroc')
                .replace(/Tours/g, 'Circuits')
                .replace(/Tour/g, 'Circuit')
                .replace(/Desert/g, 'Désert')
                .replace(/Mountains/g, 'Montagnes')
                .replace(/Experience/gi, 'Expérience')
                .replace(/Discover/gi, 'Découvrez')
                .replace(/Explore/gi, 'Explorez')
                .replace(/Book your/gi, 'Réservez votre')
                .replace(/Authentic/gi, 'Authentique')
                .replace(/with local experts/gi, 'avec des experts locaux');
             return "description: '" + translated + "'";
        });
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log("Translated content in " + filePath);
    }
}

function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    }
}

traverse(frDir);
console.log('Mass page and metadata translation complete!');
