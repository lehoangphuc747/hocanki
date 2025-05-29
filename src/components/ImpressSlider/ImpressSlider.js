// Conversation: https://chatgpt.com/c/67238253-819c-8006-9c41-9c259aa4e496

import React, { useState, useEffect } from 'react';
import styles from './ImpressSlider.module.css';

const ImpressSlider = ({
  slides,
  width = "80%", // Default width as 80% of the container
  height = "600px", // Adjustable height for the slider
  borderRadius = "15px", // Rounded border by default
  textPosition = "left", // Default text position
  contentWidth = "400px" // Default text area width, adjustable via prop
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Auto-play every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Determine the alignment class for text area
  const textAlignmentClass =
    textPosition === "center"
      ? styles.textCenter
      : textPosition === "right"
      ? styles.textRight
      : styles.textLeft;

  return (
    <div
      className={styles.slider}
      style={{ width, height, borderRadius }} // Dynamic width, height, and border radius
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentSlide ? styles.active : styles.inactive
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}></div>
          <div
            className={`${styles.content} ${textAlignmentClass}`}
            style={{ maxWidth: contentWidth }} // Dynamic content width
          >
            <h2 className={styles.title}>{slide.title}</h2>
            <p className={styles.description}>{slide.description}</p>
            <a href={slide.link} className={styles.button}>
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      <button className={`${styles.arrow} ${styles.left}`} onClick={handlePrevious}>
        ←
      </button>
      <button className={`${styles.arrow} ${styles.right}`} onClick={handleNext}>
        →
      </button>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            <span className={styles.dotProgress} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImpressSlider;
