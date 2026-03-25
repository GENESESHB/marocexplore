const fs = require('fs');
const libFrPath = 'src/app/lib/toursActivitiesLibFr.js';

const translations = {
    "adventure": "aventure",
    "cultural": "culturel",
    "Meet your expert local guide at the iconic Koutoubia Mosque.": "Rejoignez votre guide local expert à l'emblématique Mosquée Koutoubia.",
    "Visit the stunning 19th-century Bahia Palace.": "Visitez le magnifique Palais de la Bahia du 19ème siècle.",
    "Walk through the historical Jewish Quarter (Mellah).": "Promenez-vous dans le quartier juif historique (Mellah).",
    "Immersive Guided Souk Walk. Learn to bargain effectively.": "Promenade immersive et guidée dans les souks. Apprenez à marchander efficacement.",
    "Emerge into the legendary Jemaa el-Fnaa square as the evening vibe starts.": "Émergez sur la célèbre place Jemaa el-Fnaa au début de l'effervescence nocturne.",
    "Welcome arrival at a quiet luxurios Riad setting hidden from the medina chaos.": "Arrivée et accueil dans un luxueux Riad calme, caché du chaos de la médina.",
    "Educational Workshop: The Nakacha plains the deep-rooted history, and patterns.": "Atelier éducatif: La Nekacha explique l'histoire et les motifs.",
    "Application Session: Receive a professional, freehand design.": "Session d'application: Recevez un motif professionnel à main levée.",
    "Drying Time & Tasting: Enjoy tasting Traditional Moroccan Sweets.": "Séchage & Dégustation: Savourez des pâtisseries marocaines traditionnelles.",
    "Arrival at the Host Family Kitchen in Fes medina.": "Arrivée dans la cuisine de la famille hôte au sein de la médina de Fès.",
    "Masterclass Part 1: Secret Dough Preparation for Msemen.": "Masterclass 1ère partie: Préparation de la pâte secrète pour les Msemen.",
    "Masterclass Part 2: Flavor Balancing and Stuffing Briwates.": "Masterclass 2ème partie: Équilibrage des saveurs et farce des Briwates.",
    "Shared Degustation: Sit down to enjoy the delicious fruits of your labor.": "Dégustation partagée: Asseyez-vous pour savourer le fruit de votre travail.",
    "Pick-up and transfer to a specialized boutique for Costume Fitting (Kaftans or Djellabas).": "Prise en charge et transfert vers une boutique pour les essayages (Caftans ou Djellabas).",
    "Arrival at the Venue & Grand Welcome Ceremony with milk and stuffed dates.": "Arrivée sur le lieu & Grande Cérémonie d'Accueil avec lait et dattes farcies.",
    "Immerse deeply in the festivities: Live Music, Dancing, and Cultural Rites.": "Immersion dans les festivités: Musique live, Danse et Rites culturels.",
    "Grand Feast: Sit down to enjoy a lavish, multi-course traditional Moroccan banquet.": "Grand Festin: Asseyez-vous pour profiter d'un somptueux banquet traditionnel marocain.",
    "Pick up from your riad and cross the stunning Tizi n'Tichka pass.": "Départ de votre riad et traversée du magnifique col de Tizi n'Tichka.",
    "Explore Ait Benhaddou and Ouarzazate, journey through the Dades Valley.": "Explorez Aït Benhaddou et Ouarzazate, puis parcourez la vallée du Dadès.",
    "Camel trek across Erg Chebbi dunes at sunset to your luxury desert camp.": "Balade à dos de chameau dans les dunes de l'Erg Chebbi au coucher du soleil jusqu'à votre camp de luxe.",
    "Sunrise over the Sahara, then return travel to Marrakech.": "Lever du soleil sur le Sahara, puis retour à Marrakech.",
    "Meet your guide at the Kasbah entrance in Outa el Hammam square.": "Rejoignez votre guide à l'entrée de la Kasbah sur la place Outa el Hammam.",
    "Explore the vivid blue streets and hidden architectural marvels perfect for photography.": "Explorez les rues d'un bleu vif et les merveilles architecturales cachées parfaites pour la photographie.",
    "Stop for a locally sourced goat cheese and olive tasting.": "Arrêtez-vous pour une dégustation de fromage de chèvre local et d'olives.",
    "Visit the Spanish Mosque for panoramic views over the entire valley.": "Visitez la Mosquée Espagnole pour une vue panoramique sur toute la vallée.",
    "relax": "détente",
    "Meet near the port and observe the bustling morning fish market and iconic blue boats.": "Rendez-vous près du port pour observer le marché aux poissons animé et les bateaux bleus emblématiques.",
    "Walk along the dramatic ocean ramparts (Skala) and hear tales of historic pirates.": "Promenez-vous le long des remparts spectaculaires de l'océan (Skala) et écoutez des histoires de pirates.",
    "Enjoy a freshly grilled seafood lunch right by the ocean.": "Savourez un déjeuner de fruits de mer fraîchement pêchés juste au bord de l'océan.",
    "Wander the artsy medina and discover local Thuya wood carvers.": "Flânez dans la médina artistique et découvrez les sculpteurs sur bois de Thuya locaux.",
    "Begin at the majestic Blue Gate, entering the medieval medina.": "Commencez à la majestueuse Porte Bleue (Bab Bou Jeloud), en entrant dans la médina médiévale.",
    "Visit the exquisitely detailed Bou Inania Madrasa and Al-Qarawiyyin University.": "Visitez la très détaillée Médersa Bou Inania et l'Université Al-Qarawiyyin.",
    "Experience the pungent but spectacular Chouara Tannery.": "Vivez l'expérience de la spectaculaire mais odorante Tannerie Chouara.",
    "Explore the Nejjarine Museum of Wooden Arts and localized artisan guilds.": "Explorez le Musée Nejjarine des Arts du Bois et les guildes artisanales locales.",
    "sports": "sports",
    "Morning pickup and transfer to the premier surf spot of Taghazout.": "Prise en charge matinale et transfert vers le célèbre spot de surf de Taghazout.",
    "Safety briefing and a 2-hour guided surf lesson with professional instructors.": "Consignes de sécurité et leçon de surf guidée de 2 heures avec des instructeurs professionnels.",
    "Beachside lunch featuring fresh local produce and relaxing by the ocean.": "Déjeuner en bord de mer composé de produits locaux frais et détente au bord de l'océan.",
    "Free surf session or optional camel ride near the beach before returning.": "Session de surf libre ou balade optionnelle à dos de chameau près de la plage avant le retour.",
    "Tour the colossal Atlas Film Studios, seeing sets from Gladiator, Cleopatra, and more.": "Visitez les colossaux studios Atlas Film de Ouarzazate, et découvrez les décors de Gladiator, Cléopâtre, et plus.",
    "Explore the majestic 19th-century Kasbah Taourirt, with its intricate clay architecture.": "Explorez la majestueuse Kasbah Taourirt du 19ème siècle, avec son architecture en argile complexe.",
    "Enjoy mint tea with panoramic views over the surrounding barren plateau and High Atlas.": "Dégustez un thé à la menthe avec une vue panoramique sur le plateau aride environnant et le Haut Atlas.",
    "Start at the magnificent Bab Mansour, considered one of North Africa’s finest gates.": "Commencez à la magnifique Bab Mansour, considérée comme l'une des plus belles portes d'Afrique du Nord.",
    "Explore the Mausoleum of Moulay Ismail and the vast Heri es-Souani granaries.": "Explorez le Mausolée de Moulay Ismail et les vastes greniers de Heri es-Souani.",
    "Walk through the old medina and the lively Lahdim Square.": "Promenez-vous dans l'ancienne médina et sur la place très animée de Lahdim.",
    "Optional transfer to the nearby Roman ruins of Volubilis.": "Transfert optionnel vers les ruines romaines voisines de Volubilis.",
    "Visit the iconic Hassan Tower and the exquisitely decorated Mausoleum of Mohammed V.": "Visitez l’emblématique Tour Hassan et le Mausolée de Mohammed V, magnifiquement décoré.",
    "Explore the ancient Roman and Merinid ruins at the Chellah necropolis.": "Explorez les anciennes ruines romaines et mérinides à la nécropole de Chellah.",
    "Stroll through the blue-and-white alleys of the Kasbah of the Udayas.": "Flânez dans les ruelles bleues et blanches de la Kasbah des Oudayas.",
    "Relax with mint tea overlooking the Bou Regreg river and the ocean.": "Détendez-vous avec un thé à la menthe en regardant le fleuve Bouregreg se jeter dans l'océan.",
    "Meet at Grand Socco and walk through the historic Kasbah district.": "Rendez-vous au Grand Socco et promenez-vous dans le quartier historique de la Kasbah.",
    "Visit the Kasbah Museum in the former Sultan’s palace.": "Visitez le Musée de la Kasbah dans l'ancien palais du Sultan.",
    "Drive up to Cap Spartel, where the Mediterranean and Atlantic oceans meet.": "Conduisez jusqu'au Cap Spartel, où se rencontrent la mer Méditerranée et l'océan Atlantique.",
    "Explore the magnificent Cave of Hercules with its Africa-shaped opening.": "Explorez les magnifiques Grottes d'Hercule avec leur célèbre ouverture en forme d'Afrique.",
    "Drive into the rural Anti-Atlas foothills surrounding Agadir.": "Conduisez dans les contreforts ruraux de l'Anti-Atlas qui entourent Agadir.",
    "Visit a Women’s Argan Oil Cooperative and learn the tedious hand-crushing process.": "Visitez une coopérative féminine d'huile d'argan et découvrez le laborieux processus de concassage manuel.",
    "Walk through an ancient Amazigh village and see traditional mud-brick construction.": "Promenez-vous dans un ancien village amazigh et découvrez la construction traditionnelle en briques de terre crue.",
    "Share an authentic homemade Tagine and freshly baked bread with a local family.": "Partagez un authentique tagine fait maison et du pain fraîchement cuit avec une famille rurale marocaine."
};

let content = fs.readFileSync(libFrPath, 'utf8');

// Also translate the raw category labels
let changed = 0;
for (const [english, french] of Object.entries(translations)) {
    // Specifically target occurrences inside "activity": "..." and "category": "..."
    const activRegex = new RegExp(`"activity":\\s*"${english.replace(/[.*+?^$\\{\\}()|[\\]\\\\]/g, '\\$&')}"`, 'g');
    const categRegex = new RegExp(`"category":\\s*"${english.replace(/[.*+?^$\\{\\}()|[\\]\\\\]/g, '\\$&')}"`, 'g');
    
    // Replace the specific properties to avoid accidentally translating logic operators
    if (content.match(activRegex)) {
        content = content.replace(activRegex, `"activity": "${french}"`);
        changed++;
    }
    
    if (content.match(categRegex)) {
        content = content.replace(categRegex, `"category": "${french}"`);
        changed++;
    }
}

fs.writeFileSync(libFrPath, content, 'utf8');
console.log(`Successfully replaced ${changed} localized heading instances!`);
