'use client';

import { useState } from 'react';
import styles from './TourTemplate.module.css';

export default function BookingForm({ tourTitle, price }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        travelers: 1,
        message: ''
    });

    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSoumettre = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            console.log('Booking submitted:', { tourTitle, ...formData });

            // Reset form on success (optional)
            setTimeout(() => {
                setStatus('idle');
                setFormData({
                    name: '', email: '', phone: '', date: '', travelers: 1, message: ''
                });
            }, 3000);
        }, 1500);
    };

    return (
        <div suppressHydrationWarning className={styles.bookingFormContainer}>
            <h3 className={styles.bookingFormTitle}>Réserver ce Circuit</h3>

            <div suppressHydrationWarning className={styles.priceContainer}>
                <span className={styles.priceValue}>€{price}</span>
                <span className={styles.priceUnit}>par personne</span>
            </div>

            <form onSubmit={handleSoumettre} className={styles.form}>
                <div suppressHydrationWarning className={styles.formGroup}>
                    <label>Circuit</label>
                    <input
                        type="text"
                        value={tourTitle}
                        disabled
                        className={styles.disabledInput}
                    />
                </div>

                <div suppressHydrationWarning className={styles.formGroup}>
                    <label htmlFor="date">Date de Voyage *</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>

                <div suppressHydrationWarning className={styles.formGroup}>
                    <label htmlFor="travelers">Nombre de Voyageurs *</label>
                    <input
                        type="number"
                        id="travelers"
                        name="travelers"
                        min="1"
                        max="20"
                        required
                        value={formData.travelers}
                        onChange={handleChange}
                    />
                </div>

                <div suppressHydrationWarning className={styles.formGroup}>
                    <label htmlFor="name">Nom Complet *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div suppressHydrationWarning className={styles.formGroup}>
                    <label htmlFor="email">Adresse Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div suppressHydrationWarning className={styles.formGroup}>
                    <label htmlFor="phone">Téléphone / WhatsApp</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div suppressHydrationWarning className={styles.formGroup}>
                    <label htmlFor="message">Besoins Particuliers (Optionnel)</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="3"
                        placeholder="Besoins alimentaires, accessibilité, etc."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'submitting' || status === 'success'}
                >
                    {status === 'submitting' ? 'Traitement en cours...' : status === 'success' ? 'Demande Envoyée !' : 'Vérifier la Disponibilité'}
                </button>

                {status === 'success' && (
                    <div suppressHydrationWarning className={styles.successMessage}>
                        Merci ! Nous avons bien reçu votre demande et nous vous contacterons sous peu pour confirmer la disponibilité.
                    </div>
                )}

                <p className={styles.noChargeText}>Vous ne serez pas débité pour le moment.</p>
            </form>
        </div>
    );
}
