import React, { useState } from 'react';
import styles from './ImageGallery.module.css';
import { FaSearchPlus } from 'react-icons/fa';

const ImageGallery = ({
  images,
  title = '',
  description = '',
  lightboxLinkText = 'See More',
  titleColor = 'var(--gallery-title-color)',          // Adaptive title color
  descriptionColor = 'var(--gallery-body-text-color)', // Adaptive description color
  textColor = 'var(--gallery-lightbox-text-color)',    // Adaptive lightbox text color
  linkColor = 'var(--gallery-lightbox-link-color)',    // Adaptive lightbox link color
  linkHoverColor = '#FFFFFF',                          // Hover color for the link
}) => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className={styles.galleryContainer}>
      {/* Section Title and Description */}
      {title && (
        <h2 className={styles.galleryTitle} style={{ color: titleColor }}>
          {title}
        </h2>
      )}
      {description && (
        <p className={styles.galleryDescription} style={{ color: descriptionColor }}>
          {description}
        </p>
      )}
      
      {/* Image Grid */}
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.imageWrapper} ${index === 0 ? styles.focusImage : ''}`}
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.alt} className={styles.image} />
            <div className={styles.zoomIcon}><FaSearchPlus /></div> {/* Zoom icon overlay */}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.imageContainer}>
              <img src={lightboxImage.src} alt={lightboxImage.alt} className={styles.lightboxImage} />
              <div className={styles.overlay} style={{ color: textColor }}>
                {lightboxImage.title && <h3 className={styles.imageTitle}>{lightboxImage.title}</h3>}
                {lightboxImage.description && <p className={styles.imageDescription}>{lightboxImage.description}</p>}
                {lightboxImage.link && (
                  <a
                    href={lightboxImage.link}
                    className={styles.seeMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: linkColor }}
                    onMouseEnter={(e) => e.target.style.color = linkHoverColor}
                    onMouseLeave={(e) => e.target.style.color = linkColor}
                  >
                    {lightboxLinkText}
                  </a>
                )}
              </div>
            </div>
            <button className={styles.closeButton} onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
