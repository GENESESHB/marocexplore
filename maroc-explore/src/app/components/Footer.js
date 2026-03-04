'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>

                {/* Brand Section */}
                <div className={styles.footerBrand}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIconWrapper}>
                            <Compass className={styles.logoIcon} />
                        </div>
                        <div className={styles.logoText}>
                            <span className={styles.logoTitle}>MAROC<span className={styles.logoHighlight}>EXPLORE</span></span>
                        </div>
                    </Link>
                    <p className={styles.brandDescription}>
                        Experience the authentic magic of Morocco. From the sweeping dunes of the Sahara to the bustling medinas, we craft unforgettable journeys tailored just for you.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialIcon}><Facebook size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className={styles.footerLinks}>
                    <h3 className={styles.footerHeading}>Quick Links</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/destinations">Destinations</Link></li>
                        <li><Link href="/tours">All Tours</Link></li>
                        <li><Link href="/experiences">Experiences</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                    </ul>
                </div>

                {/* Popular Tours Section */}
                <div className={styles.footerLinks}>
                    <h3 className={styles.footerHeading}>Popular Tours</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/filter?category=desert">Sahara Desert Expeditions</Link></li>
                        <li><Link href="/tours/atlas-mountains-trek">Atlas Mountains Treks</Link></li>
                        <li><Link href="/filter?category=city">Imperial Cities Tour</Link></li>
                        <li><Link href="/filter?destination=essaouira">Essaouira Day Trip</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className={styles.footerContact}>
                    <h3 className={styles.footerHeading}>Contact Us</h3>
                    <ul className={styles.contactList}>
                        <li>
                            <MapPin size={18} className={styles.contactIcon} />
                            <span>123 Medina Street, Marrakech, Morocco</span>
                        </li>
                        <li>
                            <Phone size={18} className={styles.contactIcon} />
                            <span>+212 622283559</span>
                        </li>
                        <li>
                            <Mail size={18} className={styles.contactIcon} />
                            <span>hello@marocexplore.com</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomContent}>
                    <p>&copy; {new Date().getFullYear()} Maroc Explore. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
