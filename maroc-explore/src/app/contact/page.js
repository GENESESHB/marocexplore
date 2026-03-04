import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import styles from './Contact.module.css';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
    title: 'Contact Us - Maroc Explore',
    description: 'Get in touch with Maroc Explore for any inquiries, custom tour requests, or support. We are here to help you plan your perfect Moroccan adventure.',
};

export default function ContactPage() {
    const contactTestimonials = [
        {
            id: 1,
            name: "Sophia Martinez",
            location: "Madrid, Spain",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            title: "Seamless booking process",
            text: "From my very first email, the team was incredibly responsive. They customized our 10-day itinerary perfectly to fit our schedule and interests. The communication was flawless.",
            experience: "Custom 10-Day Grand Tour"
        },
        {
            id: 2,
            name: "James Wilson",
            location: "London, UK",
            avatar: "https://randomuser.me/api/portraits/men/67.jpg",
            title: "Exceptional customer support 24/7",
            text: "We had a last-minute change in our flight schedule, and the Maroc Explore team handled the riad and transfer adjustments within minutes. Truly reliable support.",
            experience: "Sahara Desert Expedition"
        }
    ];

    const contactFaqs = [
        {
            question: "How quickly will I get a response to my inquiry?",
            answer: "We aim to respond to all inquiries within 12-24 hours. Our local travel experts will review your request and provide a detailed, personalized initial itinerary."
        },
        {
            question: "Is my booking payment secure?",
            answer: "Yes. Once you approve your custom itinerary, we require a 30% deposit via a secure credit card link, PayPal, or bank transfer. The balance is settled upon arrival."
        },
        {
            question: "Can I customize the tours listed on the website?",
            answer: "Absolutely! Every single detail of your journey can be tailored. From accommodation level to specific cultural activities and routes, we build it your way."
        }
    ];

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Get in Touch</h1>
                    <p>Ready for an adventure? Our local experts are standing by to help you craft the perfect Moroccan journey.</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <h2>Let's Start Planning</h2>
                        <p>Reach out to us through any of these channels. Whether you want a complete 14-day grand tour or a quick weekend desert escape, our team is available 24/7 to assist you.</p>

                        <div className={styles.infoItems}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3>Phone / WhatsApp</h3>
                                    <p>+212 622283559</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>info@marocexplore.com</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3>Office</h3>
                                    <p>Marrakech Medina, Morocco</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3>Working Hours</h3>
                                    <p>Mon - Sun: 24/7 Support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactFormWrapper}>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Subject</label>
                                <select>
                                    <option>Tour Inquiry</option>
                                    <option>Custom Itinerary</option>
                                    <option>Booking Support</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Message</label>
                                <textarea placeholder="How can we help you plan your ideal Moroccan adventure?" rows="5" required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>Send Message</button>
                        </form>
                    </div>
                </div>

            </div>

            <Testimonials
                customTestimonials={contactTestimonials}
                title="Service Excellence"
                subtitle="Booking with Us"
            />
            <FAQ
                customFaqs={contactFaqs}
                title="Booking & Support FAQ"
                subtitle="Common questions about planning your trip."
            />
        </div>
    );
}
