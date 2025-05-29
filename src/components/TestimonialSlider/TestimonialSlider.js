import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TestimonialSlider.module.css';

const TestimonialSlider = ({
  title,
  testimonials,
  textColor = '#333',
  activeBackgroundColor = '#ff7043',
  inactiveBackgroundColor = '#e0e0e0',
  arrowColor = '#ff7043',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      {title && <h2 className={styles.headline}>{title}</h2>}

      <div className={styles.slider}>
        {testimonials.map((testimonial, index) => {
          const position = index - activeIndex;
          const offset =
            position === -2 || position === testimonials.length - 2
              ? 2
              : position === 2 || position === -(testimonials.length - 2)
              ? -2
              : position;

          return (
            <div
              key={index}
              className={`${styles.testimonialCard} ${
                offset === 0
                  ? styles.activeCard
                  : offset === -1 || offset === 1
                  ? styles.sideCard
                  : styles.hiddenCard
              }`}
              style={{
                transform: `translateX(${offset * 100}%) scale(${
                  offset === 0 ? 1 : 0.9
                })`,
                backgroundColor: offset === 0 ? activeBackgroundColor : inactiveBackgroundColor,
                color: textColor,
              }}
            >
              <blockquote className={styles.blockquote}>
                <div className={styles.quoteIcon}>“</div>
                {testimonial.text}
              </blockquote>

              {/* Render the author image with conditional overlay */}
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className={`${styles.authorImage} ${
                  offset === 0 ? '' : styles.inactiveAuthorImage
                }`}
              />

              {/* Render the author info */}
              <p className={styles.author}>
                {testimonial.author}, <span>{testimonial.role}</span>
              </p>

              {/* Render the bubble tail for the active card */}
              {offset === 0 && <div className={styles.tail}></div>}
            </div>
          );
        })}
      </div>

      {/* Navigation at the bottom */}
      <div className={styles.navigation}>
        <button
          className={styles.arrowButton}
          onClick={handlePrev}
          style={{ backgroundColor: arrowColor }}
        >
          &larr;
        </button>
        <button
          className={styles.arrowButton}
          onClick={handleNext}
          style={{ backgroundColor: arrowColor }}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

TestimonialSlider.propTypes = {
  title: PropTypes.string,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired, // Ensure image URL is provided
    })
  ).isRequired,
  textColor: PropTypes.string,
  activeBackgroundColor: PropTypes.string,
  inactiveBackgroundColor: PropTypes.string,
  arrowColor: PropTypes.string,
};

export default TestimonialSlider;
