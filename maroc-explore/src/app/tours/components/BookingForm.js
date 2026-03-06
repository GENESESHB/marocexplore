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

    const handleSubmit = (e) => {
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
        <div className={styles.bookingFormContainer}>
            <h3 className={styles.bookingFormTitle}>Book this Tour</h3>

            <div className={styles.priceContainer}>
                <span className={styles.priceValue}>€{price}</span>
                <span className={styles.priceUnit}>per person</span>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Tour</label>
                    <input
                        type="text"
                        value={tourTitle}
                        disabled
                        className={styles.disabledInput}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="date">Travel Date *</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="travelers">Number of Travelers *</label>
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

                <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
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

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
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

                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Special Requirements (Optional)</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="3"
                        placeholder="Dietary needs, accessibility requirements, etc."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'submitting' || status === 'success'}
                >
                    {status === 'submitting' ? 'Processing...' : status === 'success' ? 'Request Sent!' : 'Check Availability'}
                </button>

                {status === 'success' && (
                    <div className={styles.successMessage}>
                        Thank you! We have received your request and will contact you shortly to confirm availability.
                    </div>
                )}

                <p className={styles.noChargeText}>You won&apos;t be charged yet.</p>
            </form>
        </div>
    );
}
