const fs = require('fs');
const path = require('path');

const frDir = path.join(__dirname, 'src', 'app', 'fr');

const destinationsTranslations = {
    'Our Destinations': 'Nos Destinations',
    'From the Atlantic coast to the Sahara sands, discover the diversity of Morocco.': 'De la côte atlantique aux sables du Sahara, découvrez la diversité du Maroc.',
    'The Red City': 'La Ville Rouge',
    'Experience the magic of the Red City. A sensory explosion of color, sound, and scent in the legendary medina.': 'Découvrez la magie de la Ville Rouge. Une explosion sensorielle de couleurs, de sons et de parfums dans la légendaire médina.',
    'The Spiritual Heart': 'Le Cœur Spirituel',
    "Step back in time in the largest living medieval city in the world. Home to the world's oldest university.": "Remontez le temps dans la plus grande cité médiévale vivante au monde. Abritant la plus ancienne université du monde.",
    'Gateway Between Continents': 'Porte Entre les Continents',
    "Tangier's strategic location at the entrance to the Mediterranean has made it one of the most coveted cities in history.": "L'emplacement stratégique de Tanger à l'entrée de la Méditerranée en a fait l'une des villes les plus convoitées de l'histoire.",
    'The Capital of Light': 'La Capitale des Lumières',
    'Founded in the 12th century by the Almohad dynasty, Rabat is a UNESCO World Heritage site blending history and modern planning.': "Fondée au 12ème siècle par la dynastie des Almohades, Rabat est un site du patrimoine mondial de l'UNESCO mêlant histoire et urbanisme moderne.",
    'The Pearl of the South': 'La Perle du Sud',
    "Morocco's premier beach resort with modern infrastructure, panoramic kasbah views, and year-round sunshine.": "La première station balnéaire du Maroc avec ses infrastructures modernes, ses vues panoramiques sur la kasbah et son soleil toute l'année.",
    'The White House': 'La Ville Blanche',
    "Morocco's economic powerhouse, featuring the iconic Hassan II Mosque with the world's tallest minaret.": "Le moteur économique du Maroc, abritant l'emblématique mosquée Hassan II avec le plus haut minaret du monde.",
    'The Blue Pearl': 'La Perle Bleue',
    'Nestled in the Rif Mountains, this blue-washed city offers a tranquil escape and breathtaking mountain views.': 'Nichée dans les montagnes du Rif, cette ville teintée de bleu offre une évasion tranquille et des vues imprenables sur les montagnes.',
    'The Wind City': 'La Cité des Alizés',
    'A fortified coastal town with blue-and-white houses, a bustling port, and a laid-back artistic soul.': 'Une ville côtière fortifiée avec des maisons bleues et blanches, un port animé et une âme artistique décontractée.',
    'Gateway to the Sahara': 'Porte du Sahara',
    'Adventure deep into the Erg Chebbi dunes. Expérience the profound silence and spectacular stars of the Sahara.': "Aventurez-vous au cœur des dunes de l'Erg Chebbi. Vivez le silence profond et le ciel étoilé spectaculaire du Sahara.",
    'The Door of the Desert': 'La Porte du Désert',
    'Famous for its distinctive kasbah architecture and international film studios on the edge of the desert.': 'Célèbre pour son architecture distinctive de kasbah et ses studios de cinéma internationaux à la lisière du désert.'
};

const experiencesTranslations = {
    'Our Experiences': 'Nos Expériences',
    'Carefully curated journeys designed to inspire, challenge, and delight.': 'Des voyages soigneusement conçus pour inspirer, défier et ravir.',
    'Sahara Désert Expeditions': 'Expéditions Désert du Sahara',
    'Expérience the silence and majesty of the sand dunes. Camel treks, luxury camps, and nomadic encounters.': 'Découvrez le silence et la majesté des dunes de sable. Balades à dos de chameau, camps de luxe et rencontres nomades.',
    'Atlas Mountain Treks': "Treks dans les Montagnes de l'Atlas",
    "Breathtaking landscapes, terraced valleys, and traditional Berber villages in North Africa's highest peaks.": "Des paysages à couper le souffle, des vallées en terrasses et des villages berbères traditionnels sur les plus hauts sommets d'Afrique du Nord.",
    'Atlantic Coastal Escapes': "Évasions Côtières de l'Atlantique",
    'Relax in the wind-swept town of Essaouira or catch waves in Agadir. Fresh seafood and ocean breezes.': "Détendez-vous dans la ville balayée par les vents d'Essaouira ou surfez sur les vagues d'Agadir.  Fruits de mer frais et brises océaniques.",
    'Imperial City Journeys': 'Voyages dans les Villes Impériales',
    'Navigate the labyrinthine medinas of Marrakech, Fes, and Rabat. History, architecture, and vibrant souks.': 'Naviguez dans les médinas labyrinthiques de Marrakech, Fès et Rabat. Histoire, architecture et souks animés.',
    'Ultra-Luxury Retreats': 'Retraites Ultra-Luxe',
    'The finest riads, private villas, and exclusive Expériences tailored to your every desire.': 'Les meilleurs riads, villas privées et expériences exclusives adaptées à tous vos désirs.',
    'Authentic Local Life': 'Vie Locale Authentique',
    'Go beyond the surface. Join a family for tea, learn traditional crafts like Henna (tatoige), or be a guest at a Moroccan celebration like a marriage or Sbou.': "Allez au-delà des apparences.  Rejoignez une famille pour le thé, apprenez des métiers traditionnels comme le Henné, ou soyez l'invité d'une célébration marocaine comme un mariage.",
    'Photography Circuits': 'Circuits Photographiques',
    'Capture the vivid colors of Chefchaouen, the bustling souks of Marrakech, and the golden hour over golden dunes.': "Capturez les couleurs vives de Chefchaouen, les souks animés de Marrakech et l'heure dorée sur les dunes dorées.",
    'Wildlife & Nature': 'Faune & Nature',
    'Découvrez the unique fauna of Maroc, from the famous tree-climbing goats of the Souss Valley to Barbary macaques.': 'Découvrez la faune unique du Maroc, des célèbres chèvres grimpant aux arbres de la vallée du Souss aux macaques de Barbarie.',
    'Désert Camping under the Stars': 'Camping dans le Désert sous les Étoiles',
    'Spend an unforgettable night at a traditional or luxury desert camp in the heart of the Sahara.': 'Passez une nuit inoubliable dans un camp traditionnel ou de luxe en plein cœur du Sahara.',
    'View Tours': 'Voir les Circuits'
};

const cultureTranslations = {
    'Moroccan Culture': 'Culture Marocaine',
    'A vibrant mosaic of history, art, and deep-rooted traditions.': "Une mosaïque vibrante d'histoire, d'art et de traditions profondément enracinées.",
    'The Heart of Morocco': 'Le Cœur du Maroc',
    "Morocco's culture is a unique blend of Arab, Amazigh, African, and European influences. It is a land where ancient history is living, and hospitality is a sacred duty. We invite you to explore the depth and beauty of our heritage.": "La culture du Maroc est un mélange unique d'influences arabes, amazighes, africaines et européennes. C'est une terre où l'histoire ancienne est vivante et où l'hospitalité est un devoir sacré. Nous vous invitons à explorer la profondeur et la beauté de notre patrimoine.",
    'Amazigh Heritage': 'Héritage Amazigh',
    'The indigenous people of North Africa, the Amazigh (Berber) people have a history stretching back millennia. Their language, Tamazight, and their unique artistic expressions in jewelry and weaving are foundational to Moroccan identity.': "Peuple autochtone d'Afrique du Nord, les Amazighs (Berbères) ont une histoire qui remonte à des millénaires. Leur langue, le tamazight, et leurs expressions artistiques uniques dans la bijouterie et le tissage sont fondamentales pour l'identité marocaine.",
    'Traditional Crafts': 'Artisanat Traditionnel',
    'Maroc is a world center for artisanal excellence. From the intricate zellige tilework of Fes to the cedar wood carving of the Middle Atlas, every craft tells a story of patience, skill, and heritage.': "Le Maroc est un centre mondial d'excellence artisanale.  Du travail complexe des zelliges de Fès à la sculpture sur bois de cèdre du Moyen Atlas, chaque métier raconte une histoire de patience, de compétence et d'héritage.",
    'Music & Rhythm': 'Musique et Rythme',
    'From the spiritual depths of Gnawa music to the energetic Ahwach dances of the High Atlas, music is the heartbeat of Maroc. It is a celebration of community and history.': "Des profondeurs spirituelles de la musique Gnawa aux danses énergiques Ahwach du Haut Atlas, la musique est le battement de cœur du Maroc. C'est une célébration de la communauté et de l'histoire.",
    'Culinary Traditions': 'Traditions Culinaires',
    'Expérience the complex flavors of Moroccan cuisine. More than just food, it is a ritual of hospitality. Learn about the art of the tagine, the Friday couscous tradition, and the omnipresent mint tea.': "Découvrez les saveurs complexes de la cuisine marocaine.  Plus qu'une simple nourriture, c'est un rituel d'hospitalité.  Découvrez l'art de préparer le tajine, la tradition du couscous du vendredi et le thé à la menthe omniprésent.",
    'Festivals & Celebrations': 'Festivals et Célébrations',
    'Participate in vibrant local festivals like the Timitar Amazigh Music Festival in Agadir, the Gnawa Festival in Essaouira, or traditional marriage ceremonies that bring entire communities together.': "Participez à des festivals locaux animés comme le Festival de musique amazighe Timitar à Agadir, le Festival Gnawa à Essaouira, ou à des cérémonies de mariage traditionnelles qui rassemblent des communautés entières.",
    'Historical Architecture': 'Architecture Historique',
    'Wander through ancient medinas, admire the intricate designs of Kasbahs built from earth, and Découvrez the elegant courtyards of Riads holding centuries of architectural mastery.': "Promenez-vous dans les anciennes médinas, admirez les motifs complexes des Kasbahs construites en terre et découvrez les élégantes cours intérieures des Riads détenant des siècles de maîtrise architecturale.",
    'Spiritual Life': 'Vie Spirituelle',
    'Explorez the serene energy of old mosques, the legacy of Islamic scholarship in places like Al-Qarawiyyin, and the syncretic traditions of Sufi fraternities that influence daily Moroccan life.': "Découvrez l'énergie sereine des vieilles mosquées, l'héritage de l'érudition islamique dans des endroits comme Al-Qarawiyyin, et les traditions syncrétiques des fraternités soufies qui influencent la vie quotidienne marocaine.",
    'Hospitality & Tea Culture': 'Hospitalité et Culture du Thé',
    'Moroccan hospitality is legendary. Central to this is the serving of sweet Moroccan mint tea, symbolizing respect and friendship to guests and strangers alike.': "L'hospitalité marocaine est légendaire. La clé de celle-ci est le service du thé à la menthe marocain sucré, qui symbolise le respect et l'amitié envers les invités et les étrangers.",
    'Experience it for yourself': "Faites-en l'expérience par vous-même",
    'Our tours are designed to go beyond the surface, offering genuine cultural immersion and meaningful connections.': 'Nos circuits sont conçus pour aller au-delà des apparences, offrant une véritable immersion culturelle et des liens significatifs.',
    'Explore Cultural Tours': 'Explorer les Circuits Culturels'
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

processTranslations(path.join(frDir, 'destinations', 'page.js'), destinationsTranslations);
processTranslations(path.join(frDir, 'experiences', 'page.js'), experiencesTranslations);
processTranslations(path.join(frDir, 'culture', 'page.js'), cultureTranslations);

console.log('Finished array translations');
