import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import styles from './SocialSharing.module.css';

const SOCIAL_SHARE_URLS = {
  twitter: (url, title) =>
    `https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  facebook: (url) =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  linkedin: (url, title) =>
    `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(
      title
    )}`,
};

const SocialSharing = ({
  title = 'Share this post with your friends!',
  iconColor = 'var(--ifm-color-emphasis-800)',
  iconSize = '1.5rem',
  pageUrl,
  postTitle,
}) => {
  // Handle copy link action
  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <div className={styles.socialSharing}>
      <hr className={styles.separator} />
      <p className={styles.inviteText}>{title}</p>
      <div className={styles.shareButtons}>
        <a
          href={SOCIAL_SHARE_URLS.facebook(pageUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
          style={{ color: iconColor, fontSize: iconSize }}
          aria-label="Share on Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href={SOCIAL_SHARE_URLS.twitter(pageUrl, postTitle)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
          style={{ color: iconColor, fontSize: iconSize }}
          aria-label="Share on X">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a
          href={SOCIAL_SHARE_URLS.linkedin(pageUrl, postTitle)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
          style={{ color: iconColor, fontSize: iconSize }}
          aria-label="Share on LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <button
          onClick={handleCopyLink}
          className={`${styles.shareButton} ${styles.copyButton}`}
          style={{ color: iconColor, fontSize: iconSize }}
          aria-label="Copy link">
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </div>
  );
};

// Define default props
SocialSharing.propTypes = {
  title: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  pageUrl: PropTypes.string.isRequired,
  postTitle: PropTypes.string,
};

export default SocialSharing;
