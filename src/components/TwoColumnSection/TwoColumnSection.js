import React, { useEffect, useRef, useState } from 'react';
import styles from './TwoColumnSection.module.css';

const TwoColumnSection = ({
  sectionTitle,
  title = "Expertly crafted serums for all skin types",
  description = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  buttonText,
  buttonLink = "#",
  imageSrc = "https://via.placeholder.com/400x600",
  imageAlt = "Placeholder Image",
  imagePosition = "right",
  columnRatio = 2,
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const textAreaClass = imagePosition === 'right' ? styles.textAreaRight : styles.textAreaLeft;

  return (
    <section ref={sectionRef} className={`${styles.twoColumnSection} ${isVisible ? styles.visible : ''}`}>
      {sectionTitle && <h2 className={styles.sectionTitle}>{sectionTitle}</h2>}

      <div className={styles.columnContainer}>
        {imagePosition === 'left' && (
          <div className={styles.imageArea} style={{ flex: 1 }}>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <img src={imageSrc} alt={imageAlt} className={styles.image} />
            </a>
          </div>
        )}
        
        <div className={`${styles.textArea} ${textAreaClass}`} style={{ flex: columnRatio }}>
          <h2>{title}</h2>
          <p>{description}</p>
          {buttonText && (
            <a 
              href={buttonLink} 
              className={styles.button} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {buttonText}
            </a>
          )}
        </div>
        
        {imagePosition === 'right' && (
          <div className={styles.imageArea} style={{ flex: 1 }}>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <img src={imageSrc} alt={imageAlt} className={styles.image} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TwoColumnSection;