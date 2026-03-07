const fs = require('fs');

// 1. Update toursActivitiesLib.js
const libPath = 'src/app/lib/toursActivitiesLib.js';
let libContent = fs.readFileSync(libPath, 'utf8');

// A function to generate random but contextual reviews and FAQs based on tour details
function generateTourData(slug, title, location, category) {
    const avatars = [
        'https://i.pravatar.cc/150?u=1',
        'https://i.pravatar.cc/150?u=2',
        'https://i.pravatar.cc/150?u=3',
        'https://i.pravatar.cc/150?u=4',
        'https://i.pravatar.cc/150?u=5',
    ];

    const getReviewText = (cat) => {
        if (cat === 'desert') return `The ${title} was unbelievable. The dunes and the starry nights were a dream come true. Highly recommend!`;
        if (cat === 'city') return `Exploring ${location} during the ${title} gave me a whole new perspective on the rich Moroccan culture.`;
        if (cat === 'mountains') return `Breathtaking views and amazing local guides on the ${title}. It was physically rewarding and culturally enriching.`;
        if (cat === 'beach') return `Relaxing, beautiful weather, and the best activities in ${location}. A perfect escape.`;
        return `An absolute must-do when in Morocco! The organization of the ${title} was flawless and our guide was superb.`;
    };

    const getFaq = (cat) => {
        let faqs = [];
        faqs.push({ question: "What should I wear for this tour?", answer: "We recommend comfortable, modest clothing as per local customs, and good walking shoes." });

        if (cat === 'desert' || cat === 'mountains') {
            faqs.push({ question: "Do I need to be extremely fit for this?", answer: "A moderate level of fitness is recommended, but our guides go at a comfortable pace for everyone in the group." });
            faqs.push({ question: "Is it cold at night?", answer: "Yes, temperatures can drop significantly after sunset. Please bring layers!" });
        } else {
            faqs.push({ question: "Are meals included?", answer: "Please check the 'What's Included' section above. We usually accommodate dietary restrictions if informed beforehand." });
            faqs.push({ question: "Is the tour suitable for young children?", answer: "Absolutely! This tour is family-friendly and the pace is relaxed." });
        }
        return faqs;
    };

    const reviewsList = [
        { id: 1, name: "Sarah J.", avatar: avatars[0], title: "An absolute dream experience!", experience: "Couple Trip", rating: 5, text: getReviewText(category) },
        { id: 2, name: "Marco T.", avatar: avatars[1], title: "Authentic and well-paced", experience: "Solo Traveler", rating: 5, text: `We saw so much in ${location} without feeling rushed. Highly recommend Maroc Explore.` },
        { id: 3, name: "Elena R.", avatar: avatars[2], title: "Highlight of our trip", experience: "Family Vacation", rating: 5, text: `The ${title} exceeded all our expectations. Every detail was perfectly organized.` }
    ];

    return { reviewsList, faqs: getFaq(category) };
}

// Extract objects using a regex. Since they are objects in an array, we can find them.
// A simpler way: just append to `excluded: [...]` line.
libContent = libContent.replace(/excluded: \[[^\]]+\]/g, (match, offset, str) => {
    // Extract the title and category if possible by looking backwards
    const textBefore = str.substring(Math.max(0, offset - 1000), offset);
    const slugMatch = textBefore.match(/slug:\s*'([^']+)'/);
    const titleMatch = textBefore.match(/title:\s*'([^']+)'/);
    const categoryMatch = textBefore.match(/category:\s*'([^']+)'/);
    const locationMatch = textBefore.match(/location:\s*'([^']+)'/);

    const slug = slugMatch ? slugMatch[1] : 'tour';
    const title = titleMatch ? titleMatch[1] : 'Tour';
    const category = categoryMatch ? categoryMatch[1] : 'cultural';
    const location = locationMatch ? locationMatch[1] : 'Morocco';

    const { reviewsList, faqs } = generateTourData(slug, title, location, category);

    const newDataStr = `\n    reviewsList: ${JSON.stringify(reviewsList, null, 4).replace(/\n/g, '\n    ')},\n    faqs: ${JSON.stringify(faqs, null, 4).replace(/\n/g, '\n    ')}`;

    return match + ',' + newDataStr;
});

fs.writeFileSync(libPath, libContent, 'utf8');
console.log('Successfully updated toursActivitiesLib.js with dynamic reviews and FAQs.');

// 2. Append CSS to TourTemplate.module.css
const cssPath = 'src/app/tours/components/TourTemplate.module.css';
const cssToAppend = `

/* Community Section CTA styling adapted for Tour Template */
.communityCta {
  text-align: center;
  padding: 60px 24px;
  background: white;
  border-top: 1px solid #e5e7eb;
  margin-top: 40px;
  border-radius: 12px;
}

.communityCta p {
  font-size: 18px;
  color: #4b5563;
  margin-bottom: 25px;
  font-weight: 400;
}

.communityCtaButton {
  background: #064e3b;
  color: white;
  border: none;
  padding: 16px 36px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 9999px;
}

.communityCtaButton:hover {
  background: #065f46;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(6, 95, 70, 0.4);
}

/* FAQ Section Styling */
.faqSection {
  padding: 60px 0;
  background: #ffffff;
  position: relative;
  margin-top: 40px;
  border-top: 1px solid #e5e7eb;
}

.faqContainer {
  max-width: 800px;
  margin: 0 auto;
}

.faqHeader {
  text-align: center;
  margin-bottom: 40px;
}

.faqSubtitle {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #059669;
  margin-bottom: 15px;
}

.faqTitle {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 300;
  color: #064e3b;
  margin-bottom: 15px;
  line-height: 1.2;
}

.faqDescription {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.8;
}

.faqList {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faqItem {
  border-bottom: 1px solid #f3f4f6;
  transition: all 0.3s ease;
}

.faqItemActive {
  border-bottom-color: #d1fae5;
}

.faqQuestion {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  background: none;
  border: none;
  font-size: 17px;
  font-weight: 600;
  color: #1f2937;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
}

.faqQuestion:hover {
  color: #065f46;
}

.faqQuestion svg {
  color: #9ca3af;
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-left: 20px;
}

.faqItemActive .faqQuestion svg {
  transform: rotate(180deg);
  color: #059669;
}

.faqAnswer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
}

.faqItemActive .faqAnswer {
  max-height: 500px;
  padding-bottom: 24px;
}

.faqAnswer p {
  font-size: 15px;
  line-height: 1.8;
  color: #4b5563;
  margin: 0;
}

/* Testimonials Navigation */
.testimonialNavigation {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.navDot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #d1d5db;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.navDot:hover {
  border-color: #059669;
}

.navDotActive {
  background: #059669;
  border-color: #059669;
  transform: scale(1.2);
}

/* Testimonials Grid Update for TourTemplate */
.testimonialsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

.testimonialCard {
  background: white;
  padding: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.testimonialCard:hover {
  border-color: #6ee7b7;
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.testimonialCardActive {
  border-color: #059669;
  background: #f0fdf4;
}

.testimonialCardHeader {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.testimonialCardAvatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonialCardMeta h5 {
  font-size: 15px;
  font-weight: 600;
  color: #064e3b;
  margin: 0 0 5px 0;
}

.testimonialCardRating {
  display: flex;
  gap: 2px;
  color: #00af87;
}

.testimonialCardPreview {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  line-height: 1.6;
  margin: 0 0 12px 0;
}

.testimonialCardExperience {
  font-size: 11px;
  font-weight: 600;
  color: #059669;
  text-transform: uppercase;
  letter-spacing: 1px;
}
`;

fs.appendFileSync(cssPath, cssToAppend, 'utf8');
console.log('Successfully appended CSS to TourTemplate.module.css');
