
export const enToFrMap = {
  "tours": "circuits",
  "blogs": "blog",
  "about": "a-propos",
  "activities": "activites",
  "filter": "recherche",
  "contact": "contact",
  "experiences": "experiences",
  "culture": "culture",
  "destinations": "destinations",
  "agadir-beach-surf": "agadir-plage-surf",
  "agadir-surf-sun-experience": "agadir-experience-surf-soleil",
  "amazigh-cultural-immersion": "immersion-culturelle-amazighe",
  "atlas-mountains-trek": "trek-montagnes-atlas",
  "chefchaouen-blue-city-tour": "visite-ville-bleue-chefchaouen",
  "chefchaouen-blue-pearl-walk": "balade-perle-bleue-chefchaouen",
  "essaouira-coastal-escape": "escapade-cotiere-essaouira",
  "essaouira-coastal-retreat": "retraite-cotiere-essaouira",
  "fes-cultural-journey": "voyage-culturel-fes",
  "fez-el-bali-time-travel": "voyage-temps-fez-el-bali",
  "fes-el-bali-time-travel": "voyage-temps-fes-el-bali",
  "luxury-desert-camp": "camp-luxe-desert",
  "marrakech-medina-tour": "visite-medina-marrakech",
  "meknes-imperial-heritage": "heritage-imperial-meknes",
  "merzouga-camel-trek": "trek-chameau-merzouga",
  "moroccan-celebration-sbou-wedding": "celebration-mariage-sbou-marocain",
  "moroccan-cooking-msemen-briwate": "cours-cuisine-marocaine-msemen-briwate",
  "ouarzazate-cinema-tour": "visite-cinema-ouarzazate",
  "ouarzazate-cinematic-history": "histoire-cinematographique-ouarzazate",
  "rabat-capital-explorer": "explorateur-capitale-rabat",
  "rabat-historical-tour": "visite-historique-rabat",
  "sahara-desert-expedition": "expedition-desert-sahara",
  "tangier-day-trip": "excursion-journee-tanger",
  "tanger-gateway-to-africa": "tanger-porte-afrique",
  "traditional-henna-art-session": "session-art-henne-traditionnel"
};

export const frToEnMap = Object.entries(enToFrMap).reduce((acc, [en, fr]) => {
  acc[fr] = en;
  return acc;
}, {});

export function translatePath(pathname, targetLang) {
  // If we are given /fr/tours/sahara, and targetLang is 'en'
  // Or if we are given /tours/sahara, and targetLang is 'fr'
  
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return targetLang === 'fr' ? '/fr' : '/';

  // Remove 'fr' if it exists
  const isCurrentlyFr = segments[0] === 'fr';
  if (isCurrentlyFr) segments.shift();

  // Translate remaining segments
  const translatedSegments = segments.map(seg => {
    if (targetLang === 'fr') {
      return enToFrMap[seg] || seg;
    } else {
      return frToEnMap[seg] || seg;
    }
  });

  const base = targetLang === 'fr' ? '/fr' : '';
  const result = base + '/' + translatedSegments.join('/');
  return result === '' ? '/' : result;
}
