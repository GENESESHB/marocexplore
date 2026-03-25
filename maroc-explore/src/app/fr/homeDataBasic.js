export const destinations = [
  { id: 'marrakech', name: 'Marrakech' },
  { id: 'fes', name: 'Fès' },
  { id: 'tanger', name: 'Tanger' },
  { id: 'rabat', name: 'Rabat' },
  { id: 'agadir', name: 'Agadir' },
  { id: 'casablanca', name: 'Casablanca' },
  { id: 'chefchaouen', name: 'Chefchaouen' },
  { id: 'essaouira', name: 'Essaouira' },
  { id: 'merzouga', name: 'Merzouga' },
  { id: 'ouarzazate', name: 'Ouarzazate' }
];

export const durations = [
  { value: '', label: 'Toute durée', days: 'Flexible' },
  { value: '1', label: '1 Jour', days: 'Excursion d\'un jour' },
  { value: '2', label: '2 Jours', days: 'Week-end' },
  { value: '3', label: '3 Jours', days: 'Court séjour' },
  { value: '4', label: '4 Jours', days: 'Prolongé' },
  { value: '5', label: '5 Jours', days: 'Aventure' },
  { value: '7', label: '1 Semaine', days: 'Semaine complète' },
  { value: '10', label: '10 Jours', days: 'En profondeur' },
  { value: '14', label: '2 Semaines', days: 'Circuit complet' }
];

export const activityTypes = [
  { id: '', label: 'Toutes les activités' },
  { id: 'adventure', label: 'Aventure' },
  { id: 'cultural', label: 'Culturel' },
  { id: 'relaxation', label: 'Détente' },
  { id: 'wildlife', label: 'Faune' },
  { id: 'photography', label: 'Photographie' },
  { id: 'camping', label: 'Camping' },
  { id: 'luxury', label: 'Luxe' }
];

export const categories = [
  { id: 'all', label: 'Tous les circuits' },
  { id: 'desert', label: 'Désert' },
  { id: 'city', label: 'Ville' },
  { id: 'mountain', label: 'Montagne' },
  { id: 'coastal', label: 'Côtier' }
];

// We will keep icons in page.js, so we only export text for whyChooseItems
export const whyChooseTexts = [
  "Experts Locaux",
  "100% Sécurisé",
  "Gagnez du Temps",
  "Meilleurs Séjours"
];
