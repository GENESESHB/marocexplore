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
                excluded: ['Lunches', 'Drinks', 'Personal Expenses', 'Tips'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Lucas M.",
                                "avatar": "https://i.pravatar.cc/150?u=11",
                                "title": "A life-changing journey!",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "The silence of the Erg Chebbi dunes at sunrise is something I'll never forget. The luxury camp was surprisingly comfortable, and our Berber guides were incredible hosts."
                        },
                        {
                                "id": 2,
                                "name": "Sophie & Tom",
                                "avatar": "https://i.pravatar.cc/150?u=12",
                                "title": "Magical starry nights",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "Riding camels into the sunset felt like a movie. The food at the camp was delicious, and sitting by the fire listening to traditional drum music was pure magic."
                        },
                        {
                                "id": 3,
                                "name": "Emma H.",
                                "avatar": "https://i.pravatar.cc/150?u=13",
                                "title": "Well organized but a long drive",
                                "experience": "Group of Friends",
                                "rating": 4,
                                "text": "The desert itself is 5/5, but be prepared for the long drive from Marrakech! The stops at Ait Ben Haddou and the Todra Gorges made it worthwhile though."
                        }
                ],
                faqs: [
                        {
                                "question": "Is it cold in the desert at night?",
                                "answer": "Yes! While daytime temperatures can be very hot, the desert cools down drastically after sunset. Bring layers, including a warm jacket for the evenings."
                        },
                        {
                                "question": "Are there toilets and showers at the desert camp?",
                                "answer": "Yes, our luxury camps are equipped with private en-suite bathrooms, including flushing toilets and hot showers."
                        },
                        {
                                "question": "Is the camel ride difficult?",
                                "answer": "The camel ride lasts about 1-1.5 hours to reach the camp. It's a gentle pace, but you can opt for a 4x4 transfer to the camp if you prefer."
                        }
                ]
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
                excluded: ['Lunch', 'Personal shopping', 'Tips'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Claire D.",
                                "avatar": "https://i.pravatar.cc/150?u=21",
                                "title": "Couldn't have done it without a guide",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "The medina is a maze! Our guide navigated it effortlessly, showing us artisan workshops we would have never found on our own. No pressure to buy anything either."
                        },
                        {
                                "id": 2,
                                "name": "James L.",
                                "avatar": "https://i.pravatar.cc/150?u=22",
                                "title": "Fascinating history",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "I learned so much about the architecture of Bahia Palace. The contrast between the chaotic souks and the peaceful courtyards is amazing."
                        },
                        {
                                "id": 3,
                                "name": "The Patel Family",
                                "avatar": "https://i.pravatar.cc/150?u=23",
                                "title": "Great introduction to the city",
                                "experience": "Family Vacation",
                                "rating": 5,
                                "text": "A fantastic half-day overview. The guide kept our teenagers engaged the whole time, especially during the spice market tour."
                        }
                ],
                faqs: [
                        {
                                "question": "Do we need to pay for entrance tickets?",
                                "answer": "Entrance fees to the Bahia Palace are included in the tour price. Personal shopping and gratuities are not."
                        },
                        {
                                "question": "Is the walking strenuous?",
                                "answer": "The walk is on flat ground but lasts several hours. Comfortable walking shoes are highly recommended."
                        },
                        {
                                "question": "Can we customize the stops?",
                                "answer": "Yes, since this is a private tour, let your guide know if you want to spend more time in the souks or focus more on the historical sites."
                        }
                ]
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
                excluded: ['Travel Insurance', 'Personal hiking gear', 'Drinks', 'Tips'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "David R.",
                                "avatar": "https://i.pravatar.cc/150?u=31",
                                "title": "Breathtaking scenery",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "The views from the Tizi Mzik pass were unreal. The hike was challenging but rewarding. The Berber hospitality in Azzaden valley was the highlight."
                        },
                        {
                                "id": 2,
                                "name": "Anna K.",
                                "avatar": "https://i.pravatar.cc/150?u=32",
                                "title": "Authentic and peaceful",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "A great escape from the busy city. The gite we stayed in was basic but very clean and authentic. The fresh mountain food was delicious."
                        },
                        {
                                "id": 3,
                                "name": "Mark T.",
                                "avatar": "https://i.pravatar.cc/150?u=33",
                                "title": "Good trek, pack light!",
                                "experience": "Group of Friends",
                                "rating": 4,
                                "text": "Great experience with a knowledgeable mountain guide. Mules carry the heavy luggage, but definitely bring a good daypack and proper hiking boots."
                        }
                ],
                faqs: [
                        {
                                "question": "What level of fitness is required?",
                                "answer": "This is a moderate trek. You should be in good health and comfortable walking 5-6 hours a day on uneven, sometimes steep paths."
                        },
                        {
                                "question": "What should I pack?",
                                "answer": "Bring sturdy hiking boots, layers (it gets cold at night), sun protection, a reusable water bottle, and a daypack. Your main luggage will be carried by mules."
                        },
                        {
                                "question": "Are vegetarian meals available?",
                                "answer": "Absolutely. The traditional Berber diet includes many delicious vegetarian options. Just let us know in advance."
                        }
                ]
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
                excluded: ['Transport', 'Full Meals', 'Tips'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Chloe M.",
                                "avatar": "https://i.pravatar.cc/150?u=41",
                                "title": "Beautiful artistry",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "The Nakacha was so talented. She designed a beautiful, intricate floral pattern on my hands. The riad setting was incredibly peaceful."
                        },
                        {
                                "id": 2,
                                "name": "Mia & Sarah",
                                "avatar": "https://i.pravatar.cc/150?u=42",
                                "title": "Fun cultural afternoon",
                                "experience": "Group of Friends",
                                "rating": 5,
                                "text": "We loved learning about the history of Henna and the meaning behind the symbols. The mint tea and pastries were a lovely touch!"
                        },
                        {
                                "id": 3,
                                "name": "Jessica T.",
                                "avatar": "https://i.pravatar.cc/150?u=43",
                                "title": "Safe and hygienic",
                                "experience": "Family Vacation",
                                "rating": 5,
                                "text": "I was worried about 'black henna' allergies, but they use 100% natural, organic brown henna here. It smells earthy and beautiful, and fades naturally."
                        }
                ],
                faqs: [
                        {
                                "question": "How long does the henna take to dry?",
                                "answer": "Natural henna takes about 30-45 minutes to dry on the skin. You should leave the paste on for a few hours before gently scraping it off."
                        },
                        {
                                "question": "How long will the design last?",
                                "answer": "Depending on where it is applied and how often you wash the area, natural henna typically lasts 1 to 2 weeks."
                        },
                        {
                                "question": "Do you use chemical 'black henna'?",
                                "answer": "Never. We strictly use 100% natural, organic henna powder mixed with water and essential oils for safety and authenticity."
                        }
                ]
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
                excluded: ['Alcoholic Beverages', 'Transport', 'Personal Expenses'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Pierre G.",
                                "avatar": "https://i.pravatar.cc/150?u=51",
                                "title": "Delicious and fun!",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "Learning to fold the Msemen dough was harder than it looks, but our host family was so patient and encouraging. The food we made was the best we ate in Fes!"
                        },
                        {
                                "id": 2,
                                "name": "Maria V.",
                                "avatar": "https://i.pravatar.cc/150?u=52",
                                "title": "A true local experience",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "This wasn't a commercial kitchen; we were literally cooking in the host family's home in the medina. It felt incredibly warm and welcoming."
                        },
                        {
                                "id": 3,
                                "name": "John D.",
                                "avatar": "https://i.pravatar.cc/150?u=53",
                                "title": "Great recipes to take home",
                                "experience": "Family Vacation",
                                "rating": 5,
                                "text": "We had a blast making the Briwates. They gave us the written recipes afterwards so we can try making them back home."
                        }
                ],
                faqs: [
                        {
                                "question": "Do I need prior cooking experience?",
                                "answer": "Not at all! This class is designed for all skill levels, and the host family will guide you step-by-step."
                        },
                        {
                                "question": "Can you accommodate food allergies?",
                                "answer": "Yes, please inform us of any allergies or dietary restrictions (like gluten-free or vegan) at the time of booking so the family can prepare."
                        },
                        {
                                "question": "Do we get to eat what we cook?",
                                "answer": "Yes! The class concludes with a shared feast where you will enjoy everything you've prepared, accompanied by traditional Moroccan mint tea."
                        }
                ]
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
                excluded: ['Gifts for the Host Family (Optional)', 'Alcoholic Drinks', 'Tips'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Emily W.",
                                "avatar": "https://i.pravatar.cc/150?u=61",
                                "title": "Once in a lifetime",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "I felt so honored to be invited to a real Sbou (naming ceremony). The music, the dancing, the incredible outfits... it was an unforgettable night."
                        },
                        {
                                "id": 2,
                                "name": "The Garcia Family",
                                "avatar": "https://i.pravatar.cc/150?u=62",
                                "title": "Incredible hospitality",
                                "experience": "Family Vacation",
                                "rating": 5,
                                "text": "The family welcomed us like we were their own relatives. Dressing up in the traditional Kaftans made us feel fully immersed in the culture."
                        },
                        {
                                "id": 3,
                                "name": "Laura B.",
                                "avatar": "https://i.pravatar.cc/150?u=63",
                                "title": "Amazing food and music",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "The amount of food was sensational—pastillas, tagines, and sweets! The live Chaabi music kept everyone dancing until the early hours."
                        }
                ],
                faqs: [
                        {
                                "question": "What is a 'Sbou'?",
                                "answer": "A Sbou is a traditional Moroccan naming ceremony and celebration held a week after a baby is born. It involves music, feasting, and gathering of family and friends."
                        },
                        {
                                "question": "Are we intruding on a private family event?",
                                "answer": "No, in Moroccan culture, guests are considered a blessing. The host families partner with us and eagerly welcome international guests to share their joy."
                        },
                        {
                                "question": "Do I need to buy a gift?",
                                "answer": "Gifts are entirely optional. Your presence and respectful participation are the greatest gifts. If you wish to bring something, sweets or a small toy for children are appreciated."
                        }
                ]
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
                excluded: ['Lunch', 'Tips', 'Souvenirs'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Rachel S.",
                                "avatar": "https://i.pravatar.cc/150?u=71",
                                "title": "A photographer's paradise",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "Every corner of Chefchaouen is a photo opportunity. Our guide knew all the secret, quiet spots away from the main tourist crowds."
                        },
                        {
                                "id": 2,
                                "name": "Carlos M.",
                                "avatar": "https://i.pravatar.cc/150?u=72",
                                "title": "Relaxing and beautiful",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "Chefchaouen has a much more relaxed vibe than Marrakech or Fes. The hike up to the Spanish Mosque for sunset was the perfect end to the day."
                        },
                        {
                                "id": 3,
                                "name": "Jenny L.",
                                "avatar": "https://i.pravatar.cc/150?u=73",
                                "title": "Great local insights",
                                "experience": "Group of Friends",
                                "rating": 5,
                                "text": "The goat cheese tasting was a surprising highlight! The guide explained the history of why the city was painted blue, which was fascinating."
                        }
                ],
                faqs: [
                        {
                                "question": "Why is the city painted blue?",
                                "answer": "There are several theories. Some say it was painted blue by Jewish refugees who settled there to represent the sky and heaven; others believe the blue repels mosquitoes."
                        },
                        {
                                "question": "Are there a lot of stairs?",
                                "answer": "Yes, Chefchaouen is built on the side of a mountain. The medina is full of steep, winding staircases and cobbled paths, so comfortable shoes are essential."
                        },
                        {
                                "question": "Can we buy authentic souvenirs here?",
                                "answer": "Yes! Chefchaouen is famous for its unique wool garments, woven blankets, and local goat cheese. Your guide can point you to authentic artisan shops."
                        }
                ]
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
                excluded: ['Transport to Essaouira', 'Drinks', 'Tips'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Oliver P.",
                                "avatar": "https://i.pravatar.cc/150?u=81",
                                "title": "Fresh sea breeze and great seafood",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "Essaouira is stunning. Walking the ramparts where Game of Thrones was filmed was very cool. The grilled fish lunch at the port was the freshest I've ever had."
                        },
                        {
                                "id": 2,
                                "name": "Hannah F.",
                                "avatar": "https://i.pravatar.cc/150?u=82",
                                "title": "Artsy and laid back",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "I loved the artistic, bohemian vibe of the medina. It's much smaller and easier to navigate than the bigger cities. Great local music scene too."
                        },
                        {
                                "id": 3,
                                "name": "Mark W.",
                                "avatar": "https://i.pravatar.cc/150?u=83",
                                "title": "Very windy!",
                                "experience": "Family Vacation",
                                "rating": 4,
                                "text": "They don't call it the 'Wind City of Africa' for nothing! It was a bit too windy for the beach, but the historical tour and the Thuya wood workshops were fantastic."
                        }
                ],
                faqs: [
                        {
                                "question": "Is the beach suitable for swimming?",
                                "answer": "While you can swim, Essaouira is notoriously windy (which makes it a world-class spot for kitesurfing). The water can be chilly, so it's better for water sports or beach walks."
                        },
                        {
                                "question": "What is Thuya wood?",
                                "answer": "Thuya is a rare, aromatic wood native to the Essaouira region. The local artisans are famous for carving intricate boxes and furniture from its burl."
                        },
                        {
                                "question": "Is lunch included?",
                                "answer": "Yes, a freshly grilled seafood lunch at a local spot near the port is included in the tour experience."
                        }
                ]
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
                excluded: ['Lunch', 'Shopping', 'Tips'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Antoine H.",
                                "avatar": "https://i.pravatar.cc/150?u=91",
                                "title": "Like wandering into the Middle Ages",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "Fes is mind-blowing. Our guide navigated the 9,000 alleyways with ease. Seeing the leather tanneries and hearing the call to prayer was surreal."
                        },
                        {
                                "id": 2,
                                "name": "Julia K.",
                                "avatar": "https://i.pravatar.cc/150?u=92",
                                "title": "Incredible history",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "The architecture of the Madrasas is stunning. Our guide was truly an expert historian who passionately explained the nuances of Islamic art and Moroccan history."
                        },
                        {
                                "id": 3,
                                "name": "Sam & Lily",
                                "avatar": "https://i.pravatar.cc/150?u=93",
                                "title": "Sensory overload in the best way",
                                "experience": "Group of Friends",
                                "rating": 5,
                                "text": "Donkeys carrying goods, the smell of spices, the sound of copper beaters... it is a sensory overload. Bring mint leaves for the tanneries!"
                        }
                ],
                faqs: [
                        {
                                "question": "Will we get lost in the medina?",
                                "answer": "Fes El Bali has over 9,000 alleys and no cars. It is notoriously easy to get lost, which is exactly why this tour is led by an official, expert local guide."
                        },
                        {
                                "question": "Do the tanneries smell bad?",
                                "answer": "The traditional tanning process uses natural ingredients, which does create a strong odor. We provide fresh mint sprigs to hold to your nose while viewing!"
                        },
                        {
                                "question": "Are we expected to buy carpets or leather?",
                                "answer": "Our tours are focused on history and culture, not forced shopping. While you will see artisanal work, there is absolutely no pressure to purchase anything."
                        }
                ]
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
                excluded: ['Extra drinks', 'Tips'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Ben C.",
                                "avatar": "https://i.pravatar.cc/150?u=121",
                                "title": "Epic waves, great coaching",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "I was a total beginner, but the instructors at Taghazout were so patient. I actually stood up on the board by the end of the lesson! Awesome vibe."
                        },
                        {
                                "id": 2,
                                "name": "Lisa R.",
                                "avatar": "https://i.pravatar.cc/150?u=122",
                                "title": "Perfect beach day",
                                "experience": "Group of Friends",
                                "rating": 5,
                                "text": "Even if you don't surf, the beach is beautiful. Half our group surfed, the other half relaxed and did a camel ride. The beachside lunch was fantastic."
                        },
                        {
                                "id": 3,
                                "name": "Miguel T.",
                                "avatar": "https://i.pravatar.cc/150?u=123",
                                "title": "Great gear and location",
                                "experience": "Couple Trip",
                                "rating": 4,
                                "text": "The wetsuits and boards provided were in excellent condition. Taghazout is definitely the surf capital of Morocco."
                        }
                ],
                faqs: [
                        {
                                "question": "Do I need to be a strong swimmer?",
                                "answer": "Yes, for safety reasons you need to be a confident swimmer to participate in the surf lesson. Beginners will stay in shallower waters, however."
                        },
                        {
                                "question": "Is equipment provided?",
                                "answer": "Everything is included: high-quality surfboards suited to your skill level, and wetsuits to keep you comfortable in the Atlantic waters."
                        },
                        {
                                "question": "What if I just want to watch?",
                                "answer": "Non-surfers are welcome! You can relax on the beach, watch your friends/family, and enjoy the included lunch and optional camel ride."
                        }
                ]
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
                excluded: ['Transport', 'Lunch'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Kevin B.",
                                "avatar": "https://i.pravatar.cc/150?u=131",
                                "title": "Hollywood of Africa",
                                "experience": "Family Vacation",
                                "rating": 5,
                                "text": "My kids loved seeing the sets from Gladiator and Asterix. The studios are massive! Kasbah Taourirt was also fascinating to explore."
                        },
                        {
                                "id": 2,
                                "name": "Nadia M.",
                                "avatar": "https://i.pravatar.cc/150?u=132",
                                "title": "Great half-day excursion",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "A perfect stop on the way to the desert. The studio guide had great anecdotes about movie stars filming in the harsh Moroccan heat."
                        },
                        {
                                "id": 3,
                                "name": "Chris P.",
                                "avatar": "https://i.pravatar.cc/150?u=133",
                                "title": "Interesting contrast",
                                "experience": "Couple Trip",
                                "rating": 4,
                                "text": "It's a bizarre but fascinating mix of real, ancient Kasbah history and fake movie set history. Very photogenic."
                        }
                ],
                faqs: [
                        {
                                "question": "What movies were filmed here?",
                                "answer": "Ouarzazate has hosted Gladiator, Lawrence of Arabia, The Mummy, Game of Thrones, Kingdom of Heaven, and many more."
                        },
                        {
                                "question": "Are we allowed to touch the movie sets?",
                                "answer": "Yes, you can walk through and interact with many of the abandoned sets, making for incredible photos."
                        },
                        {
                                "question": "Is the Kasbah authentic?",
                                "answer": "Yes! While the studios are sets, the Kasbah Taourirt is a genuine, sprawling 19th-century palace built by the powerful Glaoui family."
                        }
                ]
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
                excluded: ['Transport to Volubilis', 'Lunch'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Helen G.",
                                "avatar": "https://i.pravatar.cc/150?u=141",
                                "title": "A hidden gem",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "Meknes is so much more relaxed than Fes. Bab Mansour is stunning, and the royal granaries (Heri es-Souani) are massive and eerie."
                        },
                        {
                                "id": 2,
                                "name": "Thomas K.",
                                "avatar": "https://i.pravatar.cc/150?u=142",
                                "title": "Fascinating history",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "Sultan Moulay Ismail's history is intense! The guide was excellent at bringing the 17th-century ruins to life."
                        },
                        {
                                "id": 3,
                                "name": "Fiona C.",
                                "avatar": "https://i.pravatar.cc/150?u=143",
                                "title": "Glad we did Volubilis",
                                "experience": "Group of Friends",
                                "rating": 5,
                                "text": "We opted for the transfer to Volubilis afterwards. Seeing intact Roman ruins in Morocco was unexpected and amazing."
                        }
                ],
                faqs: [
                        {
                                "question": "How does Meknes compare to Fes or Marrakech?",
                                "answer": "Meknes is one of the four Imperial Cities but is much quieter and less touristy. It offers a more relaxed pace while still boasting monumental architecture."
                        },
                        {
                                "question": "Is Volubilis included?",
                                "answer": "This specific half-day tour focuses on Meknes. However, an optional transfer to the nearby Roman ruins of Volubilis can be easily arranged with your guide."
                        },
                        {
                                "question": "Is the Mausoleum open to non-Muslims?",
                                "answer": "Yes, the Mausoleum of Moulay Ismail is one of the few Islamic shrines in Morocco that respectfully dressed non-Muslims are permitted to enter."
                        }
                ]
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
                excluded: ['Transport around city', 'Meals'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Daniel E.",
                                "avatar": "https://i.pravatar.cc/150?u=151",
                                "title": "Clean, elegant, historic",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "Rabat surprised us! It's very clean and modern, but places like the Chellah ruins and the Kasbah of the Udayas are deeply historic and beautiful."
                        },
                        {
                                "id": 2,
                                "name": "Amira N.",
                                "avatar": "https://i.pravatar.cc/150?u=152",
                                "title": "Beautiful Kasbah",
                                "experience": "Family Vacation",
                                "rating": 5,
                                "text": "Wandering through the blue and white streets of the Udayas Kasbah felt like being in a different country. The views of the ocean are spectacular."
                        },
                        {
                                "id": 3,
                                "name": "Paul W.",
                                "avatar": "https://i.pravatar.cc/150?u=153",
                                "title": "Very informative guide",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "Hassan Tower and the Mausoleum are breathtaking. The guide gave a fantastic overview of Morocco's modern and ancient royal history."
                        }
                ],
                faqs: [
                        {
                                "question": "What is the Chellah?",
                                "answer": "The Chellah is a medieval fortified necropolis built on top of ancient Roman city ruins, known for its overgrown gardens and resident storks."
                        },
                        {
                                "question": "Is Rabat safe to walk around?",
                                "answer": "Rabat is the administrative capital and is widely considered one of the safest and cleanest major cities in Morocco."
                        },
                        {
                                "question": "What should we wear to the Mausoleum?",
                                "answer": "As it is a royal tomb, respectful attire is required. Shoulders and knees must be covered for all visitors."
                        }
                ]
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
                excluded: ['Lunch', 'Gratuities'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Javier M.",
                                "avatar": "https://i.pravatar.cc/150?u=161",
                                "title": "A mix of two worlds",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "You can feel the blend of Spanish, French, and Moroccan culture everywhere. The Caves of Hercules and the views at Cap Spartel were stunning."
                        },
                        {
                                "id": 2,
                                "name": "Diana S.",
                                "avatar": "https://i.pravatar.cc/150?u=162",
                                "title": "Cosmopolitan and vibrant",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "Loved walking through the Kasbah and having mint tea at Café Hafa overlooking the coast of Spain. Tanger has a really unique literary history."
                        },
                        {
                                "id": 3,
                                "name": "Omar H.",
                                "avatar": "https://i.pravatar.cc/150?u=163",
                                "title": "Great introduction to Morocco",
                                "experience": "Group of Friends",
                                "rating": 4,
                                "text": "We took the ferry from Spain for the day. This tour was perfectly timed to see the highlights before we had to catch the boat back."
                        }
                ],
                faqs: [
                        {
                                "question": "Can you really see Spain from Tanger?",
                                "answer": "Yes! On a clear day, you can easily see the coast of Andalusia, Spain, across the Strait of Gibraltar from Cap Spartel or the Kasbah."
                        },
                        {
                                "question": "What are the Caves of Hercules?",
                                "answer": "They are archaeological caves located near Cap Spartel. Legend says Hercules slept here. The sea window is famously shaped like the map of Africa."
                        },
                        {
                                "question": "Is this tour suitable for ferry day-trippers?",
                                "answer": "Absolutely. The itinerary is flexible and we frequently accommodate visitors arriving from Spain on the morning ferry."
                        }
                ]
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
                excluded: ['Personal purchases of Argan products'],
                reviewsList: [
                        {
                                "id": 1,
                                "name": "Yuki T.",
                                "avatar": "https://i.pravatar.cc/150?u=171",
                                "title": "Deeply authentic and moving",
                                "experience": "Solo Traveler",
                                "rating": 5,
                                "text": "Meeting the Amazigh women matching at the cooperative and seeing how hard they work to produce Argan oil was humbling. The tagine at the family home was the best I've ever had."
                        },
                        {
                                "id": 2,
                                "name": "Greg & Pam",
                                "avatar": "https://i.pravatar.cc/150?u=172",
                                "title": "Highlight of our Agadir stay",
                                "experience": "Couple Trip",
                                "rating": 5,
                                "text": "It was so nice to get out of the touristy resort area and see the real Morocco. The people in the village were incredibly welcoming."
                        },
                        {
                                "id": 3,
                                "name": "Nour F.",
                                "avatar": "https://i.pravatar.cc/150?u=173",
                                "title": "Great cultural exchange",
                                "experience": "Family Vacation",
                                "rating": 5,
                                "text": "Our kids got to play with the local village children. Communicating through smiles and sharing fresh bread was a beautiful experience."
                        }
                ],
                faqs: [
                        {
                                "question": "Who are the Amazigh?",
                                "answer": "The Amazigh (commonly referred to as Berbers) are the indigenous people of North Africa, predating the Arab arrival, with their own rich language, culture, and traditions."
                        },
                        {
                                "question": "Is the Argan Oil cooperative ethical?",
                                "answer": "Yes. We strictly partner with Fair Trade women's cooperatives that ensure the profits go directly to the rural women performing the labor."
                        },
                        {
                                "question": "Can I take photos of the local people?",
                                "answer": "Always ask permission first. While the host family is very open, many rural Moroccans prefer not to be photographed. Your guide will help navigate this."
                        }
                ]
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