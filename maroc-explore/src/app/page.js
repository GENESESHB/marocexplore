'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import styles from './styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [duration, setDuration] = useState('');
  const [activityType, setActivityType] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [isDurationOpen, setIsDurationOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [visibleImages, setVisibleImages] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const destRef = useRef(null);
  const durationRef = useRef(null);
  const activityRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const testimonialsRef = useRef(null);

  const destinations = [
    { id: 'marrakech', name: 'Marrakech' },
    { id: 'fes', name: 'Fes' },
    { id: 'tanger', name: 'Tanger' },
    { id: 'rabat', name: 'Rabat' },
    { id: 'agadir', name: 'Agadir' },
    { id: 'casablanca', name: 'Casablanca' },
    { id: 'chefchaouen', name: 'Chefchaouen' },
    { id: 'essaouira', name: 'Essaouira' },
    { id: 'merzouga', name: 'Merzouga' },
    { id: 'ouarzazate', name: 'Ouarzazate' }
  ];

  const durations = [
    { value: '', label: 'Any Duration', days: 'Flexible' },
    { value: '1', label: '1 Day', days: 'Day Trip' },
    { value: '2', label: '2 Days', days: 'Weekend' },
    { value: '3', label: '3 Days', days: 'Short Break' },
    { value: '4', label: '4 Days', days: 'Extended' },
    { value: '5', label: '5 Days', days: 'Adventure' },
    { value: '7', label: '1 Week', days: 'Full Week' },
    { value: '10', label: '10 Days', days: 'Deep Dive' },
    { value: '14', label: '2 Weeks', days: 'Complete Tour' }
  ];

  const activityTypes = [
    { id: '', label: 'All Activities' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'relaxation', label: 'Relaxation' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'photography', label: 'Photography' },
    { id: 'camping', label: 'Camping' },
    { id: 'luxury', label: 'Luxury' }
  ];

  const categories = [
    { id: 'all', label: 'All Tours' },
    { id: 'desert', label: 'Desert' },
    { id: 'city', label: 'City' },
    { id: 'mountain', label: 'Mountain' },
    { id: 'coastal', label: 'Coastal' }
  ];

  const whyChooseItems = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      text: "Local Experts"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      text: "100% Secure"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      text: "Save Time"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      text: "Best Stays"
    }
  ];

  const galleryImages = [
    {
      src: "/images/maroc_explore-img/merzouga/maroc-explore-marzouga-desert-trips.avif",
      alt: "Sahara Desert",
      span: "large"
    },
    {
      src: "/images/maroc_explore-img/marrakech/marrakech-tours.avif",
      alt: "Marrakech Medina",
      span: "tall"
    },
    {
      src: "/images/maroc_explore-img/marrakech/marrakech-colors-culter.avif",
      alt: "Atlas Mountains",
      span: "normal"
    },
    {
      src: "/images/maroc_explore-img/chefchaouen/chefchaouen-culter-blue-city-tours.avif",
      alt: "Blue City Chefchaouen",
      span: "normal"
    },
    {
      src: "/images/maroc_explore-img/rabat/maroc-explore-rabat-archetict-maroc-designe.avif",
      alt: "Moroccan Architecture",
      span: "wide"
    }
  ];

  // Destination data for the new alternating grid section
  const destinationContent = [
    {
      id: 'marrakech',
      name: 'Marrakech',
      image: '/images/maroc_explore-img/marrakech/marrakech-tours-trip-archetecte.avif',
      tagline: 'The Red City',
      history: `Founded in 1070 by the Almoravid dynasty, Marrakech served as the capital of multiple empires. The iconic red sandstone walls built in the 12th century give it the nickname "The Red City." The medina, a UNESCO World Heritage site, contains the famous Jemaa el-Fnaa square, which has been the city's cultural heart for centuries.`,
      amazigh: `Marrakech sits at the crossroads of Amazigh (Berber) and Arab cultures. The surrounding High Atlas Mountains are home to numerous Amazigh communities who have preserved their distinct language (Tamazight), traditions, and craftsmanship. The city's famous souks feature Amazigh carpets, jewelry, and leather goods, each telling stories of tribal identity and mountain life.`,
      activities: ['Explore the UNESCO-listed medina', 'Visit Majorelle Garden', 'Tour Bahia Palace', 'Experience traditional hammam', 'Atlas Mountains day trips'],
      activityLinks: ['cultural', 'photography', 'cultural', 'relaxation', 'adventure']
    },
    {
      id: 'fes',
      name: 'Fes',
      image: '/images/maroc_explore-img/fes/maroc-explore-fes-dar-debagh.avif',
      tagline: 'The Spiritual Heart',
      history: `Founded in 789 AD by Idris I, Fes is Morocco's oldest imperial city. It is home to Al-Qarawiyyin University, founded in 859 AD, recognized by UNESCO as the world's oldest existing educational institution. Fes el-Bali is the world's largest car-free urban area and a UNESCO World Heritage site with over 9,000 narrow alleyways.`,
      amazigh: `Fes has historically been a center of Amazigh culture and learning. The city's founding by the Idrisid dynasty established deep connections with Amazigh tribes of the Middle Atlas. The traditional crafts of Fes—zellige tilework, metalwork, and wood carving—incorporate Amazigh geometric patterns and symbolism.`,
      activities: ['Walk the ancient medina', 'Visit Al-Qarawiyyin University', 'See Chouara Tannery', 'Learn zellige tile-making', 'Explore the Jewish Quarter'],
      activityLinks: ['cultural', 'cultural', 'cultural', 'cultural', 'cultural']
    },
    {
      id: 'tanger',
      name: 'Tanger',
      image: '/images/maroc_explore-img/tanger/maroc-explore-tanger.avif',
      tagline: 'Gateway Between Continents',
      history: `Tangier's strategic location at the entrance to the Mediterranean has made it one of the most coveted cities in history. Founded by the Phoenicians in the 10th century BC, it has been ruled by Romans, Vandals, Byzantines, Arabs, Portuguese, Spanish, and British before becoming an international zone (1923-1956).`,
      amazigh: `The Tangier region is deeply rooted in Amazigh heritage, particularly the Ghomara and Sanhaja tribes. The Rif Mountains surrounding the city maintain strong Amazigh traditions, including the celebration of Yennayer (Amazigh New Year). The nearby village of Jajouka preserves ancient Sufi-Amazigh musical traditions.`,
      activities: ['Visit Kasbah Museum', 'Explore Caves of Hercules', 'Walk Petit Socco square', 'Relax at Café Hafa', 'Day trip to Chefchaouen'],
      activityLinks: ['cultural', 'adventure', 'cultural', 'relaxation', 'adventure']
    },
    {
      id: 'rabat',
      name: 'Rabat',
      image: '/images/maroc_explore-img/rabat/maroc-explore-rabat.avif',
      tagline: 'The Capital of Light',
      history: `Founded in the 12th century by the Almohad dynasty as a military fortress, Rabat became Morocco's capital in 1912. The city is a UNESCO World Heritage site, recognized for its unique blend of historic and modern urban planning. Key sites include the Hassan Tower and the Kasbah of the Udayas.`,
      amazigh: `Rabat serves as an important center for Amazigh cultural preservation. The city hosts the Royal Institute of Amazigh Culture (IRCAM), established in 2001 to promote Tamazight language and heritage. The Andalusian influence in Rabat's medina reflects the historical migration of Amazigh populations from Spain.`,
      activities: ['Tour Hassan Tower', 'Explore Kasbah of the Udayas', 'Visit Chellah necropolis', 'Walk the calm medina', 'Visit Mohammed VI Museum'],
      activityLinks: ['cultural', 'photography', 'cultural', 'cultural', 'cultural']
    },
    {
      id: 'agadir',
      name: 'Agadir',
      image: '/images/maroc_explore-img/agadir/agadir-maroc-cocher-du-solie.avif',
      tagline: 'The Pearl of the South',
      history: `Agadir was originally a Portuguese fortress built in 1500, but the modern city was reconstructed after a devastating earthquake in 1960. Today, it stands as Morocco's premier beach resort with modern infrastructure and year-round sunshine. The remnants of the old kasbah sit on a hilltop offering panoramic views.`,
      amazigh: `Agadir is the cultural capital of the Souss-Massa region, home to the Shilha (Tashelhit)-speaking Amazigh people. The city hosts the annual Timitar Festival, celebrating Amazigh music. The Amazigh Heritage Museum showcases 2,000+ pieces of traditional jewelry, costumes, and tools.`,
      activities: ['Relax on 10km beach', 'Visit Amazigh Heritage Museum', 'Explore Kasbah Oufella', 'Day trip to Paradise Valley', 'Experience Timitar Festival'],
      activityLinks: ['relaxation', 'cultural', 'cultural', 'adventure', 'cultural']
    },
    {
      id: 'casablanca',
      name: 'Casablanca',
      image: '/images/maroc_explore-img/casablanca/CASABLANCA-MOSQUE-HASSAN-2-view-from-ather-sied.avif',
      tagline: 'The White House',
      history: `Casablanca transformed from a small Berber settlement into Morocco's economic powerhouse during the French Protectorate (1912-1956). The city boasts the world's third-largest mosque, Hassan II Mosque, completed in 1993, featuring the world's tallest minaret (210m) and a retractable roof.`,
      amazigh: `While Casablanca is a modern metropolis, it serves as a hub for Amazigh migration from the Atlas and Rif regions. The city hosts numerous cultural centers promoting Tamazight language and arts. The Royal Theater often features Amazigh theater productions and music concerts.`,
      activities: ['Visit Hassan II Mosque', 'Explore Art Deco architecture', 'Walk through Habous Quarter', 'Enjoy the Corniche', 'Experience vibrant nightlife'],
      activityLinks: ['cultural', 'photography', 'cultural', 'relaxation', 'luxury']
    },
    {
      id: 'chefchaouen',
      name: 'Chefchaouen',
      image: '/images/maroc_explore-img/chefchaouen/BLUE_city_trips_travel-morocco.avif',
      tagline: 'The Blue Pearl',
      history: `Founded in 1471 by Moulay Ali Ben Rachid as a fortress to defend against Portuguese invasions, Chefchaouen became a refuge for Muslim and Jewish families expelled from Andalusia. The famous blue-washed buildings began in the 1930s, possibly introduced by Jewish refugees, transforming the city into one of the world's most photographed destinations.`,
      amazigh: `Chefchaouen is deeply rooted in the Jebala region's Amazigh culture. The city maintains strong traditions of weaving, particularly the distinctive striped blankets (handira) and wool garments. The surrounding mountains are home to cannabis cultivation (kif), a traditional agricultural practice.`,
      activities: ['Wander blue-washed medina', 'Hike to Spanish Mosque', 'Shop for woven blankets', 'Visit Kasbah Museum', 'Trek in Talassemtane Park'],
      activityLinks: ['photography', 'adventure', 'cultural', 'cultural', 'adventure']
    },
    {
      id: 'essaouira',
      name: 'Essaouira',
      image: '/images/maroc_explore-img/essaouira/maroc-explore-essaouira-view.avif',
      tagline: 'The Wind City',
      history: `Originally known as Mogador, Essaouira was a Phoenician trading post as early as the 7th century BC. The modern fortified city was built in the 18th century by Sultan Sidi Mohammed Ben Abdallah, designed by European architects. The city became an important Jewish trading center before declining in the 20th century.`,
      amazigh: `Essaouira is the spiritual home of Gnawa music, a genre born from the fusion of sub-Saharan African, Amazigh, and Arab influences. The city hosts the annual Gnawa and World Music Festival. The surrounding countryside maintains strong Amazigh (Chiadma tribe) traditions, particularly in argan oil production.`,
      activities: ['Walk the 18th-century ramparts', 'Attend Gnawa Music Festival', 'Relax on windy beach', 'Visit fishing port', 'Explore Argan cooperatives'],
      activityLinks: ['cultural', 'cultural', 'relaxation', 'cultural', 'cultural']
    },
    {
      id: 'merzouga',
      name: 'Merzouga',
      image: '/images/maroc_explore-img/merzouga/maroc-explore-marzouga-desert-trips.avif',
      tagline: 'Gateway to the Sahara',
      history: `Merzouga is a small village on the edge of the Erg Chebbi dunes, the largest sand sea in Morocco, stretching 50km north to south. The area was once a seasonal lake that attracted traders and nomads. Today, it represents the quintessential Sahara experience with dunes reaching heights of 150 meters.`,
      amazigh: `Merzouga is the heartland of the Ait Atta Amazigh nomads and Tuareg-influenced cultures of the Sahara. The region maintains strong traditions of desert hospitality. Traditional music features the imzad (single-string violin) and poetic recitations in Tamazight. The annual Date Festival celebrates with Amazigh music and camel races.`,
      activities: ['Camel trek into dunes', 'Overnight in desert camp', 'Sandboarding', 'Visit seasonal lake', 'Explore Rissani souk'],
      activityLinks: ['adventure', 'camping', 'adventure', 'wildlife', 'cultural']
    },
    {
      id: 'ouarzazate',
      name: 'Ouarzazate',
      image: '/images/maroc_explore-img/Ouarzazate/maroc-explore-ouarzazate.avif',
      tagline: 'The Door of the Desert',
      history: `Known as the "Door of the Desert," Ouarzazate was a small crossing point for African traders before becoming a French garrison town in the 1920s. The city gained international fame as a filming location for movies including "Lawrence of Arabia," "Gladiator," and "Game of Thrones." The Atlas Studios are the world's largest film studios by area.`,
      amazigh: `Ouarzazate is the administrative and cultural center of the Souss-Massa-Draa region, home to numerous Amazigh tribes including the Ait Benhaddou. The area is famous for its distinctive kasbah architecture, built from adobe and decorated with Amazigh geometric patterns. The city hosts the International Film Festival, showcasing Amazigh cinema.`,
      activities: ['Tour Atlas Film Studios', 'Visit Ait Benhaddou kasbah', 'Explore Fint Oasis', 'Tour Taourirt Kasbah', 'Drive Road of a Thousand Kasbahs'],
      activityLinks: ['cultural', 'cultural', 'adventure', 'cultural', 'adventure']
    }
  ];

  // Testimonials data with Amazigh and Moroccan cultural experiences
  const testimonials = [
    {
      id: 1,
      name: "Sarah & James Morrison",
      location: "London, UK",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      date: "October 2024",
      experience: "Desert & Amazigh Culture",
      title: "Life-Changing Amazigh Hospitality in the Sahara",
      text: "Our 3-day Merzouga tour was absolutely magical. Sleeping in a luxury desert camp under the stars, listening to the imzad (Amazigh violin) by the fire, and sharing mint tea with our nomadic hosts gave us a profound appreciation for Amazigh culture. Our guide Ahmed taught us Tamazight phrases and explained the significance of every carpet pattern. The camel trek at sunrise over the golden dunes of Erg Chebbi was surreal. This wasn't just a tour—it was a cultural immersion that changed our perspective on Morocco.",
      highlights: ["Luxury desert camp", "Imzad music performance", "Tamazight language lessons", "Camel trekking"],
      tripType: "Merzouga Desert Experience",
      verified: true
    },
    {
      id: 2,
      name: "Marcus Chen",
      location: "Toronto, Canada",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      date: "September 2024",
      experience: "Atlas Mountains & Berber Villages",
      title: "Authentic Berber Life in the High Atlas",
      text: "Morocco Explore took us beyond the tourist trail into the heart of the Atlas Mountains. We stayed in a traditional Amazigh gîte in Imlil, learned to make tagine from a local family, and hiked through terraced valleys unchanged for centuries. Our guide Mohamed explained the agdal system (communal land management) and introduced us to village elders who shared stories of their ancestors. The mule trek to Toubkal base camp was challenging but rewarding, with breathtaking views and genuine cultural exchange.",
      highlights: ["Home-cooked tagine", "Agdal system explanation", "Mule trekking", "Village elder stories"],
      tripType: "Atlas Mountains Adventure",
      verified: true
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      location: "Madrid, Spain",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      date: "August 2024",
      experience: "Fes & Cultural Immersion",
      title: "Discovering Hidden Morocco in Fes",
      text: "We've traveled extensively, but Morocco Explore provided something truly special. In Fes, we didn't just see the tanneries—we met the master craftsmen and learned about the ancient techniques passed down through Amazigh and Arab generations. The highlight was a private zellige tile-making workshop where we created our own geometric patterns. Our guide Fatima took us to her family's home for Friday couscous, where we experienced authentic Moroccan hospitality and learned about Amazigh influences on Andalusian music.",
      highlights: ["Master craftsman meeting", "Zellige workshop", "Family couscous meal", "Andalusian music history"],
      tripType: "Fes Cultural Deep Dive",
      verified: true
    },
    {
      id: 4,
      name: "The Johnson Family",
      location: "Sydney, Australia",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 5,
      date: "July 2024",
      experience: "Chefchaouen & Rif Mountains",
      title: "Blue City Magic and Mountain Traditions",
      text: "Traveling with our teenage children, we wanted an educational yet fun experience. Morocco Explore delivered perfectly! In Chefchaouen, we learned about the Jebala Amazigh weaving traditions and watched women create the famous striped blankets on traditional looms. The kids loved the hike to the Spanish Mosque, and we all enjoyed the cooking class where we learned to make rfissa and pastilla. Our guide Hassan explained the history of the blue-washed buildings and the Jewish-Amazigh connection. Every moment was Instagram-worthy yet deeply meaningful.",
      highlights: ["Amazigh weaving demonstration", "Spanish Mosque hike", "Family cooking class", "Jewish-Amazigh history"],
      tripType: "Chefchaouen Family Tour",
      verified: true
    },
    {
      id: 5,
      name: "Pierre & Marie Dubois",
      location: "Paris, France",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      date: "June 2024",
      experience: "Agadir & Souss Valley",
      title: "Timitar Festival and Amazigh Heritage",
      text: "We planned our trip specifically for the Timitar Amazigh Music Festival in Agadir, and Morocco Explore arranged exclusive backstage access! Hearing traditional Ahwach and Rwais music performed by masters was incredible. We visited the Amazigh Heritage Museum with a curator who explained the symbolism in jewelry and textiles. The day trip to a women's argan cooperative in the Souss Valley was eye-opening—we participated in the entire process from cracking nuts to pressing oil. The Shilha (Tashelhit) language lessons from our guide were a wonderful bonus.",
      highlights: ["Timitar Festival backstage", "Amazigh Heritage Museum", "Argan cooperative visit", "Shilha language lessons"],
      tripType: "Agadir Cultural Festival",
      verified: true
    },
    {
      id: 6,
      name: "Jennifer Walsh",
      location: "New York, USA",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
      date: "May 2024",
      experience: "Marrakech & Essaouira",
      title: "From Red City to Wind City: A Cultural Journey",
      text: "My solo trip with Morocco Explore felt safe, enriching, and perfectly paced. In Marrakech, I discovered hidden riads and learned about the Amazigh influence on Moroccan design at the Majorelle Garden. The Gnawa music experience in Essaouira was transformative—our guide arranged a private performance where I learned about the healing rituals and the instrument's African roots. The argan cooperative visit connected me with Amazigh women entrepreneurs, and I left with handmade oils and a deep appreciation for their craft.",
      highlights: ["Hidden riads discovery", "Gnawa private performance", "Argan cooperative", "Amazigh women entrepreneurs"],
      tripType: "Solo Cultural Journey",
      verified: true
    }
  ];

  // FAQ data with Schema.org structured data
  const faqData = [
    {
      question: "What is the best time to visit Morocco?",
      answer: "Spring (March to May) and Autumn (September to November) offer ideal temperatures for exploring Morocco. During these months, you can enjoy pleasant weather ranging from 20-28°C (68-82°F), perfect for desert excursions, mountain trekking, and city exploration. Summer (June to August) can be extremely hot in the desert and inland cities, with temperatures reaching 40°C (104°F), while winter (December to February) brings snow to the Atlas Mountains but mild weather along the coast. For Amazigh cultural experiences, consider visiting during Yennayer (Amazigh New Year) in January or the Timitar Festival in Agadir during summer."
    },
    {
      question: "Do I need a visa to travel to Morocco?",
      answer: "Citizens from the US, Canada, UK, EU, Australia, and many other countries can enter Morocco visa-free for up to 90 days. Your passport must be valid for at least six months beyond your travel dates. Upon arrival, you'll receive an entry stamp. If you wish to stay longer than 90 days, you must request an extension from the Moroccan immigration authorities. We recommend carrying a printed copy of your accommodation bookings and return flight tickets for smooth entry."
    },
    {
      question: "Is Morocco safe for tourists?",
      answer: "Morocco is generally very safe for tourists and has a well-developed tourism infrastructure. The country welcomes over 13 million visitors annually. As with any destination, we recommend normal precautions in crowded areas like medinas. Our local guides are trained to help you navigate safely, avoid common tourist scams, and respect local customs. Women travelers should dress modestly (covering shoulders and knees), especially in rural areas. The Amazigh (Berber) communities in the Atlas Mountains and desert are particularly known for their hospitality and welcoming nature toward guests."
    },
    {
      question: "What should I pack for a Morocco tour?",
      answer: "Pack modest clothing respecting local culture—covering shoulders and knees is recommended, especially for women. Essential items include: comfortable walking shoes for medinas (closed-toe recommended), sunscreen and a wide-brimmed hat, layers for temperature variations (desert nights can be cool even in summer), a light scarf for sun protection and visiting religious sites, and a reusable water bottle. For Amazigh cultural experiences in the mountains, bring sturdy hiking boots. If visiting during Ramadan, bring conservative clothing. Don't forget a universal adapter (Morocco uses European-style plugs) and any prescription medications."
    },
    {
      question: "Can Morocco Explore customize private tours?",
      answer: "Absolutely! We specialize in tailor-made itineraries that match your interests, pace, and travel style. Whether you're interested in photography, culinary experiences, family adventures, or deep cultural immersion with Amazigh communities, we design journeys specifically for you. Our private tours include: personalized pickup from any location, flexible scheduling, private vehicles with experienced drivers, expert local guides with specialized knowledge (Amazigh culture, history, architecture, etc.), accommodation selection based on your preferences (riads, luxury hotels, desert camps), and 24/7 support throughout your journey. Contact us to start planning your perfect Morocco itinerary."
    },
    {
      question: "What is Amazigh culture and why is it important in Morocco?",
      answer: "The Amazigh (Berbers) are the indigenous people of North Africa, inhabiting Morocco for thousands of years before Arab arrival. They represent approximately 40% of Morocco's population and have preserved their distinct Tamazight languages, traditions, and identity. Amazigh culture is integral to Moroccan identity—visible in the geometric patterns of zellige tiles, the designs of handwoven carpets, the rhythms of Gnawa music, and the architecture of kasbahs. Our tours emphasize authentic Amazigh experiences: sharing meals with families in the Atlas Mountains, learning about traditional agdal land management, listening to imzad violin performances in the desert, and visiting women's argan cooperatives. Understanding Amazigh heritage provides a deeper, more meaningful connection to Morocco."
    },
    {
      question: "How do I book a tour with Morocco Explore?",
      answer: "Booking with Morocco Explore is simple and secure. You can browse our destinations and activities using the search tool above, then contact us via email, WhatsApp, or our booking form. We recommend booking at least 2-3 months in advance for peak seasons (April-May, September-October) and festival periods. A 30% deposit secures your reservation, with the balance due 30 days before arrival. We accept bank transfers, credit cards, and PayPal. Once booked, you'll receive a detailed itinerary, packing list, and pre-departure information. Our team remains available for any questions before and during your trip."
    },
    {
      question: "What languages do your guides speak?",
      answer: "Our guides are fluent in English, French, and Arabic, with many also speaking Tamazight (Berber languages) native to their regions. For specialized tours, we can provide guides speaking Spanish, German, Italian, or other languages upon request. All our guides are certified by the Moroccan Ministry of Tourism and undergo continuous training in hospitality, safety, and cultural interpretation. Many of our mountain and desert guides come from Amazigh communities and offer authentic insights into local traditions, folklore, and customs that you won't find in guidebooks."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Travelers" },
    { number: "15+", label: "Years Experience" },
    { number: "4.9", label: "TripAdvisor Rating" },
    { number: "200+", label: "5-Star Reviews" }
  ];

  // Generate FAQ Schema.org JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (destRef.current && !destRef.current.contains(event.target)) {
        setIsDestOpen(false);
      }
      if (durationRef.current && !durationRef.current.contains(event.target)) {
        setIsDurationOpen(false);
      }
      if (activityRef.current && !activityRef.current.contains(event.target)) {
        setIsActivityOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleImages(prev => [...new Set([...prev, index])]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const images = document.querySelectorAll(`.${styles.galleryItem}`);
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (selectedDestination) params.set('destination', selectedDestination);
    if (duration) params.set('duration', duration);
    if (activityType) params.set('activity', activityType);
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);

    router.push(`/filter?${params.toString()}`);
  };

  const handleDestinationClick = (destId) => {
    setSelectedDestination(destId);
    const params = new URLSearchParams();
    params.set('destination', destId);
    router.push(`/filter?${params.toString()}`);
  };

  const handleActivityFilter = (activityId) => {
    setActivityType(activityId);
    const params = new URLSearchParams();
    params.set('activity', activityId);
    router.push(`/filter?${params.toString()}`);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const selectedDestObj = destinations.find(d => d.id === selectedDestination);
  const selectedActivityObj = activityTypes.find(a => a.id === activityType);

  return (
    <>
      {/* FAQ Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section with Header Inside */}
      <div className={styles.hero}>
        {/* Background Image */}
        <div className={styles.heroBackground}>
          <img
            src="/images/maroc_explore-img/chefchaouen/chefchaouen-culter-blue-city-tours.avif"
            alt="Morocco Landscape"
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>

        {/* Header Inside Hero */}
        <div className={styles.headerWrapper}>
          <Header />
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Explore <span className={styles.heroHighlight}>Morocco</span>
          </h1>

          {/* Pill Search Bar - Now under the title */}
          <div className={styles.searchWrapper}>
            <div className={styles.searchPill}>

              {/* Destination */}
              <div className={styles.pillSection} ref={destRef}>
                <div
                  className={styles.pillContent}
                  onClick={() => {
                    setIsDestOpen(!isDestOpen);
                    setIsDurationOpen(false);
                    setIsActivityOpen(false);
                  }}
                >
                  <div className={styles.pillLabel}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Destination
                  </div>
                  <span className={styles.pillValue}>
                    {selectedDestObj ? selectedDestObj.name : 'Where to?'}
                  </span>
                </div>

                {isDestOpen && (
                  <div className={styles.pillDropdown}>
                    <div className={styles.pillDropdownHeader}>Select City</div>
                    <div className={styles.pillDropdownList}>
                      {destinations.map((dest) => (
                        <div
                          key={dest.id}
                          className={`${styles.pillDropdownItem} ${selectedDestination === dest.id ? styles.pillDropdownItemActive : ''}`}
                          onClick={() => {
                            setSelectedDestination(dest.id);
                            setIsDestOpen(false);
                          }}
                        >
                          <span className={styles.pillDropdownText}>{dest.name}</span>
                          {selectedDestination === dest.id && (
                            <svg className={styles.checkIcon} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.pillDivider}></div>

              {/* Duration */}
              <div className={styles.pillSection} ref={durationRef}>
                <div
                  className={styles.pillContent}
                  onClick={() => {
                    setIsDurationOpen(!isDurationOpen);
                    setIsDestOpen(false);
                    setIsActivityOpen(false);
                  }}
                >
                  <div className={styles.pillLabel}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duration
                  </div>
                  <span className={styles.pillValue}>
                    {duration ? durations.find(d => d.value === duration)?.label : 'How long?'}
                  </span>
                </div>

                {isDurationOpen && (
                  <div className={styles.pillDropdown}>
                    <div className={styles.pillDropdownHeader}>Select Duration</div>
                    <div className={styles.pillDropdownList}>
                      {durations.map((dur) => (
                        <div
                          key={dur.value}
                          className={`${styles.pillDropdownItem} ${duration === dur.value ? styles.pillDropdownItemActive : ''}`}
                          onClick={() => {
                            setDuration(dur.value);
                            setIsDurationOpen(false);
                          }}
                        >
                          <div className={styles.pillDropdownInfo}>
                            <span className={styles.pillDropdownText}>{dur.label}</span>
                            <span className={styles.pillDropdownSubtext}>{dur.days}</span>
                          </div>
                          {duration === dur.value && (
                            <svg className={styles.checkIcon} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.pillDivider}></div>

              {/* Activity Type */}
              <div className={styles.pillSection} ref={activityRef}>
                <div
                  className={styles.pillContent}
                  onClick={() => {
                    setIsActivityOpen(!isActivityOpen);
                    setIsDestOpen(false);
                    setIsDurationOpen(false);
                  }}
                >
                  <div className={styles.pillLabel}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Activity
                  </div>
                  <span className={styles.pillValue}>
                    {selectedActivityObj ? selectedActivityObj.label : 'What type?'}
                  </span>
                </div>

                {isActivityOpen && (
                  <div className={styles.pillDropdown}>
                    <div className={styles.pillDropdownHeader}>Select Activity Type</div>
                    <div className={styles.pillDropdownList}>
                      {activityTypes.map((act) => (
                        <div
                          key={act.id}
                          className={`${styles.pillDropdownItem} ${activityType === act.id ? styles.pillDropdownItemActive : ''}`}
                          onClick={() => {
                            setActivityType(act.id);
                            setIsActivityOpen(false);
                          }}
                        >
                          <span className={styles.pillDropdownText}>{act.label}</span>
                          {activityType === act.id && (
                            <svg className={styles.checkIcon} width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button className={styles.pillSearchButton} onClick={handleSearch}>
                <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

            </div>
          </div>

          {/* Subtitle - Hidden on mobile */}
          <p className={styles.heroSubtitle}>
            Authentic journeys through ancient medinas, golden deserts, and vibrant culture
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryButton} onClick={handleSearch}>
              <span>Explore Tours</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className={styles.secondaryButton}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Watch Video</span>
            </button>
          </div>
        </div>


      </div>

      {/* Why Choose Us - Compact Section */}
      <section className={styles.whyChooseCompact}>
        <div className={styles.whyChooseCompactContainer}>
          {whyChooseItems.map((item, index) => (
            <div key={index} className={styles.whyChooseItem}>
              <div className={styles.whyChooseIcon}>
                {item.icon}
              </div>
              <span className={styles.whyChooseText}>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className={styles.whatWeDoSection} ref={whatWeDoRef}>
        <div className={styles.whatWeDoContainer}>
          <div className={styles.whatWeDoContent}>
            <span className={styles.whatWeDoSubtitle}>Discover Morocco</span>
            <h2 className={styles.whatWeDoTitle}>
              We Craft <span className={styles.whatWeDoHighlight}>Unforgettable</span> Journeys
            </h2>
            <div className={styles.whatWeDoText}>
              <p>
                At <strong>Morocco Explore</strong>, we transform travel dreams into reality. From the golden dunes of the Sahara to the blue-washed streets of Chefchaouen, we curate immersive experiences that connect you with Morocco&apos;s rich tapestry of culture, history, and natural beauty.
              </p>
              <p>
                Our expert local guides reveal hidden gems beyond the tourist trails—whether it&apos;s sipping mint tea with Berber families, exploring ancient kasbahs, or riding camels into the sunset. Every journey is thoughtfully designed to create lasting memories.
              </p>
            </div>
            <div className={styles.whatWeDoFeatures}>
              <div className={styles.whatWeDoFeature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Handpicked Experiences</span>
              </div>
              <div className={styles.whatWeDoFeature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>24/7 Local Support</span>
              </div>
              <div className={styles.whatWeDoFeature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Authentic Encounters</span>
              </div>
            </div>
            <button className={styles.whatWeDoButton} onClick={handleSearch}>
              Start Your Adventure
            </button>
          </div>

          <div className={styles.whatWeDoGallery}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                data-index={index}
                className={`${styles.galleryItem} ${styles[`gallery${image.span}`]} ${visibleImages.includes(index) ? styles.galleryItemVisible : ''}`}
              >
                <img src={image.src} alt={image.alt} />
                <div className={styles.galleryOverlay}>
                  <span>{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Destinations Section */}
      <section className={styles.alternatingDestinationsSection}>
        <div className={styles.alternatingContainer}>
          <div className={styles.alternatingHeader}>
            <span className={styles.alternatingSubtitle}>Explore Morocco</span>
            <h2 className={styles.alternatingTitle}>Discover Our Destinations</h2>
            <p className={styles.alternatingDescription}>
              Journey through imperial cities, mountain villages, and desert landscapes while discovering authentic Amazigh culture
            </p>
          </div>

          {destinationContent.map((dest, index) => (
            <article
              key={dest.id}
              className={`${styles.alternatingRow} ${index % 2 === 1 ? styles.alternatingRowReversed : ''}`}
            >
              {/* Image Column */}
              <div className={styles.alternatingImageCol}>
                <div className={styles.alternatingImageWrapper}>
                  <img src={dest.image} alt={`${dest.name} Morocco`} loading="lazy" />
                  <div className={styles.alternatingImageOverlay}>
                    <span className={styles.alternatingTagline}>{dest.tagline}</span>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className={styles.alternatingContentCol}>
                <div className={styles.alternatingContent}>
                  <h3 className={styles.alternatingDestinationName}>{dest.name}</h3>

                  <div className={styles.alternatingBlock}>
                    <h4>Historical Heritage</h4>
                    <p>{dest.history}</p>
                  </div>

                  <div className={styles.alternatingBlock}>
                    <h4>Amazigh Culture</h4>
                    <p>{dest.amazigh}</p>
                  </div>

                  <div className={styles.alternatingActivities}>
                    <h4>What Travelers Can Do</h4>
                    <ul>
                      {dest.activities.map((activity, idx) => (
                        <li key={idx}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.alternatingActivityLinks}>
                    <h4>Available Activities</h4>
                    <div className={styles.alternatingActivityTags}>
                      {dest.activityLinks.map((actId, idx) => {
                        const actLabel = activityTypes.find(a => a.id === actId)?.label;
                        return (
                          <Link
                            key={idx}
                            href={`/activities/${actId}`}
                            className={styles.alternatingActivityTag}
                          >
                            {actLabel}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    className={styles.alternatingCta}
                    onClick={() => handleDestinationClick(dest.id)}
                  >
                    Explore {dest.name} Tours
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Community & Testimonials Section */}
      <section className={styles.communitySection} ref={testimonialsRef}>
        <div className={styles.communityContainer}>

          {/* Stats Bar */}
          <div className={styles.statsBar}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Section Header */}
          <div className={styles.communityHeader}>
            <div className={styles.tripAdvisorBadge}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.tripAdvisorIcon}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span>TripAdvisor Traveler&apos;s Choice 2024</span>
            </div>
            <h2 className={styles.communityTitle}>Happy Travelers Share Their Stories</h2>
            <p className={styles.communitySubtitle}>
              Real experiences from our community discovering Amazigh heritage and Moroccan culture
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className={styles.featuredTestimonial}>
            <div className={styles.testimonialCardLarge}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAuthor}>
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className={styles.testimonialAvatar}
                  />
                  <div className={styles.testimonialMeta}>
                    <h4>{testimonials[activeTestimonial].name}</h4>
                    <span>{testimonials[activeTestimonial].location}</span>
                  </div>
                </div>
                <div className={styles.testimonialRating}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className={styles.ratingText}>5.0</span>
                </div>
              </div>

              <div className={styles.testimonialBadge}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                Verified Traveler
              </div>

              <h3 className={styles.testimonialTitle}>{testimonials[activeTestimonial].title}</h3>

              <p className={styles.testimonialText}>{testimonials[activeTestimonial].text}</p>

              <div className={styles.testimonialHighlights}>
                {testimonials[activeTestimonial].highlights.map((highlight, idx) => (
                  <span key={idx} className={styles.highlightTag}>
                    {highlight}
                  </span>
                ))}
              </div>

              <div className={styles.testimonialFooter}>
                <span className={styles.tripType}>{testimonials[activeTestimonial].tripType}</span>
                <span className={styles.testimonialDate}>{testimonials[activeTestimonial].date}</span>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className={styles.testimonialNavigation}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.navDot} ${activeTestimonial === idx ? styles.navDotActive : ''}`}
                  onClick={() => setActiveTestimonial(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                className={`${styles.testimonialCard} ${activeTestimonial === index ? styles.testimonialCardActive : ''}`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className={styles.testimonialCardHeader}>
                  <img src={testimonial.avatar} alt={testimonial.name} className={styles.testimonialCardAvatar} />
                  <div className={styles.testimonialCardMeta}>
                    <h5>{testimonial.name}</h5>
                    <div className={styles.testimonialCardRating}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className={styles.testimonialCardPreview}>{testimonial.title}</p>
                <span className={styles.testimonialCardExperience}>{testimonial.experience}</span>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.communityCta}>
            <p>Join 50,000+ happy travelers who discovered authentic Morocco with us</p>
            <button className={styles.communityCtaButton} onClick={handleSearch}>
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema.org */}
      <section className={styles.faqSection} aria-label="Frequently Asked Questions">
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <span className={styles.faqSubtitle}>FAQ</span>
            <h2 className={styles.faqTitle}>Common Questions</h2>
            <p className={styles.faqDescription}>
              Everything you need to know about traveling to Morocco with us
            </p>
          </div>

          <div className={styles.faqList} itemScope itemType="https://schema.org/FAQPage">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${activeFaq === index ? styles.faqItemActive : ''}`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                  itemProp="name"
                >
                  {faq.question}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className={styles.faqAnswer}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}