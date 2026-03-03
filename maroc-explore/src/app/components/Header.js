'use client';

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Compass, 
  MapPin, 
  Phone, 
  Facebook,
  Instagram
} from 'lucide-react';
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
    { label: 'Destinations', href: '#destinations' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Culture', href: '#culture' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`${styles.topBar} ${isScrolled ? styles.topBarHidden : styles.topBarVisible}`}>
        <div className={styles.topBarContent}>
          <div className={styles.topBarLeft}>
            <span className={styles.topBarItem}>
              <Phone size={14} />
              <span>+212 622283559</span>
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
          <div className={styles.logo}>
            <div className={`${styles.logoIconWrapper} ${isScrolled ? styles.logoIconWrapperScrolled : styles.logoIconWrapperTransparent}`}>
              <Compass className={`${styles.logoIcon} ${isScrolled ? styles.logoIconScrolled : styles.logoIconTransparent}`} />
              <div className={styles.logoRing}></div>
            </div>
            <div className={styles.logoText}>
              <span className={`${styles.logoTitle} ${isScrolled ? styles.logoTitleScrolled : styles.logoTitleTransparent}`}>
                MAROC
                <span className={styles.logoHighlight}>EXPLORE</span>
              </span>
              <span className={`${styles.logoTagline} ${isScrolled ? styles.logoTaglineScrolled : styles.logoTaglineTransparent}`}>
                Authentic Journeys
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navItems.map((item, index) => (
              <div key={index} className={styles.navItem}>
                <a 
                  href={item.href}
                  className={`${styles.navLink} ${isScrolled ? styles.navLinkScrolled : styles.navLinkTransparent}`}
                >
                  {item.label}
                  <span className={styles.navUnderline}></span>
                </a>
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
              <Facebook size={20} />
            </a>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.iconButton} ${isScrolled ? styles.iconButtonScrolled : styles.iconButtonTransparent}`}
            >
              <Instagram size={20} />
            </a>

            <button className={styles.bookButton}>
              <span className={styles.bookButtonContent}>
                Book Now
                <span className={styles.bookButtonArrow}>→</span>
              </span>
              <div className={styles.bookButtonOverlay}></div>
            </button>
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
                <a 
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
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

            <button className={styles.mobileBookButton}>
              Book Your Journey
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;