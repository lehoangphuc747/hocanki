import React from 'react';
import styles from './YouTubeEmbed.module.css';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
