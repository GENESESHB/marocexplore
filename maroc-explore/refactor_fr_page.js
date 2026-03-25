const fs = require('fs');
const path = require('path');

const pageFile = path.join(__dirname, 'src', 'app', 'fr', 'page.js');
let content = fs.readFileSync(pageFile, 'utf8');

// 1. Add imports at the top
const importsToAdd = `import { destinations, durations, activityTypes, categories, whyChooseTexts } from './homeDataBasic';
import { destinationContent, faqData, testimonials } from './homeDataFrench';\n`;

content = content.replace("import styles from './styles/Home.module.css';", "import styles from './styles/Home.module.css';\n" + importsToAdd);

// 2. Remove inline array declarations (which are huge) using regex
content = content.replace(/const destinations = \[[\s\S]*?\];/, '');
content = content.replace(/const durations = \[[\s\S]*?\];/, '');
content = content.replace(/const activityTypes = \[[\s\S]*?\];/, '');
content = content.replace(/const categories = \[[\s\S]*?\];/, '');
content = content.replace(/const whyChooseItems = \[[\s\S]*?\];/, `const whyChooseItems = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      text: whyChooseTexts[0]
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      text: whyChooseTexts[1]
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      text: whyChooseTexts[2]
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      text: whyChooseTexts[3]
    }
  ];`);

content = content.replace(/const destinationContent = \[[\s\S]*?\];\s*\n\s*\/\/ Testimonials data/, '// Testimonials data');
content = content.replace(/const testimonials = \[[\s\S]*?\];\s*\n\s*\/\/ FAQ data/, '// FAQ data');
content = content.replace(/const faqData = \[[\s\S]*?\];\s*\n\s*const stats =/, 'const stats =');

// 3. Translate generic text
content = content.replace(/Explore <span className={styles.heroHighlight}>Morocco<\/span>/, 'Explorer le <span className={styles.heroHighlight}>Maroc</span>');
content = content.replace(/'Where to\?'/, "'Où aller ?'");
content = content.replace(/Destination/g, "Destination"); // same
content = content.replace(/Select City/, 'Sélectionner une ville');
content = content.replace(/Duration/, 'Durée');
content = content.replace(/'How long\?'/, "'Combien de temps ?'");
content = content.replace(/Select Duration/, 'Sélectionner la durée');
content = content.replace(/Activity Type/g, 'Type d\'activité');
content = content.replace(/Activity/, 'Activité');
content = content.replace(/'What type\?'/, "'Quel type ?'");
content = content.replace(/Select Activity Type/, 'Sélectionner une activité');
content = content.replace(/Explore Tours/, 'Voir les circuits');
content = content.replace(/Watch Video/, 'Voir la vidéo');

content = content.replace(/Authentic journeys through ancient medinas, golden deserts, and vibrant culture/, 'Des voyages authentiques à travers des médinas anciennes, des déserts dorés et une culture vibrante');
content = content.replace(/Discover Morocco/, 'Découvrir le Maroc');
content = content.replace(/We Craft <span className={styles.whatWeDoHighlight}>Unforgettable<\/span> Journeys/, 'Nous Créons des Voyages <span className={styles.whatWeDoHighlight}>Inoubliables</span>');
content = content.replace(/At <strong>Morocco Explore<\/strong>, we transform travel dreams into reality[^<]+/, 'Chez <strong>Morocco Explore</strong>, nous transformons les rêves de voyage en réalité. Des dunes dorées du Sahara aux rues bleues de Chefchaouen, nous organisons des expériences immersives qui vous connectent à la riche tapisserie culturelle et historique du Maroc.');
content = content.replace(/Our expert local guides reveal hidden gems beyond the tourist trails[^<]+/, 'Nos guides locaux experts révèlent des trésors cachés au-delà des sentiers touristiques - qu\'il s\'agisse d\'un thé à la menthe avec des familles berbères, de l\'exploration d\'anciennes kasbahs ou d\'une balade à dos de chameau au coucher du soleil. Chaque voyage est conçu avec soin.');

content = content.replace(/Handpicked Experiences/, 'Expériences sur-mesure');
content = content.replace(/24\/7 Local Support/, 'Assistance 24/7');
content = content.replace(/Authentic Encounters/, 'Rencontres Authentiques');
content = content.replace(/Start Your Adventure/, 'Commencer l\'Aventure');

content = content.replace(/Discover Our Destinations/, 'Découvrez Nos Destinations');
content = content.replace(/Journey through imperial cities, mountain villages, and desert landscapes while discovering authentic Amazigh culture/, 'Voyagez à travers les villes impériales, les villages de montagne et les paysages désertiques tout en découvrant l\'authentique culture amazighe');
content = content.replace(/Historical Heritage/, 'Héritage Historique');
content = content.replace(/Amazigh Culture/, 'Culture Amazighe');
content = content.replace(/Top Activities/, 'Activités Principales');

content = content.replace(/What Our Travelers Say/, 'Ce Que Disent Nos Voyageurs');
content = content.replace(/Real stories and experiences from our recent tours/, 'Des histoires vraies et des expériences de nos récents voyages');

content = content.replace(/Frequently Asked Questions/, 'Questions Fréquemment Posées');
content = content.replace(/Everything you need to know about preparing for your Moroccan adventure/, 'Tout ce que vous devez savoir pour préparer votre aventure marocaine');

content = content.replace(/View All Tours/, 'Voir Tous Les Circuits');
content = content.replace(/Explore All Destinations/, 'Explorer Toutes Les Destinations');

fs.writeFileSync(pageFile, content);
console.log('Successfully refactored and translated page.js');
