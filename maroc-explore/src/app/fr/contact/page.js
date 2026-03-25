import Header from '@/app/components/Header';
import Testimonials from '@/app/components/Testimonials';
import FAQ from '@/app/components/FAQ';
import styles from './Contact.module.css';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
    title: 'Contactez-nous - Maroc Explore',
    description: 'Get in touch with Maroc Explorez for any inquiries, custom tour requests, or support. We are here to help you plan your perfect Moroccan adventure.',
};

export default function ContactPage() {
    const contactTestimonials = [
        {
            id: 1,
            name: "Sophia Martinez",
            location: "Madrid, Spain",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            title: 'Processus de réservation fluide',
            text: "Dès mon tout premier e-mail, l\'équipe a été incroyablement réactive.",
            experience: "Custom 10-Day Grand Tour"
        },
        {
            id: 2,
            name: "James Wilson",
            location: "London, UK",
            avatar: "https://randomuser.me/api/portraits/men/67.jpg",
            title: 'Support client exceptionnel 24/7',
            text: "Nous avons eu un changement de dernière minute et l\'équipe a géré les ajustements des transferts en quelques minutes.",
            experience: "Sahara Desert Expedition"
        }
    ];

    const contactFaqs = [
        {
            question: "Dans quel délai recevrai-je une réponse à ma demande ?",
            answer: "Nous nous efforçons de répondre à toutes les demandes dans un délai de 12 à 24 heures."
        },
        {
            question: "Le paiement de ma réservation est-il sécurisé ?",
            answer: "Oui. Une fois votre itinéraire approuvé, nous demandons un acompte de 30% via un lien sécurisé."
        },
        {
            question: "Puis-je personnaliser les circuits répertoriés sur le site ?",
            answer: "Absolument ! Chaque détail de votre voyage peut être personnalisé."
        }
    ];

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Contactez-nous</h1>
                    <p>Prêt pour l\'aventure ? Nos experts locaux sont à votre disposition pour vous aider.</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <h2>Commençons à Planifier</h2>
                        <p>Contactez-nous via l\'un de ces canaux. Notre équipe est disponible 24/7 pour vous assister.</p>

                        <div className={styles.infoItems}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3>Téléphone / WhatsApp</h3>
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
                                    <h3>Bureau</h3>
                                    <p>Marrakech Medina, Morocco</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3>Heures d\'Ouverture</h3>
                                    <p>Lun - Dim : Support 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactFormWrapper}>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Nom Complet</label>
                                <input type="text" placeholder="John Doe" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Adresse Email</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Sujet</label>
                                <select>
                                    <option>Demande de Circuit</option>
                                    <option>Custom Itinéraire</option>
                                    <option>Support de Réservation</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Message</label>
                                <textarea placeholder="Comment pouvons-nous vous aider à planifier votre aventure marocaine ?" rows="5" required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>Envoyer le Message</button>
                        </form>
                    </div>
                </div>

            </div>

            <Testimonials
                customTestimonials={contactTestimonials}
                title="Excellence du Service"
                subtitle="Réserver avec Nous"
            />
            <FAQ
                customFaqs={contactFaqs}
                title="FAQ de Réservation & Support"
                subtitle="Questions courantes sur la planification de votre voyage."
            />
        </div>
    );
}
