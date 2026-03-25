const fs = require('fs');
const path = require('path');

const footerPath = path.join(__dirname, 'src', 'app', 'components', 'Footer.js');
let footerContent = fs.readFileSync(footerPath, 'utf8');

// We will inject the usePathname and translatePath logic
const newFooterContent = `'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { translatePath } from '@/app/lib/routeMapper';
import styles from './Footer.module.css';

const Footer = () => {
    const pathname = usePathname();
    const isFrench = pathname?.startsWith('/fr');

    const t = (path) => translatePath(path, isFrench ? 'fr' : 'en');

    return (
        <footer className={styles.footer}>
            <div suppressHydrationWarning className={styles.footerContainer}>

                {/* Brand Section */}
                <div suppressHydrationWarning className={styles.footerBrand}>
                    <Link href={t("/")} className={styles.logo}>
                        <Image
                            src="/images/logo-marocexplore-v2.png"
                            alt="Maroc Explore Logo"
                            width={60}
                            height={60}
                            className={styles.logoImage}
                            unoptimized={true}
                        />
                        <span className={styles.logoText}>Maroc Explore</span>
                    </Link>
                    <p className={styles.brandDescription}>
                        {isFrench 
                          ? "Vivez la magie authentique du Maroc. Des dunes majestueuses du Sahara aux médinas animées, nous créons des voyages inoubliables sur mesure pour vous."
                          : "Experience the authentic magic of Morocco. From the sweeping dunes of the Sahara to the bustling medinas, we craft unforgettable journeys tailored just for you."}
                    </p>
                    <div suppressHydrationWarning className={styles.socialLinks}>
                        <a href="https://facebook.com" target="_blank" className={styles.socialIcon}><Facebook size={20} /></a>
                        <a href="https://instagram.com" target="_blank" className={styles.socialIcon}><Instagram size={20} /></a>
                        <a href="https://twitter.com" target="_blank" className={styles.socialIcon}><Twitter size={20} /></a>
                        <a href="https://wa.me/212675576139" target="_blank" className={styles.socialIcon}><MessageCircle size={20} /></a>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div suppressHydrationWarning className={styles.footerLinks}>
                    <h3 className={styles.footerHeading}>{isFrench ? "Liens Rapides" : "Quick Links"}</h3>
                    <ul className={styles.linkList}>
                        <li><Link href={t("/")}>{isFrench ? "Accueil" : "Home"}</Link></li>
                        <li><Link href={t("/destinations")}>Destinations</Link></li>
                        <li><Link href={t("/tours")}>{isFrench ? "Tous les Circuits" : "All Tours"}</Link></li>
                        <li><Link href={t("/experiences")}>{isFrench ? "Expériences" : "Experiences"}</Link></li>
                        <li><Link href={t("/about")}>{isFrench ? "À Propos" : "About Us"}</Link></li>
                    </ul>
                </div>

                {/* Popular Tours Section */}
                <div suppressHydrationWarning className={styles.footerLinks}>
                    <h3 className={styles.footerHeading}>{isFrench ? "Circuits Populaires" : "Popular Tours"}</h3>
                    <div suppressHydrationWarning className={styles.twoColumnList}>
                        <ul className={styles.linkList} style={{ flex: 1 }}>
                            <li><Link href={t("/tours/sahara-desert-expedition")}>{isFrench ? "Expédition Désert Sahara" : "Sahara Desert Expedition"}</Link></li>
                            <li><Link href={t("/tours/marrakech-medina-tour")}>{isFrench ? "Visite Médina Marrakech" : "Marrakech Medina Tour"}</Link></li>
                            <li><Link href={t("/tours/atlas-mountains-trek")}>{isFrench ? "Trek Montagnes de l'Atlas" : "Atlas Mountains Trek"}</Link></li>
                            <li><Link href={t("/tours/chefchaouen-blue-pearl-walk")}>{isFrench ? "Balade Perle Bleue" : "Chefchaouen Blue Pearl Walk"}</Link></li>
                            <li><Link href={t("/tours/fez-el-bali-time-travel")}>{isFrench ? "Voyage dans le Temps à Fès" : "Fes El Bali Time Travel"}</Link></li>
                            <li><Link href={t("/tours/essaouira-coastal-retreat")}>{isFrench ? "Retraite Côtière Essaouira" : "Essaouira Coastal Retreat"}</Link></li>
                            <li><Link href={t("/tours/agadir-surf-sun-experience")}>{isFrench ? "Expérience Surf Agadir" : "Agadir Surf & Sun Experience"}</Link></li>
                        </ul>
                        <ul className={styles.linkList} style={{ flex: 1 }}>
                            <li><Link href={t("/tours/ouarzazate-cinematic-history")}>{isFrench ? "Histoire Cinéma Ouarzazate" : "Ouarzazate Cinematic History"}</Link></li>
                            <li><Link href={t("/tours/meknes-imperial-heritage")}>{isFrench ? "Héritage Impérial Meknès" : "Meknes Imperial Heritage"}</Link></li>
                            <li><Link href={t("/tours/rabat-capital-explorer")}>{isFrench ? "Explorateur Capitale Rabat" : "Rabat Capital Explorer"}</Link></li>
                            <li><Link href={t("/tours/traditional-henna-art-session")}>{isFrench ? "Session Art Henné" : "Traditional Henna Art Session"}</Link></li>
                            <li><Link href={t("/tours/moroccan-cooking-msemen-briwate")}>{isFrench ? "Cours de Cuisine Marocaine" : "Moroccan Cooking: Msemen & Briwate"}</Link></li>
                            <li><Link href={t("/tours/moroccan-celebration-sbou-wedding")}>{isFrench ? "Célébration Marocaine" : "Moroccan Celebration: Sbou & Wedding"}</Link></li>
                            <li><Link href={t("/tours/amazigh-cultural-immersion")}>{isFrench ? "Immersion Culturelle Amazighe" : "Amazigh Cultural Immersion"}</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Contact Section */}
                <div suppressHydrationWarning className={styles.footerContact}>
                    <h3 className={styles.footerHeading}>{isFrench ? "Contactez-nous" : "Contact Us"}</h3>
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
            <div suppressHydrationWarning className={styles.footerBottom}>
                <div suppressHydrationWarning className={styles.footerBottomContent}>
                    <p>&copy; {new Date().getFullYear()} Maroc Explore. {isFrench ? "Tous droits réservés." : "All rights reserved."}</p>
                    <div suppressHydrationWarning className={styles.legalLinks}>
                        <Link href="#">{isFrench ? "Politique de confidentialité" : "Privacy Policy"}</Link>
                        <Link href="#">{isFrench ? "Conditions d'utilisation" : "Terms of Service"}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
`;

fs.writeFileSync(footerPath, newFooterContent);
console.log('Footer successfully translated and linked to routeMapper!');
