import React from 'react';
import clsx from 'clsx'; // For combining styles
import styles from './PrimaryCTA.module.css';

const PrimaryCTA = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  enableBackground,
  button2Text,
  button2Link,
  fitInDocument = false, // New prop for Docusaurus document compatibility
}) => {
  return (
    <section
      className={clsx(
        styles.primaryCTAWrapper,
        enableBackground ? styles.bgEnabled : styles.bgDisabled,
        fitInDocument && styles.documentWrapper // Add document-specific styles
      )}
    >
      <div className={styles.primaryCTA}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>{subtitle}</div>
        <div className={styles.buttons}>
          <a href={ctaLink} className={styles.buttonPrimary}>
            {ctaText}
          </a>
          {button2Text && button2Link && (
            <a href={button2Link} className={styles.buttonSecondary}>
              {button2Text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default PrimaryCTA;
