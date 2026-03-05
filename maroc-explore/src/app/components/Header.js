'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle
} from 'lucide-react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tours', href: '/tours' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Culture', href: '/culture' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`${styles.topBar} ${isScrolled ? styles.topBarHidden : styles.topBarVisible}`}>
        <div className={styles.topBarContent}>
          <div className={styles.topBarLeft}>
            <span className={styles.topBarItem}>
              <Phone size={14} />
              <span>+212 675576139</span>
            </span>
            <span className={`${styles.topBarItem} ${styles.topBarItemHidden}`}>
              <MapPin size={14} />
              <span>Marrakech, Morocco</span>
            </span>
          </div>
          <div className={styles.topBarRight}>
            <button className={styles.langButton}>EN</button>
            <span className={styles.langDivider}>|</span>
            <button className={styles.langButton}>FR</button>
            <span className={styles.langDivider}>|</span>
            <button className={styles.langButton}>ES</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.mainHeader} ${isScrolled ? styles.mainHeaderScrolled : styles.mainHeaderTop}`}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo-marocexplore-v2.png"
              alt="Maroc Explore Logo"
              width={180}
              height={60}
              className={`${styles.logoImage} ${isScrolled ? styles.logoImageScrolled : styles.logoImageTransparent}`}
              priority
              unoptimized={true}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navItems.map((item, index) => (
              <div key={index} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isScrolled ? styles.navLinkScrolled : styles.navLinkTransparent}`}
                >
                  {item.label}
                  <span className={styles.navUnderline}></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className={styles.rightActions}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.iconButton} ${isScrolled ? styles.iconButtonScrolled : styles.iconButtonTransparent}`}
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.iconButton} ${isScrolled ? styles.iconButtonScrolled : styles.iconButtonTransparent}`}
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://wa.me/212675576139"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.iconButton} ${isScrolled ? styles.iconButtonScrolled : styles.iconButtonTransparent}`}
            >
              <MessageCircle size={18} />
            </a>

            <Link href="/filter" className={styles.bookButton}>
              <span className={styles.bookButtonContent}>
                Book Now
                <span className={styles.bookButtonArrow}>→</span>
              </span>
              <div className={styles.bookButtonOverlay}></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? styles.mobileMenuIconScrolled : styles.mobileMenuIconTransparent} size={28} />
            ) : (
              <Menu className={isScrolled ? styles.mobileMenuIconScrolled : styles.mobileMenuIconTransparent} size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileMenuContent}>
            {navItems.map((item, index) => (
              <div key={index} className={styles.mobileNavItem}>
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}

            {/* Social Links in Mobile Menu */}
            <div className={styles.mobileSocialLinks}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSocialLink}
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSocialLink}
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </div>

            <Link href="/filter" className={styles.mobileBookButton} onClick={() => setIsMobileMenuOpen(false)}>
              Book Your Journey
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
