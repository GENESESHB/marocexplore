const fs = require('fs');
const path = require('path');

const replacements = [
    {
        file: 'src/app/fr/experiences/page.js',
        find: 'href={`/filter?activity=${exp.activity}`}',
        replace: 'href={`/fr/recherche?activity=${exp.activity}`}'
    },
    {
        file: 'src/app/fr/circuits/components/TourTemplate.js',
        find: '<Link href="/">Accueil</Link> &gt; <Link href="/tours">Circuits</Link>',
        replace: '<Link href="/fr">Accueil</Link> &gt; <Link href="/fr/circuits">Circuits</Link>'
    },
    {
        file: 'src/app/fr/activites/[slug]/page.js',
        finds: [
            { find: '<Link href="/filter" className={styles.backBtn}>Explore All Tours</Link>', replace: '<Link href="/fr/recherche" className={styles.backBtn}>Explorer Tous les Circuits</Link>' },
            { find: '<Link href="/filter" className={styles.allLink}>View all tours →</Link>', replace: '<Link href="/fr/recherche" className={styles.allLink}>Voir tous les circuits →</Link>' },
            { find: '<Link href={`/tours/${tour.slug}`} className={styles.detailsBtn}>', replace: '<Link href={`/fr/circuits/${tour.slug}`} className={styles.detailsBtn}>' },
            { find: '<Link href="/filter" className={styles.exploreBtn}>Explore Other Tours</Link>', replace: '<Link href="/fr/recherche" className={styles.exploreBtn}>Explorer d\'Autres Circuits</Link>' }
        ]
    },
    {
        file: 'src/app/fr/blog/[slug]/page.js',
        finds: [
            { find: '<Link href={`/tours/${tour.slug}`} className={styles.bookButton}>View Tour & Book Now</Link>', replace: '<Link href={`/fr/circuits/${tour.slug}`} className={styles.bookButton}>Voir le Circuit et Réserver</Link>' },
            { find: '<Link href={`/tours/${tour.slug}`}>See Details</Link>', replace: '<Link href={`/fr/circuits/${tour.slug}`}>Voir les Détails</Link>' }
        ]
    },
    {
        file: 'src/app/fr/recherche/page.js',
        finds: [
            { find: '<Link href="/" className={styles.backLinkBottom}>', replace: '<Link href="/fr" className={styles.backLinkBottom}>' },
            { find: '<Link href={`/tours/${tour.slug}`} className={styles.viewBtn}>View Details</Link>', replace: '<Link href={`/fr/circuits/${tour.slug}`} className={styles.viewBtn}>Voir les Détails</Link>' },
            { find: '<Link href={`/tours/${tour.slug}`} className={styles.bookBtn}>Book Now</Link>', replace: '<Link href={`/fr/circuits/${tour.slug}`} className={styles.bookBtn}>Réserver</Link>' }
        ]
    }
];

let filesChanged = 0;

replacements.forEach(action => {
    const filePath = path.join(__dirname, action.file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let initialContent = content;

        if (action.finds) {
            action.finds.forEach(f => {
                content = content.replace(f.find, f.replace);
            });
        } else {
            content = content.replace(action.find, action.replace);
        }

        if (content !== initialContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            filesChanged++;
            console.log(`Patched links in ${action.file}`);
        }
    }
});

console.log(`Finished patching internal links across ${filesChanged} files.`);
