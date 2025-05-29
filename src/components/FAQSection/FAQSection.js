import React, { useState } from 'react';
import styles from './FAQSection.module.css'; // Nạp module
import '@fortawesome/fontawesome-free/css/all.min.css'; // Fontawesome cung cấp các icon sử dụng cho component FAQ cụ thể là dấu + và -

const FAQSection = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active state
  };

  return (
    <section className={styles.faqSection} id="faq">
      <h2 className={styles.sectionTitle}>Câu Hỏi Thường Gặp</h2>
      <div className={styles.faqWrapper}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
          >
            <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'} ${styles.icon}`}></i>
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
