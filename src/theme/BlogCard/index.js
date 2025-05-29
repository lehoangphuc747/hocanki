import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function BlogCard({ image, title, description, date, category, link, readingTime }) {
  return (
    <div className={clsx(styles.blogCard)}>
      {/* Image Section */}
      <div className={styles.blogCardImageWrapper}>
        <Link to={link}>
          <img src={image} alt={title} className={styles.blogCardImage} />
        </Link>
      </div>

      {/* Content Section */}
      <div className={styles.blogCardContent}>
        {/* Category */}
        {category && (
          <span className={clsx(styles.categoryLabel)}>
            {category}
          </span>
        )}

        {/* Title */}
        <h3 className={styles.blogCardTitle}>
          <Link to={link}>{title}</Link>
        </h3>

        {/* Date and Reading Time */}
        <div className={styles.blogCardMeta}>
          <p className={styles.blogCardDate}>{date}</p>
          {readingTime && (
            <p className={styles.blogCardReadingTime}>{`${Math.ceil(readingTime)} phút đọc`}</p>
          )}
        </div>

        {/* Description */}
        <p className={styles.blogCardDescription}>{description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
