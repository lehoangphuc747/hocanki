// /components/LPComponents/HeroSection/HeroSection.js

import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = ({
  backgroundImage,
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) => (
  <section
    className={`${styles.hero} ${styles.parallax}`}
    style={{ backgroundImage: `url(${backgroundImage})` }} // Set the background image dynamically
  >
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroDescription}>{description}</p>
      <div className={styles.ctaButtons}>
        {primaryButtonLink && primaryButtonText && (
          <a href={primaryButtonLink} className={styles.buttonPrimary}>
            {primaryButtonText}
          </a>
        )}
        {secondaryButtonLink && secondaryButtonText && (
          <a href={secondaryButtonLink} className={styles.buttonOutline}>
            {secondaryButtonText}
          </a>
        )}
      </div>
    </div>
    <div className={styles.scrollIndicator}></div>
  </section>
);

export default HeroSection;


// USAGE
// Paste following code to the page you want to insert

// Import command at the top

// import HeroSection from '../../components/LPComponents/HeroSection/HeroSection';

// The following command at the body

{/* <HeroSection
  backgroundImage="/img/hero-bg.jpg"
  title={
    <>
      Tự Động Hóa Phân Tích,<br />Làm Chủ Đầu Tư Với Python
    </>
  }
  description="Từ phân tích dữ liệu tới tự động hóa giao dịch, tất cả chỉ với một khóa học. Dễ dàng hơn bạn nghĩ!"
  primaryButtonText="Học Thử Miễn Phí"
  primaryButtonLink="/start-learning"
  secondaryButtonText="Đăng Ký Ngay"
  secondaryButtonLink="/contact"
/> */}