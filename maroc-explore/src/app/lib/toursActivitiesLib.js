export const toursActivitiesLib = [
  {
    id: 1,
    slug: 'sahara-desert-expedition',
    title: 'Sahara Desert Expedition',
    category: 'desert',
    activity: 'adventure',
    image: '/images/maroc_explore-img/merzouga/maroc-explore-marzouga-desert-trips.avif',
    gallery: [
      '/images/maroc_explore-img/merzouga/maroc-explore-merzouga-trip-camel-ride.avif',
      '/images/maroc_explore-img/merzouga/maroc-explore-camp-desert-morocco-adventure.avif',
      '/images/maroc_explore-img/merzouga/maroc-explore-trips-to-ride-camel-marzouga.avif'
    ],
    price: 299,
    duration: '3 Days',
    durationDays: 3,
    rating: 4.9,
    reviews: 128,
    location: 'Merzouga',
    departurePoint: 'Jemaa el-Fnaa / Hotel Pickup',
    returnPoint: 'Marrakech Center',
    availability: 'Daily',
    departureTime: '08:00 AM',
    description: 'Experience the magic of the Sahara with camel treks, desert camping, and stunning sunsets over the dunes.',
    fullDescription: 'Embark on a soul-stirring journey through the golden dunes of the Sahara Desert. This 3-day expedition from Marrakech takes you through the High Atlas Mountains, ancient Kasbahs, and deep into the heart of the Erg Chebbi desert. Disconnect from the modern world and find peace in the absolute silence of the Sahara. You will benefit from a true digital detox while connecting with ancient Berber traditions and sleeping under a breathtaking canopy of millions of stars. This is more than a trip; it\'s a rejuvenating escape that will leave you with a profound sense of awe and life-long memories.',
    itinerary: [
      { day: 1, title: 'Marrakech to Dades Valley via High Atlas', content: 'Morning departure from your riad in Marrakech. Drive through the winding Tizi n\'Tichka pass. Visit the UNESCO World Heritage site of Ait Ben Haddou.' },
      { day: 2, title: 'Dades Valley to the Merzouga Dunes', content: 'Explore the towering limestone walls of the Todra Gorges. Embark on a sunset camel trek into the Erg Chebbi dunes. Arrive at luxury desert camp.' },
      { day: 3, title: 'Merzouga to Marrakech', content: 'Witness a breathtaking desert sunrise. Trek back on camels or by 4x4, before beginning the scenic journey back to Marrakech.' }
    ],
    highlights: ['Camel Trek in the Dunes', 'Luxury Desert Camping', 'Digital Detox & Silence', 'Berber Campfire Dinner'],
    included: ['Transport in Air-Conditioned 4x4 or Minibus', 'Professional Guide', '2 Nights Accommodation', 'Sunset Camel Trek'],
    excluded: ['Lunches', 'Drinks', 'Personal Expenses', 'Tips']
  },
  {
    id: 2,
    slug: 'marrakech-medina-tour',
    title: 'Marrakech Medina Tour',
    category: 'city',
    activity: 'cultural',
    image: '/images/maroc_explore-img/marrakech/marrakech-tours-trips-jamaaelfna.avif',
    gallery: [
      '/images/maroc_explore-img/marrakech/marrakech-colors-culter.avif',
      '/images/maroc_explore-img/marrakech/marrakech-tours.avif',
      '/images/maroc_explore-img/marrakech/marrakech-tours-trip-archetecte.avif'
    ],
    price: 89,
    duration: '1 Day',
    durationDays: 1,
    rating: 4.8,
    reviews: 256,
    location: 'Marrakech',
    departurePoint: 'Koutoubia Mosque Main Entrance',
    returnPoint: 'Jemaa el-Fnaa',
    availability: 'Every Monday, Wednesday, Friday',
    departureTime: '09:00 AM',
    description: 'Navigate the labyrinthine streets of the old medina, visit historic palaces, and experience the vibrant souks.',
    fullDescription: 'Discover the "Red City" with our expert local guides. This immersive walking tour takes you through the heart of Marrakech\'s Medina, a UNESCO World Heritage site. You will uncover hidden architectural gems that most independent visitors completely miss. Enjoy the sights, sounds, and smells without the stress of getting lost!',
    itinerary: [
      { time: '09:00', activity: 'Meet your expert local guide at the iconic Koutoubia Mosque.' },
      { time: '10:30', activity: 'Visit the stunning 19th-century Bahia Palace.' },
      { time: '12:00', activity: 'Walk through the historical Jewish Quarter (Mellah).' },
      { time: '14:30', activity: 'Immersive Guided Souk Walk. Learn to bargain effectively.' },
      { time: '16:30', activity: 'Emerge into the legendary Jemaa el-Fnaa square as the evening vibe starts.' }
    ],
    highlights: ['Skip-the-line at Bahia Palace', 'Expert Navigation of Souks', 'Avoid Tourist Traps', 'Jemaa el-Fnaa Evening Vibe'],
    included: ['Certified Local Guide', 'Entrance fees to Bahia Palace', 'Traditional Mint Tea & Pastry Tasting'],
    excluded: ['Lunch', 'Personal shopping', 'Tips']
  },
  {
    id: 3,
    slug: 'atlas-mountains-trek',
    title: 'Atlas Mountains Trek',
    category: 'mountains',
    activity: 'adventure',
    image: '/images/maroc_explore-img/marrakech/marrakech-colors-culter.avif',
    gallery: [
      '/images/maroc_explore-img/marrakech/marrakech-tours-trip-archetecte.avif',
      '/images/maroc_explore-img/marrakech/marrakech-tours.avif'
    ],
    price: 149,
    duration: '2 Days',
    durationDays: 2,
    rating: 4.9,
    reviews: 89,
    location: 'Marrakech',
    departurePoint: 'Hotel Pickup in Marrakech',
    returnPoint: 'Hotel in Marrakech',
    availability: 'Private - Daily',
    departureTime: '08:30 AM',
    description: 'Trek through breathtaking mountain landscapes, visit Berber villages, and enjoy panoramic views.',
    fullDescription: 'Escape the heat of the city and head into the cool, crisp air of the High Atlas Mountains. This 2-day trek takes you through terraced valleys, along rushing rivers, and into remote Berber villages where tradition still reigns supreme.',
    itinerary: [
      { day: 1, title: 'Marrakech to Imlil & Tizi Mzik Pass', content: 'Drive to the stunning Imlil valley. Begin your trek climbing to the Tizi Mzik pass. Descend into Azzaden valley to share a dinner with a local family.' },
      { day: 2, title: 'Azzaden Valley to Imlil', content: 'Trek down the beautiful Azzaden Valley, passing ancient Berber villages. Stop for a picnic lunch near a mountain stream before returning to Imlil.' }
    ],
    highlights: ['Fresh Mountain Air', 'Authentic Berber Hospitality', 'Panoramic Photography'],
    included: ['Transport from Marrakech', 'Professional Mountain Guide', 'Mule for luggage', '1 Night in Authentic Berber Gite', 'All Meals'],
    excluded: ['Travel Insurance', 'Personal hiking gear', 'Drinks', 'Tips']
  },
  {
    id: 4,
    slug: 'traditional-henna-art-session',
    title: 'Authentic Henna Art Session',
    category: 'city',
    activity: 'cultural',
    image: '/images/maroc_explore-img/marrakech/marrakech-tours-trips-jamaaelfna.avif',
    gallery: [
      '/images/maroc_explore-img/marrakech/marrakech-colors-culter.avif',
      '/images/maroc_explore-img/marrakech/marrakech-tours-trip-archetecte.avif'
    ],
    price: 45,
    duration: '3 Hours',
    durationDays: 0.5,
    rating: 5.0,
    reviews: 42,
    location: 'Marrakech',
    departurePoint: 'Argana Cafe, Jemaa el-Fnaa',
    returnPoint: 'Argana Cafe',
    availability: 'Daily: 10AM or 4PM',
    departureTime: 'Flexible',
    description: 'Learn the ancient art of Henna (tatoige) with a local Nakacha in a traditional riad.',
    fullDescription: 'Henna (tatoige) is more than just body art; it\'s a symbolic tradition used to celebrate special occasions and protect against the "evil eye." You will deeply benefit from this meaningful cultural exchange in a private, relaxing riad setting.',
    itinerary: [
      { time: '10:00 AM', activity: 'Welcome arrival at a quiet luxurios Riad setting hidden from the medina chaos.' },
      { time: '10:30 AM', activity: 'Educational Workshop: The Nakacha plains the deep-rooted history, and patterns.' },
      { time: '11:00 AM', activity: 'Application Session: Receive a professional, freehand design.' },
      { time: '12:30 PM', activity: 'Drying Time & Tasting: Enjoy tasting Traditional Moroccan Sweets.' }
    ],
    highlights: ['Meaningful Cultural Exchange', 'Organic, Safe Henna', 'Traditional Moroccan Pastries'],
    included: ['All Organic Henna Materials', 'Private Riad Access', 'Mint Tea and Premium Pastries', 'Professional Nakacha (Artist)'],
    excluded: ['Transport', 'Full Meals', 'Tips']
  },
  {
    id: 5,
    slug: 'moroccan-cooking-msemen-briwate',
    title: 'Cooking Class',
    category: 'city',
    activity: 'cultural',
    image: '/images/maroc_explore-img/fes/maroc-explore-fes-dar-debagh.avif',
    gallery: [
      '/images/maroc_explore-img/fes/MAROC-EXPLORE-fes.avif',
      '/images/maroc_explore-img/fes/maroc-explore-fes-ceramique-plaque.avif',
      '/images/maroc_explore-img/fes/maroc-explore-fes-architecte-mosque.avif'
    ],
    price: 65,
    duration: '4 Hours',
    durationDays: 0.5,
    rating: 4.9,
    reviews: 56,
    location: 'Fes',
    departurePoint: 'Place Batha',
    returnPoint: 'Place Batha',
    availability: 'Daily at 10:00 AM',
    departureTime: '10:00 AM',
    description: 'Master the art of folding Msemen and filling Briwate in a genuine family kitchen.',
    fullDescription: 'Join a welcoming Moroccan family in their home for an immersive, hands-on cooking experience. You will discover the secrets of making "Msemen" (layer crepes) and "Briouats" (stuffed pastries).',
    itinerary: [
      { time: '10:00 AM', activity: 'Arrival at the Host Family Kitchen in Fes medina.' },
      { time: '10:30 AM', activity: 'Masterclass Part 1: Secret Dough Preparation for Msemen.' },
      { time: '11:30 AM', activity: 'Masterclass Part 2: Flavor Balancing and Stuffing Briwates.' },
      { time: '01:00 PM', activity: 'Shared Degustation: Sit down to enjoy the delicious fruits of your labor.' }
    ],
    highlights: ['Take Home Secret Recipes', 'Genuine Family Interaction', 'Delicious Lunch Included'],
    included: ['All Fresh Ingredients', 'Use of Cooking Equipment', 'A Full Meal of your creations'],
    excluded: ['Alcoholic Beverages', 'Transport', 'Personal Expenses']
  },
  {
    id: 6,
    slug: 'moroccan-celebration-sbou-wedding',
    title: 'Moroccan Celebration',
    category: 'city',
    activity: 'cultural',
    image: '/images/maroc_explore-img/casablanca/CASABLANCA-MOSQUE-HASSAN-2-view-from-ather-sied.avif',
    gallery: [
      '/images/maroc_explore-img/amazigh/la-tent-berber-maroc-travel.avif',
      '/images/maroc_explore-img/casablanca/casablanca-maroc-zarbia-amazigh-maroc.avif',
      '/images/maroc_explore-img/casablanca/casablanca-architect-maison-with-zalij-marocain-et-nafora.avif',
      '/images/maroc_explore-img/casablanca/maroc-calture-casablance-homme-marocain.avif'
    ],
    price: 150,
    duration: 'Evening',
    durationDays: 1,
    rating: 5.0,
    reviews: 28,
    location: 'Casablanca',
    departurePoint: 'Your Hotel in Casablanca',
    returnPoint: 'Your Hotel in Casablanca',
    availability: 'Seasonal / On request',
    departureTime: '07:00 PM',
    description: 'Be an honored guest at a traditional Moroccan wedding or Sbou (naming ceremony).',
    fullDescription: 'Moroccan celebrations are legendary for their extravagance, music, and food. You will uniquely benefit from rare, exclusive access to a genuine Moroccan celebration alongside a local family. This is not a staged show for tourists, but a real life event!',
    itinerary: [
      { time: '07:00 PM', activity: 'Pick-up and transfer to a specialized boutique for Costume Fitting (Kaftans or Djellabas).' },
      { time: '08:00 PM', activity: 'Arrival at the Venue & Grand Welcome Ceremony with milk and stuffed dates.' },
      { time: '09:30 PM', activity: 'Immerse deeply in the festivities: Live Music, Dancing, and Cultural Rites.' },
      { time: '11:00 PM', activity: 'Grand Feast: Sit down to enjoy a lavish, multi-course traditional Moroccan banquet.' }
    ],
    highlights: ['Exclusive Inside Access', 'Real Authentic Event', 'Traditional Attire Provided', 'Multi-course Festive Feast'],
    included: ['Premium Traditional Outfit Rental', 'Massive Feast/Dinner', 'Local Guide/Cultural Interpreter', 'Private Transport'],
    excluded: ['Gifts for the Host Family (Optional)', 'Alcoholic Drinks', 'Tips']
  },
  {
    id: 7,
    slug: 'chefchaouen-blue-pearl-walk',
    title: 'Chefchaouen Blue Pearl Walk',
    category: 'city',
    activity: 'cultural',
    image: '/images/maroc_explore-img/chefchaouen/BLUE_city_trips_travel-morocco.avif',
    gallery: [
      '/images/maroc_explore-img/chefchaouen/bab-chefchaouen-architecte-city-tours-and-explore.avif',
      '/images/maroc_explore-img/chefchaouen/chafchaouen-poaple-in-sook-trip-in-bleu-city.avif',
      '/images/maroc_explore-img/chefchaouen/chefchaouen-culter-blue-city-tours.avif'
    ],
    price: 75,
    duration: '1 Day',
    durationDays: 1,
    rating: 4.9,
    reviews: 310,
    location: 'Chefchaouen',
    departurePoint: 'Main Square Outa el Hammam',
    returnPoint: 'Main Square Outa el Hammam',
    availability: 'Daily',
    departureTime: '10:00 AM',
    description: 'Wander through the picturesque blue-washed streets and discover the artistic spirit of Chefchaouen.',
    fullDescription: 'Immerse yourself in the tranquil atmosphere of Chefchaouen, the famous Blue Pearl of Morocco. Our local guide will lead you through winding alleys adorned with colorful pots, artisanal shops, and unique Andalusian-style architecture.',
    itinerary: [
      { time: '10:00', activity: 'Meet your guide at the Kasbah entrance in Outa el Hammam square.' },
      { time: '11:00', activity: 'Explore the vivid blue streets and hidden architectural marvels perfect for photography.' },
      { time: '13:00', activity: 'Stop for a locally sourced goat cheese and olive tasting.' },
      { time: '15:00', activity: 'Visit the Spanish Mosque for panoramic views over the entire valley.' }
    ],
    highlights: ['Photographic Blue Alleys', 'Local Artisan Workshops', 'Panoramic Views', 'Goat Cheese Tasting'],
    included: ['Local Expert Guide', 'Cheese & Olive Tasting', 'Entrance to the Kasbah'],
    excluded: ['Lunch', 'Tips', 'Souvenirs']
  },
  {
    id: 8,
    slug: 'essaouira-coastal-retreat',
    title: 'Essaouira Coastal Retreat',
    category: 'beach',
    activity: 'relax',
    image: '/images/maroc_explore-img/essaouira/MAROC-explore-essaouireEssaouira-.avif',
    gallery: [
      '/images/maroc_explore-img/essaouira/maroc-explore-Essaouira-tour.avif',
      '/images/maroc_explore-img/essaouira/maroc-explore-essaouira-view.avif',
      '/images/maroc_explore-img/essaouira/maroc-explore-saouire-mogador-view.avif'
    ],
    price: 95,
    duration: '1 Day',
    durationDays: 1,
    rating: 4.8,
    reviews: 198,
    location: 'Essaouira',
    departurePoint: 'Essaouira Ramparts',
    returnPoint: 'Essaouira Ramparts',
    availability: 'Daily',
    departureTime: '10:00 AM',
    description: 'Enjoy the refreshing breeze, historical ramparts, and vibrant arts scene of coastal Essaouira.',
    fullDescription: 'Escape to the laid-back coastal city of Essaouira, known for its strong winds, ancient ramparts, and thriving arts community. Stroll along the historical Skala de la Ville walls where scenes of Game of Thrones were filmed, and indulge in some of the freshest seafood in Morocco.',
    itinerary: [
      { time: '10:00', activity: 'Meet near the port and observe the bustling morning fish market and iconic blue boats.' },
      { time: '11:30', activity: 'Walk along the dramatic ocean ramparts (Skala) and hear tales of historic pirates.' },
      { time: '13:00', activity: 'Enjoy a freshly grilled seafood lunch right by the ocean.' },
      { time: '15:00', activity: 'Wander the artsy medina and discover local Thuya wood carvers.' }
    ],
    highlights: ['Skala Ramparts', 'Fresh Fish Market', 'Thuya Wood Carvers', 'Relaxed Coastal Vibe'],
    included: ['Guided Tour', 'Seafood Lunch', 'Port Entry'],
    excluded: ['Transport to Essaouira', 'Drinks', 'Tips']
  },
  {
    id: 9,
    slug: 'fes-el-bali-time-travel',
    title: 'Fes El Bali Time Travel',
    category: 'city',
    activity: 'cultural',
    image: '/images/maroc_explore-img/fes/maroc-explore-fes-architecte-mosque.avif',
    gallery: [
      '/images/maroc_explore-img/fes/maroc-explore-fes-ceramique-plaque.avif',
      '/images/maroc_explore-img/fes/MAROC-EXPLORE-fes.avif',
      '/images/maroc_explore-img/fes/maroc-explore-fes-dar-debagh.avif'
    ],
    price: 60,
    duration: '1 Day',
    durationDays: 1,
    rating: 4.9,
    reviews: 412,
    location: 'Fes',
    departurePoint: 'Blue Gate (Bab Boujloud)',
    returnPoint: 'Blue Gate (Bab Boujloud)',
    availability: 'Daily',
    departureTime: '09:00 AM',
    description: 'Step back into the medieval era in the world’s largest car-free urban zone.',
    fullDescription: 'A guided journey through Fes El Bali is truly a form of time travel. The intricate 9,000 alleys can be overwhelming, but our expert historian guide will navigate you through ancient madrasas, vibrant souks, and the legendary Chouara Tannery safely and insightfully.',
    itinerary: [
      { time: '09:00', activity: 'Begin at the majestic Blue Gate, entering the medieval medina.' },
      { time: '10:30', activity: 'Visit the exquisitely detailed Bou Inania Madrasa and Al-Qarawiyyin University.' },
      { time: '12:30', activity: 'Experience the pungent but spectacular Chouara Tannery.' },
      { time: '14:30', activity: 'Explore the Nejjarine Museum of Wooden Arts and localized artisan guilds.' }
    ],
    highlights: ['Chouara Tannery Views', 'Al-Qarawiyyin Mosque', 'Expert Navigation', 'Medieval Architecture'],
    included: ['Expert Historian Guide', 'Entrance Fees to Madrasas', 'Mint Tea at Tannery Overlook'],
    excluded: ['Lunch', 'Shopping', 'Tips']
  },
  {
    id: 10,
    slug: 'agadir-surf-sun-experience',
    title: 'Agadir Surf & Sun Experience',
    category: 'beach',
    activity: 'sports',
    image: '/images/maroc_explore-img/agadir/agadir-maroc-cocher-du-solie.avif',
    gallery: [
      '/images/maroc_explore-img/agadir/agadir-culter-camel-view.avif',
      '/images/maroc_explore-img/agadir/city-tours-in-gadir-in-tradutional-marche.avif',
      '/images/maroc_explore-img/agadir/berber-goat-view-beber-culter.avif'
    ],
    price: 110,
    duration: '1 Day',
    durationDays: 1,
    rating: 4.7,
    reviews: 145,
    location: 'Agadir',
    departurePoint: 'Agadir Marina',
    returnPoint: 'Agadir Marina',
    availability: 'Daily',
    departureTime: '09:00 AM',
    description: 'Catch the optimal waves of the Atlantic coastline and bask in the endless Moroccan sun.',
    fullDescription: 'Whether you are a beginner looking to catch your first wave or an experienced surfer chasing the perfect swell, Agadir’s coastline offers something for everyone. Dive into the Moroccan surf culture with top-notch local instructors.',
    itinerary: [
      { time: '09:00', activity: 'Morning pickup and transfer to the premier surf spot of Taghazout.' },
      { time: '10:00', activity: 'Safety briefing and a 2-hour guided surf lesson with professional instructors.' },
      { time: '12:30', activity: 'Beachside lunch featuring fresh local produce and relaxing by the ocean.' },
      { time: '14:00', activity: 'Free surf session or optional camel ride near the beach before returning.' }
    ],
    highlights: ['Professional Surf Coaching', 'Taghazout Beach', 'Beachside Relaxing', 'Surfing Equipment Provided'],
    included: ['Surfboard & Wetsuit Rental', '2-Hour Lesson', 'Beach Lunch', 'Transport from Marina'],
    excluded: ['Extra drinks', 'Tips']
  },
  {
    id: 11,
    slug: 'ouarzazate-cinematic-history',
    title: 'Ouarzazate Cinematic History',
    category: 'desert',
    activity: 'cultural',
    image: '/images/maroc_explore-img/Ouarzazate/maroc-explore-ouarzazate.avif',
    gallery: [
      '/images/maroc_explore-img/Ouarzazate/maroc-explore-ouarzazate.avif',
      '/images/maroc_explore-img/Ouarzazate/maroc-explore-ouarzazate-kasabat-aitbenhadou.avif',
      '/images/maroc_explore-img/Ouarzazate/maroc-explore-ouarzazate-view-atlas.avif'
    ],
    price: 85,
    duration: 'Half Day',
    durationDays: 0.5,
    rating: 4.6,
    reviews: 87,
    location: 'Ouarzazate',
    departurePoint: 'Atlas Studios Entrance',
    returnPoint: 'City Center',
    availability: 'Daily',
    departureTime: '10:00 AM',
    description: 'Discover the Hollywood of Africa by visiting grand film studios and ancient kasbahs.',
    fullDescription: 'Ouarzazate has been the spectacular backdrop for numerous Hollywood blockbusters. This tour takes you behind the scenes of famous sets and through the historically rich Kasbah Taourirt, blending real history with cinematic grandiosity.',
    itinerary: [
      { time: '10:00', activity: 'Tour the colossal Atlas Film Studios, seeing sets from Gladiator, Cleopatra, and more.' },
      { time: '11:30', activity: 'Explore the majestic 19th-century Kasbah Taourirt, with its intricate clay architecture.' },
      { time: '13:00', activity: 'Enjoy mint tea with panoramic views over the surrounding barren plateau and High Atlas.' }
    ],
    highlights: ['Atlas Film Studios', 'Kasbah Taourirt', 'Cinematic Backdrops', 'Panoramic Atlas Views'],
    included: ['Studio & Kasbah Entrance Fees', 'Expert Studio Guide', 'Mint Tea'],
    excluded: ['Transport', 'Lunch']
  },
  {
    id: 12,
    slug: 'meknes-imperial-heritage',
    title: 'Meknes Imperial Heritage',
    category: 'city',
    activity: 'cultural',
    image: '/images/maroc_explore-img/meknes/maroc-explore-meknes-view.avif',
    gallery: [
      '/images/maroc_explore-img/meknes/maroc-explore-architecte-home.avif',
      '/images/maroc_explore-img/meknes/maroc-explore-meknes-city-tours.avif',
      '/images/maroc_explore-img/meknes/maroc-explore-meknes-city-trips-advuntre.avif'
    ],
    price: 55,
    duration: 'Half Day',
    durationDays: 0.5,
    rating: 4.8,
    reviews: 64,
    location: 'Meknes',
    departurePoint: 'Bab Mansour',
    returnPoint: 'Volubilis Area / City Center',
    availability: 'Daily',
    departureTime: '09:00 AM',
    description: 'Explore the monumental gates, granaries, and the peaceful ambiance of the Ismaili capital.',
    fullDescription: 'Often overshadowed by Fes, Meknes offers a calmer but equally impressive Imperial city experience. Marvel at the grand Bab Mansour gate, explore the massive Royal Granaries, and appreciate the 17th-century ambition of Sultan Moulay Ismail.',
    itinerary: [
      { time: '09:00', activity: 'Start at the magnificent Bab Mansour, considered one of North Africa’s finest gates.' },
      { time: '10:00', activity: 'Explore the Mausoleum of Moulay Ismail and the vast Heri es-Souani granaries.' },
      { time: '11:30', activity: 'Walk through the old medina and the lively Lahdim Square.' },
      { time: '13:00', activity: 'Optional transfer to the nearby Roman ruins of Volubilis.' }
    ],
    highlights: ['Grand Bab Mansour Gate', 'Royal Granaries', 'Quiet Medina Vibe', 'Moulay Ismail Mausoleum'],
    included: ['Entrance Fees', 'Local Guide'],
    excluded: ['Transport to Volubilis', 'Lunch']
  },
  {
    id: 13,
    slug: 'rabat-capital-explorer',
    title: 'Rabat Capital Explorer',
    category: 'city',
    activity: 'cultural',
    image: '/images/maroc_explore-img/rabat/maroc-explore-rabat.avif',
    gallery: [
      '/images/maroc_explore-img/rabat/maroc-explore-rabat-archetict-maroc-designe.avif',
      '/images/maroc_explore-img/rabat/maroc-explore-rabat-heritage-cultural.avif',
      '/images/maroc_explore-img/rabat/maroc-explore-rabat-sazmaaat-hassan.avif'
    ],
    price: 70,
    duration: '1 Day',
    durationDays: 1,
    rating: 4.9,
    reviews: 112,
    location: 'Rabat',
    departurePoint: 'Hassan Tower',
    returnPoint: 'Kasbah of the Udayas',
    availability: 'Daily',
    departureTime: '09:30 AM',
    description: 'Discover the elegant blend of Islamic tradition and modernism in the capital city of Rabat.',
    fullDescription: 'Rabat is a UNESCO World Heritage site known for its clean avenues and rich heritage. Visit the unfinished Hassan Tower, the regal Mausoleum of Mohammed V, and lose yourself in the Andalusian charm of the Kasbah of the Udayas overlooking the Atlantic.',
    itinerary: [
      { time: '09:30', activity: 'Visit the iconic Hassan Tower and the exquisitely decorated Mausoleum of Mohammed V.' },
      { time: '11:00', activity: 'Explore the ancient Roman and Merinid ruins at the Chellah necropolis.' },
      { time: '13:00', activity: 'Stroll through the blue-and-white alleys of the Kasbah of the Udayas.' },
      { time: '14:30', activity: 'Relax with mint tea overlooking the Bou Regreg river and the ocean.' }
    ],
    highlights: ['Hassan Tower', 'Chellah Necropolis', 'Kasbah of the Udayas', 'Ocean Views'],
    included: ['Licensed Guide', 'Entrance Fees to Chellah'],
    excluded: ['Transport around city', 'Meals']
  },
  {
    id: 14,
    slug: 'tanger-gateway-to-africa',
    title: 'Tanger Gateway to Africa',
    category: 'city',
    activity: 'cultural',
    image: '/images/maroc_explore-img/tanger/maroc-explore-tanger.avif',
    gallery: [
      '/images/maroc_explore-img/tanger/maroc-explore-tanger-hirakel-gort.avif',
      '/images/maroc_explore-img/tanger/maroc-explore-tanger-home-architect.avif',
      '/images/maroc_explore-img/tanger/maroc-explore-view-architects-playa.avif'
    ],
    price: 80,
    duration: '1 Day',
    durationDays: 1,
    rating: 4.7,
    reviews: 134,
    location: 'Tanger',
    departurePoint: 'Grand Socco',
    returnPoint: 'Hercules Caves',
    availability: 'Daily',
    departureTime: '10:00 AM',
    description: 'Experience the unique international vibe of Tanger, where the Mediterranean meets the Atlantic.',
    fullDescription: 'Tanger has long been a haven for artists, writers, and spies. Discover its unique cosmopolitan history by exploring the Kasbah museum, enjoying panoramic views of Spain, and visiting the mythical Caves of Hercules.',
    itinerary: [
      { time: '10:00', activity: 'Meet at Grand Socco and walk through the historic Kasbah district.' },
      { time: '12:00', activity: 'Visit the Kasbah Museum in the former Sultan’s palace.' },
      { time: '14:00', activity: 'Drive up to Cap Spartel, where the Mediterranean and Atlantic oceans meet.' },
      { time: '15:30', activity: 'Explore the magnificent Cave of Hercules with its Africa-shaped opening.' }
    ],
    highlights: ['Cap Spartel Ocean Views', 'Cave of Hercules', 'Sultan’s Palace Museum', 'Cosmopolitan Vibe'],
    included: ['Transport to Cap Spartel', 'Guide', 'Museum & Cave Entries'],
    excluded: ['Lunch', 'Gratuities']
  },
  {
    id: 15,
    slug: 'amazigh-cultural-immersion',
    title: 'Amazigh Cultural Immersion',
    category: 'mountains',
    activity: 'cultural',
    image: '/images/maroc_explore-img/amazigh/maroc-explore-tamazight-travel-berber.avif',
    gallery: [
      '/images/maroc_explore-img/agadir/agadir-culter-camel-view.avif',
      '/images/maroc_explore-img/agadir/berber-goat-view-beber-culter.avif',
      '/images/maroc_explore-img/amazigh/maroc-explore-tamazight-travel-berber.avif'
    ],
    price: 50,
    duration: 'Half Day',
    durationDays: 0.5,
    rating: 5.0,
    reviews: 72,
    location: 'Agadir',
    departurePoint: 'Agadir City Center',
    returnPoint: 'Agadir City Center',
    availability: 'Daily',
    departureTime: '08:30 AM',
    description: 'Delve into the rich indigenous heritage of the Amazigh (Berber) people in the Souss-Massa region.',
    fullDescription: 'Step away from the tourist resorts and engage with local Amazigh communities. Learn about traditional weaving, Argan oil extraction, and ancient agricultural practices in a fulfilling, respectful cultural exchange.',
    itinerary: [
      { time: '08:30', activity: 'Drive into the rural Anti-Atlas foothills surrounding Agadir.' },
      { time: '09:30', activity: 'Visit a Women’s Argan Oil Cooperative and learn the tedious hand-crushing process.' },
      { time: '11:00', activity: 'Walk through an ancient Amazigh village and see traditional mud-brick construction.' },
      { time: '12:30', activity: 'Share an authentic homemade Tagine and freshly baked bread with a local family.' }
    ],
    highlights: ['Argan Oil Cooperative', 'Authentic Amazigh Village', 'Homemade Tagine', 'Cultural Exchange'],
    included: ['Transport', 'Lunch with a Local Family', 'Guide', 'Donation to Cooperative'],
    excluded: ['Personal purchases of Argan products']
  }
];

export const getFilteredTours = (filters) => {
  const { destination, duration, activity, category, q } = filters;

  return toursActivitiesLib.filter(tour => {
    const matchesSearch = !q ||
      tour.title.toLowerCase().includes(q.toLowerCase()) ||
      tour.location.toLowerCase().includes(q.toLowerCase()) ||
      tour.description.toLowerCase().includes(q.toLowerCase());

    const matchesCategory = !category || category === 'all' || tour.category === category;
    const matchesDuration = !duration || tour.durationDays === parseInt(duration);
    const matchesDestination = !destination || tour.location.toLowerCase() === destination.toLowerCase();
    const matchesActivity = !activity || tour.activity === activity;

    return matchesSearch && matchesCategory && matchesDuration && matchesDestination && matchesActivity;
  });
};