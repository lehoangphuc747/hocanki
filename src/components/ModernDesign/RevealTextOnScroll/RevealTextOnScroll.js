import React, { useEffect, useRef, useState } from 'react';
import styles from './RevealTextOnScroll.module.css';

const RevealTextOnScroll = ({
  lines,
  fontSize = '3rem',
  fontWeight = '700',
  fontFamily = 'Darker Grotesque, sans-serif',
  lineSpacing = '1.5em',
  letterSpacing = '0.05em',
  textTransform = 'uppercase',
  textAlign = 'center',
  backgroundColor = 'inherit',
  dimColor = '#555555', // Default dimmed color
  shineColor = '#ffffff', // Default shined color
}) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const lineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const lineIndex = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleLines((prev) => [...new Set([...prev, lineIndex])]);
          } else {
            setVisibleLines((prev) => prev.filter((i) => i !== lineIndex));
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold to trigger the effect at the desired scroll position
    );

    lineRefs.current.forEach((ref) => observer.observe(ref));

    return () => {
      lineRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, []);

  return (
    <div className={styles.revealContainer} style={{ textAlign, backgroundColor }}>
      {lines.map((line, index) => (
        <div
          key={index}
          ref={(el) => (lineRefs.current[index] = el)}
          data-index={index}
          className={`${styles.revealLine} ${visibleLines.includes(index) ? styles.shine : styles.dim}`}
          style={{
            fontSize,
            fontWeight,
            fontFamily,
            color: visibleLines.includes(index) ? shineColor : dimColor, // Apply color based on visibility
            lineHeight: lineSpacing,
            letterSpacing,
            textTransform,
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default RevealTextOnScroll;
