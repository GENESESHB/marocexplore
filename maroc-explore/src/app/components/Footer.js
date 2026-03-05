'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>

                {/* Brand Section */}
                <div className={styles.footerBrand}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/images/logo-marocexplore-v2.png"
                            alt="Maroc Explore Logo"
                            width={180}
                            height={60}
                            className={styles.logoImage}
                            unoptimized={true}
                        />
                    </Link>
                    <p className={styles.brandDescription}>
                        Experience the authentic magic of Morocco. From the sweeping dunes of the Sahara to the bustling medinas, we craft unforgettable journeys tailored just for you.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="https://facebook.com" target="_blank" className={styles.socialIcon}><Facebook size={20} /></a>
                        <a href="https://instagram.com" target="_blank" className={styles.socialIcon}><Instagram size={20} /></a>
                        <a href="https://twitter.com" target="_blank" className={styles.socialIcon}><Twitter size={20} /></a>
                        <a href="https://wa.me/212675576139" target="_blank" className={styles.socialIcon}><MessageCircle size={20} /></a>
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
                    <div className={styles.twoColumnList}>
                        <ul className={styles.linkList} style={{ flex: 1 }}>
                            <li><Link href="/tours/sahara-desert-expedition">Sahara Desert Expedition</Link></li>
                            <li><Link href="/tours/marrakech-medina-tour">Marrakech Medina Tour</Link></li>
                            <li><Link href="/tours/atlas-mountains-trek">Atlas Mountains Trek</Link></li>
                            <li><Link href="/tours/chefchaouen-blue-pearl-walk">Chefchaouen Blue Pearl Walk</Link></li>
                            <li><Link href="/tours/fez-el-bali-time-travel">Fes El Bali Time Travel</Link></li>
                            <li><Link href="/tours/essaouira-coastal-retreat">Essaouira Coastal Retreat</Link></li>
                            <li><Link href="/tours/agadir-surf-sun-experience">Agadir Surf & Sun Experience</Link></li>
                        </ul>
                        <ul className={styles.linkList} style={{ flex: 1 }}>
                            <li><Link href="/tours/ouarzazate-cinematic-history">Ouarzazate Cinematic History</Link></li>
                            <li><Link href="/tours/meknes-imperial-heritage">Meknes Imperial Heritage</Link></li>
                            <li><Link href="/tours/rabat-capital-explorer">Rabat Capital Explorer</Link></li>
                            <li><Link href="/tours/traditional-henna-art-session">Traditional Henna Art Session</Link></li>
                            <li><Link href="/tours/moroccan-cooking-msemen-briwate">Moroccan Cooking: Msemen & Briwate</Link></li>
                            <li><Link href="/tours/moroccan-celebration-sbou-wedding">Moroccan Celebration: Sbou & Wedding</Link></li>
                            <li><Link href="/tours/amazigh-cultural-immersion">Amazigh Cultural Immersion</Link></li>
                        </ul>
                    </div>
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
                            <span>+212 675576139</span>
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
