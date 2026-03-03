import Header from '../components/Header';
import styles from './Contact.module.css';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
    title: 'Contact Us - Maroc Explore',
    description: 'Get in touch with Maroc Explore for any inquiries, custom tour requests, or support. We are here to help you plan your perfect Moroccan adventure.',
};

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Get in Touch</h1>
                    <p>Have questions? We're here to help you plan your dream journey.</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <h2>Contact Information</h2>
                        <p>Reach out to us through any of these channels. Our team is available 24/7 to assist you.</p>

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
                                <textarea placeholder="How can we help you?" rows="5" required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
