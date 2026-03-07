const fs = require('fs');

const tourData = {
    'sahara-desert-expedition': {
        reviews: [
            { id: 1, name: "Lucas M.", avatar: "https://i.pravatar.cc/150?u=11", title: "A life-changing journey!", experience: "Solo Traveler", rating: 5, text: "The silence of the Erg Chebbi dunes at sunrise is something I'll never forget. The luxury camp was surprisingly comfortable, and our Berber guides were incredible hosts." },
            { id: 2, name: "Sophie & Tom", avatar: "https://i.pravatar.cc/150?u=12", title: "Magical starry nights", experience: "Couple Trip", rating: 5, text: "Riding camels into the sunset felt like a movie. The food at the camp was delicious, and sitting by the fire listening to traditional drum music was pure magic." },
            { id: 3, name: "Emma H.", avatar: "https://i.pravatar.cc/150?u=13", title: "Well organized but a long drive", experience: "Group of Friends", rating: 4, text: "The desert itself is 5/5, but be prepared for the long drive from Marrakech! The stops at Ait Ben Haddou and the Todra Gorges made it worthwhile though." }
        ],
        faqs: [
            { question: "Is it cold in the desert at night?", answer: "Yes! While daytime temperatures can be very hot, the desert cools down drastically after sunset. Bring layers, including a warm jacket for the evenings." },
            { question: "Are there toilets and showers at the desert camp?", answer: "Yes, our luxury camps are equipped with private en-suite bathrooms, including flushing toilets and hot showers." },
            { question: "Is the camel ride difficult?", answer: "The camel ride lasts about 1-1.5 hours to reach the camp. It's a gentle pace, but you can opt for a 4x4 transfer to the camp if you prefer." }
        ]
    },
    'marrakech-medina-tour': {
        reviews: [
            { id: 1, name: "Claire D.", avatar: "https://i.pravatar.cc/150?u=21", title: "Couldn't have done it without a guide", experience: "Couple Trip", rating: 5, text: "The medina is a maze! Our guide navigated it effortlessly, showing us artisan workshops we would have never found on our own. No pressure to buy anything either." },
            { id: 2, name: "James L.", avatar: "https://i.pravatar.cc/150?u=22", title: "Fascinating history", experience: "Solo Traveler", rating: 5, text: "I learned so much about the architecture of Bahia Palace. The contrast between the chaotic souks and the peaceful courtyards is amazing." },
            { id: 3, name: "The Patel Family", avatar: "https://i.pravatar.cc/150?u=23", title: "Great introduction to the city", experience: "Family Vacation", rating: 5, text: "A fantastic half-day overview. The guide kept our teenagers engaged the whole time, especially during the spice market tour." }
        ],
        faqs: [
            { question: "Do we need to pay for entrance tickets?", answer: "Entrance fees to the Bahia Palace are included in the tour price. Personal shopping and gratuities are not." },
            { question: "Is the walking strenuous?", answer: "The walk is on flat ground but lasts several hours. Comfortable walking shoes are highly recommended." },
            { question: "Can we customize the stops?", answer: "Yes, since this is a private tour, let your guide know if you want to spend more time in the souks or focus more on the historical sites." }
        ]
    },
    'atlas-mountains-trek': {
        reviews: [
            { id: 1, name: "David R.", avatar: "https://i.pravatar.cc/150?u=31", title: "Breathtaking scenery", experience: "Solo Traveler", rating: 5, text: "The views from the Tizi Mzik pass were unreal. The hike was challenging but rewarding. The Berber hospitality in Azzaden valley was the highlight." },
            { id: 2, name: "Anna K.", avatar: "https://i.pravatar.cc/150?u=32", title: "Authentic and peaceful", experience: "Couple Trip", rating: 5, text: "A great escape from the busy city. The gite we stayed in was basic but very clean and authentic. The fresh mountain food was delicious." },
            { id: 3, name: "Mark T.", avatar: "https://i.pravatar.cc/150?u=33", title: "Good trek, pack light!", experience: "Group of Friends", rating: 4, text: "Great experience with a knowledgeable mountain guide. Mules carry the heavy luggage, but definitely bring a good daypack and proper hiking boots." }
        ],
        faqs: [
            { question: "What level of fitness is required?", answer: "This is a moderate trek. You should be in good health and comfortable walking 5-6 hours a day on uneven, sometimes steep paths." },
            { question: "What should I pack?", answer: "Bring sturdy hiking boots, layers (it gets cold at night), sun protection, a reusable water bottle, and a daypack. Your main luggage will be carried by mules." },
            { question: "Are vegetarian meals available?", answer: "Absolutely. The traditional Berber diet includes many delicious vegetarian options. Just let us know in advance." }
        ]
    },
    'traditional-henna-art-session': {
        reviews: [
            { id: 1, name: "Chloe M.", avatar: "https://i.pravatar.cc/150?u=41", title: "Beautiful artistry", experience: "Solo Traveler", rating: 5, text: "The Nakacha was so talented. She designed a beautiful, intricate floral pattern on my hands. The riad setting was incredibly peaceful." },
            { id: 2, name: "Mia & Sarah", avatar: "https://i.pravatar.cc/150?u=42", title: "Fun cultural afternoon", experience: "Group of Friends", rating: 5, text: "We loved learning about the history of Henna and the meaning behind the symbols. The mint tea and pastries were a lovely touch!" },
            { id: 3, name: "Jessica T.", avatar: "https://i.pravatar.cc/150?u=43", title: "Safe and hygienic", experience: "Family Vacation", rating: 5, text: "I was worried about 'black henna' allergies, but they use 100% natural, organic brown henna here. It smells earthy and beautiful, and fades naturally." }
        ],
        faqs: [
            { question: "How long does the henna take to dry?", answer: "Natural henna takes about 30-45 minutes to dry on the skin. You should leave the paste on for a few hours before gently scraping it off." },
            { question: "How long will the design last?", answer: "Depending on where it is applied and how often you wash the area, natural henna typically lasts 1 to 2 weeks." },
            { question: "Do you use chemical 'black henna'?", answer: "Never. We strictly use 100% natural, organic henna powder mixed with water and essential oils for safety and authenticity." }
        ]
    },
    'moroccan-cooking-msemen-briwate': {
        reviews: [
            { id: 1, name: "Pierre G.", avatar: "https://i.pravatar.cc/150?u=51", title: "Delicious and fun!", experience: "Couple Trip", rating: 5, text: "Learning to fold the Msemen dough was harder than it looks, but our host family was so patient and encouraging. The food we made was the best we ate in Fes!" },
            { id: 2, name: "Maria V.", avatar: "https://i.pravatar.cc/150?u=52", title: "A true local experience", experience: "Solo Traveler", rating: 5, text: "This wasn't a commercial kitchen; we were literally cooking in the host family's home in the medina. It felt incredibly warm and welcoming." },
            { id: 3, name: "John D.", avatar: "https://i.pravatar.cc/150?u=53", title: "Great recipes to take home", experience: "Family Vacation", rating: 5, text: "We had a blast making the Briwates. They gave us the written recipes afterwards so we can try making them back home." }
        ],
        faqs: [
            { question: "Do I need prior cooking experience?", answer: "Not at all! This class is designed for all skill levels, and the host family will guide you step-by-step." },
            { question: "Can you accommodate food allergies?", answer: "Yes, please inform us of any allergies or dietary restrictions (like gluten-free or vegan) at the time of booking so the family can prepare." },
            { question: "Do we get to eat what we cook?", answer: "Yes! The class concludes with a shared feast where you will enjoy everything you've prepared, accompanied by traditional Moroccan mint tea." }
        ]
    },
    'moroccan-celebration-sbou-wedding': {
        reviews: [
            { id: 1, name: "Emily W.", avatar: "https://i.pravatar.cc/150?u=61", title: "Once in a lifetime", experience: "Solo Traveler", rating: 5, text: "I felt so honored to be invited to a real Sbou (naming ceremony). The music, the dancing, the incredible outfits... it was an unforgettable night." },
            { id: 2, name: "The Garcia Family", avatar: "https://i.pravatar.cc/150?u=62", title: "Incredible hospitality", experience: "Family Vacation", rating: 5, text: "The family welcomed us like we were their own relatives. Dressing up in the traditional Kaftans made us feel fully immersed in the culture." },
            { id: 3, name: "Laura B.", avatar: "https://i.pravatar.cc/150?u=63", title: "Amazing food and music", experience: "Couple Trip", rating: 5, text: "The amount of food was sensational—pastillas, tagines, and sweets! The live Chaabi music kept everyone dancing until the early hours." }
        ],
        faqs: [
            { question: "What is a 'Sbou'?", answer: "A Sbou is a traditional Moroccan naming ceremony and celebration held a week after a baby is born. It involves music, feasting, and gathering of family and friends." },
            { question: "Are we intruding on a private family event?", answer: "No, in Moroccan culture, guests are considered a blessing. The host families partner with us and eagerly welcome international guests to share their joy." },
            { question: "Do I need to buy a gift?", answer: "Gifts are entirely optional. Your presence and respectful participation are the greatest gifts. If you wish to bring something, sweets or a small toy for children are appreciated." }
        ]
    },
    'chefchaouen-blue-pearl-walk': {
        reviews: [
            { id: 1, name: "Rachel S.", avatar: "https://i.pravatar.cc/150?u=71", title: "A photographer's paradise", experience: "Solo Traveler", rating: 5, text: "Every corner of Chefchaouen is a photo opportunity. Our guide knew all the secret, quiet spots away from the main tourist crowds." },
            { id: 2, name: "Carlos M.", avatar: "https://i.pravatar.cc/150?u=72", title: "Relaxing and beautiful", experience: "Couple Trip", rating: 5, text: "Chefchaouen has a much more relaxed vibe than Marrakech or Fes. The hike up to the Spanish Mosque for sunset was the perfect end to the day." },
            { id: 3, name: "Jenny L.", avatar: "https://i.pravatar.cc/150?u=73", title: "Great local insights", experience: "Group of Friends", rating: 5, text: "The goat cheese tasting was a surprising highlight! The guide explained the history of why the city was painted blue, which was fascinating." }
        ],
        faqs: [
            { question: "Why is the city painted blue?", answer: "There are several theories. Some say it was painted blue by Jewish refugees who settled there to represent the sky and heaven; others believe the blue repels mosquitoes." },
            { question: "Are there a lot of stairs?", answer: "Yes, Chefchaouen is built on the side of a mountain. The medina is full of steep, winding staircases and cobbled paths, so comfortable shoes are essential." },
            { question: "Can we buy authentic souvenirs here?", answer: "Yes! Chefchaouen is famous for its unique wool garments, woven blankets, and local goat cheese. Your guide can point you to authentic artisan shops." }
        ]
    },
    'essaouira-coastal-retreat': {
        reviews: [
            { id: 1, name: "Oliver P.", avatar: "https://i.pravatar.cc/150?u=81", title: "Fresh sea breeze and great seafood", experience: "Couple Trip", rating: 5, text: "Essaouira is stunning. Walking the ramparts where Game of Thrones was filmed was very cool. The grilled fish lunch at the port was the freshest I've ever had." },
            { id: 2, name: "Hannah F.", avatar: "https://i.pravatar.cc/150?u=82", title: "Artsy and laid back", experience: "Solo Traveler", rating: 5, text: "I loved the artistic, bohemian vibe of the medina. It's much smaller and easier to navigate than the bigger cities. Great local music scene too." },
            { id: 3, name: "Mark W.", avatar: "https://i.pravatar.cc/150?u=83", title: "Very windy!", experience: "Family Vacation", rating: 4, text: "They don't call it the 'Wind City of Africa' for nothing! It was a bit too windy for the beach, but the historical tour and the Thuya wood workshops were fantastic." }
        ],
        faqs: [
            { question: "Is the beach suitable for swimming?", answer: "While you can swim, Essaouira is notoriously windy (which makes it a world-class spot for kitesurfing). The water can be chilly, so it's better for water sports or beach walks." },
            { question: "What is Thuya wood?", answer: "Thuya is a rare, aromatic wood native to the Essaouira region. The local artisans are famous for carving intricate boxes and furniture from its burl." },
            { question: "Is lunch included?", answer: "Yes, a freshly grilled seafood lunch at a local spot near the port is included in the tour experience." }
        ]
    },
    'fes-el-bali-time-travel': {
        reviews: [
            { id: 1, name: "Antoine H.", avatar: "https://i.pravatar.cc/150?u=91", title: "Like wandering into the Middle Ages", experience: "Solo Traveler", rating: 5, text: "Fes is mind-blowing. Our guide navigated the 9,000 alleyways with ease. Seeing the leather tanneries and hearing the call to prayer was surreal." },
            { id: 2, name: "Julia K.", avatar: "https://i.pravatar.cc/150?u=92", title: "Incredible history", experience: "Couple Trip", rating: 5, text: "The architecture of the Madrasas is stunning. Our guide was truly an expert historian who passionately explained the nuances of Islamic art and Moroccan history." },
            { id: 3, name: "Sam & Lily", avatar: "https://i.pravatar.cc/150?u=93", title: "Sensory overload in the best way", experience: "Group of Friends", rating: 5, text: "Donkeys carrying goods, the smell of spices, the sound of copper beaters... it is a sensory overload. Bring mint leaves for the tanneries!" }
        ],
        faqs: [
            { question: "Will we get lost in the medina?", answer: "Fes El Bali has over 9,000 alleys and no cars. It is notoriously easy to get lost, which is exactly why this tour is led by an official, expert local guide." },
            { question: "Do the tanneries smell bad?", answer: "The traditional tanning process uses natural ingredients, which does create a strong odor. We provide fresh mint sprigs to hold to your nose while viewing!" },
            { question: "Are we expected to buy carpets or leather?", answer: "Our tours are focused on history and culture, not forced shopping. While you will see artisanal work, there is absolutely no pressure to purchase anything." }
        ]
    },
    'agadir-surf-sun-experience': {
        reviews: [
            { id: 1, name: "Ben C.", avatar: "https://i.pravatar.cc/150?u=121", title: "Epic waves, great coaching", experience: "Solo Traveler", rating: 5, text: "I was a total beginner, but the instructors at Taghazout were so patient. I actually stood up on the board by the end of the lesson! Awesome vibe." },
            { id: 2, name: "Lisa R.", avatar: "https://i.pravatar.cc/150?u=122", title: "Perfect beach day", experience: "Group of Friends", rating: 5, text: "Even if you don't surf, the beach is beautiful. Half our group surfed, the other half relaxed and did a camel ride. The beachside lunch was fantastic." },
            { id: 3, name: "Miguel T.", avatar: "https://i.pravatar.cc/150?u=123", title: "Great gear and location", experience: "Couple Trip", rating: 4, text: "The wetsuits and boards provided were in excellent condition. Taghazout is definitely the surf capital of Morocco." }
        ],
        faqs: [
            { question: "Do I need to be a strong swimmer?", answer: "Yes, for safety reasons you need to be a confident swimmer to participate in the surf lesson. Beginners will stay in shallower waters, however." },
            { question: "Is equipment provided?", answer: "Everything is included: high-quality surfboards suited to your skill level, and wetsuits to keep you comfortable in the Atlantic waters." },
            { question: "What if I just want to watch?", answer: "Non-surfers are welcome! You can relax on the beach, watch your friends/family, and enjoy the included lunch and optional camel ride." }
        ]
    },
    'ouarzazate-cinematic-history': {
        reviews: [
            { id: 1, name: "Kevin B.", avatar: "https://i.pravatar.cc/150?u=131", title: "Hollywood of Africa", experience: "Family Vacation", rating: 5, text: "My kids loved seeing the sets from Gladiator and Asterix. The studios are massive! Kasbah Taourirt was also fascinating to explore." },
            { id: 2, name: "Nadia M.", avatar: "https://i.pravatar.cc/150?u=132", title: "Great half-day excursion", experience: "Solo Traveler", rating: 5, text: "A perfect stop on the way to the desert. The studio guide had great anecdotes about movie stars filming in the harsh Moroccan heat." },
            { id: 3, name: "Chris P.", avatar: "https://i.pravatar.cc/150?u=133", title: "Interesting contrast", experience: "Couple Trip", rating: 4, text: "It's a bizarre but fascinating mix of real, ancient Kasbah history and fake movie set history. Very photogenic." }
        ],
        faqs: [
            { question: "What movies were filmed here?", answer: "Ouarzazate has hosted Gladiator, Lawrence of Arabia, The Mummy, Game of Thrones, Kingdom of Heaven, and many more." },
            { question: "Are we allowed to touch the movie sets?", answer: "Yes, you can walk through and interact with many of the abandoned sets, making for incredible photos." },
            { question: "Is the Kasbah authentic?", answer: "Yes! While the studios are sets, the Kasbah Taourirt is a genuine, sprawling 19th-century palace built by the powerful Glaoui family." }
        ]
    },
    'meknes-imperial-heritage': {
        reviews: [
            { id: 1, name: "Helen G.", avatar: "https://i.pravatar.cc/150?u=141", title: "A hidden gem", experience: "Couple Trip", rating: 5, text: "Meknes is so much more relaxed than Fes. Bab Mansour is stunning, and the royal granaries (Heri es-Souani) are massive and eerie." },
            { id: 2, name: "Thomas K.", avatar: "https://i.pravatar.cc/150?u=142", title: "Fascinating history", experience: "Solo Traveler", rating: 5, text: "Sultan Moulay Ismail's history is intense! The guide was excellent at bringing the 17th-century ruins to life." },
            { id: 3, name: "Fiona C.", avatar: "https://i.pravatar.cc/150?u=143", title: "Glad we did Volubilis", experience: "Group of Friends", rating: 5, text: "We opted for the transfer to Volubilis afterwards. Seeing intact Roman ruins in Morocco was unexpected and amazing." }
        ],
        faqs: [
            { question: "How does Meknes compare to Fes or Marrakech?", answer: "Meknes is one of the four Imperial Cities but is much quieter and less touristy. It offers a more relaxed pace while still boasting monumental architecture." },
            { question: "Is Volubilis included?", answer: "This specific half-day tour focuses on Meknes. However, an optional transfer to the nearby Roman ruins of Volubilis can be easily arranged with your guide." },
            { question: "Is the Mausoleum open to non-Muslims?", answer: "Yes, the Mausoleum of Moulay Ismail is one of the few Islamic shrines in Morocco that respectfully dressed non-Muslims are permitted to enter." }
        ]
    },
    'rabat-capital-explorer': {
        reviews: [
            { id: 1, name: "Daniel E.", avatar: "https://i.pravatar.cc/150?u=151", title: "Clean, elegant, historic", experience: "Couple Trip", rating: 5, text: "Rabat surprised us! It's very clean and modern, but places like the Chellah ruins and the Kasbah of the Udayas are deeply historic and beautiful." },
            { id: 2, name: "Amira N.", avatar: "https://i.pravatar.cc/150?u=152", title: "Beautiful Kasbah", experience: "Family Vacation", rating: 5, text: "Wandering through the blue and white streets of the Udayas Kasbah felt like being in a different country. The views of the ocean are spectacular." },
            { id: 3, name: "Paul W.", avatar: "https://i.pravatar.cc/150?u=153", title: "Very informative guide", experience: "Solo Traveler", rating: 5, text: "Hassan Tower and the Mausoleum are breathtaking. The guide gave a fantastic overview of Morocco's modern and ancient royal history." }
        ],
        faqs: [
            { question: "What is the Chellah?", answer: "The Chellah is a medieval fortified necropolis built on top of ancient Roman city ruins, known for its overgrown gardens and resident storks." },
            { question: "Is Rabat safe to walk around?", answer: "Rabat is the administrative capital and is widely considered one of the safest and cleanest major cities in Morocco." },
            { question: "What should we wear to the Mausoleum?", answer: "As it is a royal tomb, respectful attire is required. Shoulders and knees must be covered for all visitors." }
        ]
    },
    'tanger-gateway-to-africa': {
        reviews: [
            { id: 1, name: "Javier M.", avatar: "https://i.pravatar.cc/150?u=161", title: "A mix of two worlds", experience: "Solo Traveler", rating: 5, text: "You can feel the blend of Spanish, French, and Moroccan culture everywhere. The Caves of Hercules and the views at Cap Spartel were stunning." },
            { id: 2, name: "Diana S.", avatar: "https://i.pravatar.cc/150?u=162", title: "Cosmopolitan and vibrant", experience: "Couple Trip", rating: 5, text: "Loved walking through the Kasbah and having mint tea at Café Hafa overlooking the coast of Spain. Tanger has a really unique literary history." },
            { id: 3, name: "Omar H.", avatar: "https://i.pravatar.cc/150?u=163", title: "Great introduction to Morocco", experience: "Group of Friends", rating: 4, text: "We took the ferry from Spain for the day. This tour was perfectly timed to see the highlights before we had to catch the boat back." }
        ],
        faqs: [
            { question: "Can you really see Spain from Tanger?", answer: "Yes! On a clear day, you can easily see the coast of Andalusia, Spain, across the Strait of Gibraltar from Cap Spartel or the Kasbah." },
            { question: "What are the Caves of Hercules?", answer: "They are archaeological caves located near Cap Spartel. Legend says Hercules slept here. The sea window is famously shaped like the map of Africa." },
            { question: "Is this tour suitable for ferry day-trippers?", answer: "Absolutely. The itinerary is flexible and we frequently accommodate visitors arriving from Spain on the morning ferry." }
        ]
    },
    'amazigh-cultural-immersion': {
        reviews: [
            { id: 1, name: "Yuki T.", avatar: "https://i.pravatar.cc/150?u=171", title: "Deeply authentic and moving", experience: "Solo Traveler", rating: 5, text: "Meeting the Amazigh women matching at the cooperative and seeing how hard they work to produce Argan oil was humbling. The tagine at the family home was the best I've ever had." },
            { id: 2, name: "Greg & Pam", avatar: "https://i.pravatar.cc/150?u=172", title: "Highlight of our Agadir stay", experience: "Couple Trip", rating: 5, text: "It was so nice to get out of the touristy resort area and see the real Morocco. The people in the village were incredibly welcoming." },
            { id: 3, name: "Nour F.", avatar: "https://i.pravatar.cc/150?u=173", title: "Great cultural exchange", experience: "Family Vacation", rating: 5, text: "Our kids got to play with the local village children. Communicating through smiles and sharing fresh bread was a beautiful experience." }
        ],
        faqs: [
            { question: "Who are the Amazigh?", answer: "The Amazigh (commonly referred to as Berbers) are the indigenous people of North Africa, predating the Arab arrival, with their own rich language, culture, and traditions." },
            { question: "Is the Argan Oil cooperative ethical?", answer: "Yes. We strictly partner with Fair Trade women's cooperatives that ensure the profits go directly to the rural women performing the labor." },
            { question: "Can I take photos of the local people?", answer: "Always ask permission first. While the host family is very open, many rural Moroccans prefer not to be photographed. Your guide will help navigate this." }
        ]
    }
};

const jsPath = 'src/app/lib/toursActivitiesLib.js';
let jsContent = fs.readFileSync(jsPath, 'utf8');

for (const slug of Object.keys(tourData)) {
    const searchSlug = "slug: '" + slug + "'";
    const slugIndex = jsContent.indexOf(searchSlug);
    if (slugIndex !== -1) {
        // Find the start of the reviewsList array for this specific slug
        const reviewsStart = jsContent.indexOf('reviewsList: [', slugIndex);
        const reviewsEnd = jsContent.indexOf('],', reviewsStart) + 2;

        // Find the start of the faqs array for this specific slug
        const faqsStart = jsContent.indexOf('faqs: [', reviewsEnd);
        const faqsEnd = jsContent.indexOf(']\\n  }', faqsStart) + 1; // Try \n
        let fEnd = faqsEnd;
        if (fEnd === 0) {
            fEnd = jsContent.indexOf(']\\r\\n  }', faqsStart) + 1;
        }
        if (fEnd === 0) {
            fEnd = jsContent.indexOf(']', faqsStart) + 1;
            // Fallback just matching ']' which might be fine since it's the end of the array
        }

        if (reviewsStart !== -1 && faqsStart !== -1) {
            const newReviewsStr = "reviewsList: " + JSON.stringify(tourData[slug].reviews, null, 8).replace(/\\n/g, '\\n    ') + ",";
            const newFaqsStr = "faqs: " + JSON.stringify(tourData[slug].faqs, null, 8).replace(/\\n/g, '\\n    ');

            let endIdx = jsContent.indexOf(']', faqsStart) + 1;

            // Reconstruct the file content by replacing the old blocks with the new blocks
            jsContent = jsContent.substring(0, reviewsStart) +
                newReviewsStr +
                '\\n    ' +
                newFaqsStr +
                jsContent.substring(endIdx);
        }
    }
}

fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('Successfully injected specific reviews and FAQs into toursActivitiesLib.js');
