import React, { useState, useEffect, useRef } from 'react';
import styles from './FeaturedProducts.module.css';

const FeaturedProducts = ({
  products,
  title = "Featured Products",
  subtitle = "Quality ingredients. Real results.",
  titleFontSize = "2rem",
  subtitleFontSize = "1rem",
  titleColor = "#000000",
  subtitleColor = "#333333",
  productFontSize = "1rem",
  productTextColor = "#000000",
  imageBorderRadius = "10px",
  imageOrientation = "portrait",
  itemsInView = 4,
  buttonText='Xem chi tiết'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  // Set CSS variable for desktop view count
  useEffect(() => {
    document.documentElement.style.setProperty('--items-in-view', itemsInView);
  }, [itemsInView]);

  // Drag functionality for desktop and mobile
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll faster
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleNext = () => {
    if (currentIndex < products.length - itemsInView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className={styles.featuredProducts}>
      <div className={styles.header}>
        <h2 style={{ fontSize: titleFontSize, color: titleColor }}>{title}</h2>
        <p style={{ fontSize: subtitleFontSize, color: subtitleColor }}>{subtitle}</p>
      </div>

      <div className={styles.productsContainer}>
        {currentIndex > 0 && (
          <button onClick={handlePrevious} className={styles.arrow}>
            ←
          </button>
        )}

        <div
          className={styles.productsSlider}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          <div
            className={styles.products}
            style={{ transform: `translateX(-${currentIndex * (100 / itemsInView)}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className={styles.productCard}
                style={{
                  borderRadius: imageBorderRadius,
                  textAlign: 'center',
                }}
              >
                <a href={product.link} className={styles.productImageLink}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                    style={{
                      borderRadius: imageBorderRadius,
                      objectFit: "cover",
                      aspectRatio: imageOrientation === "portrait" ? "3/4" : "4/3"
                    }}
                  />
                </a>
                <h3
                  className={styles.productTitle}
                  style={{ fontSize: productFontSize, color: productTextColor }}
                >
                  {product.title}
                </h3>
                <p
                  className={styles.productDescription}
                  style={{ fontSize: "0.9rem", color: "#666" }}
                >
                  {product.description}
                </p>
                <a href={product.link} className={styles.productLink}>
                  {buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className={styles.arrow}
          disabled={currentIndex >= products.length - itemsInView}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;