// Conversation: https://chatgpt.com/c/67238253-819c-8006-9c41-9c259aa4e496

import React, { useEffect, useRef } from 'react';
import styles from './PureHero.module.css';

const PureHero = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
  titleColor = "#ffffff",
  subtitleColor = "#f0f0f0",
  buttonColor = "#ffffff",
  navColor = "#ffffff",
  overlayColor = "rgba(0, 0, 0, 1)",  // Default overlay color
  overlayOpacity = 0.4,               // Default overlay opacity
  contentWidth = "50%", // Width of content area
  contentPosition = "center", // Default position is center
  horizontalPosition = "5vw", // Default horizontal offset for left/right alignments
  verticalPosition = "10vh", // Default vertical offset for top/bottom alignments
  logoSrc = "https://learn-anything.vn/img/logo-learn-anything-new-rec_trans.png", // Default logo source
  logoLink = "#home" // Default logo link
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine alignment for navbar and content based on contentPosition
  const navAlignmentClass = 
    contentPosition === 'left' ? styles.navLeft :
    contentPosition === 'right' ? styles.navRight : 
    styles.navCenter;

  const contentAlignmentClass =
    contentPosition === 'left' ? styles.contentLeft :
    contentPosition === 'right' ? styles.contentRight :
    styles.contentCenter;

  return (
    <section
      className={styles.heroWrapper}
      ref={heroRef}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay with customizable color and opacity */}
      <div 
        className={styles.overlay} 
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }} 
      ></div>
      
      {/* Content Section */}
      <div
        className={`${styles.content} ${contentAlignmentClass}`}
        style={{
          maxWidth: contentWidth,
          color: titleColor,
        }}
      >
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle} style={{ color: subtitleColor }}>{subtitle}</p>
        {buttonText && (
          <a 
            href={buttonLink} 
            className={styles.heroButton} 
            style={{ 
              color: buttonColor, 
              borderColor: buttonColor,
            }}
          >
            {buttonText}
          </a>
        )}
      </div>
      
      <div className={styles.scrollHint} style={{ borderColor: navColor }}></div>
    </section>
  );
};

export default PureHero;
