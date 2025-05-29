import React from 'react';
import styles from './DynamicCards.module.css';

const DynamicCards = ({
  title,
  cards,
  heightPercentage = 100,
  titleColor = "#00b8e6",
  cardTitleColor = "#00b8e6",
  cardTextColor = "#666666",
  cardTagColor = "#ffffff",
  cardTagBgColor = "#00b8e6",
  columns = 3,
  useFontAwesome = false,
  backgroundColor = "#f9f9f9",
}) => {
  return (
    <div 
      className={styles.wrapper} 
      style={{ 
        height: `auto`, /* Remove fixed height */
        backgroundColor: backgroundColor,
      }}
    >
      {title && <h2 className={styles.sectionTitle} style={{ color: titleColor }}>{title}</h2>}
      <div
        className={styles.cardsWrapper}
        style={{ '--columns': columns }}
      >
        {cards.map((card, index) => (
          <a key={index} href={card.linkUrl} className={styles.card} target="_blank" rel="noopener noreferrer">
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                {useFontAwesome && card.fontAwesomeIcon ? (
                  <i className={`fas fa-${card.fontAwesomeIcon} ${styles.cardIcon}`} />
                ) : (
                  <img src={card.icon} alt={card.title} className={styles.cardIcon} />
                )}
                <div className={styles.cardInfo}>
                  <h3 className={`${styles.cardTitle} ${styles.cardTitleHover}`} style={{ color: cardTitleColor }}>
                    {card.title}
                  </h3>
                  {card.tag && (
                    <span
                      className={`${styles.cardTag} ${card.tagStyle}`}
                      style={{ color: cardTagColor, backgroundColor: cardTagBgColor }}
                    >
                      {card.tag}
                    </span>
                  )}
                </div>
              </div>
              <p className={styles.cardText} style={{ color: cardTextColor }}>
                {card.body}
              </p>
            </div>
            <span className={styles.arrowIcon}>→</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DynamicCards;
