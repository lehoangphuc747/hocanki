import React, { useEffect } from 'react';

const SubscribeNewsletter = ({
  backgroundColor = "transparent",
  headingColor = "#BC0000",
  descriptionColor = "#224F75",
  buttonBackgroundColor = "#A5C4BD",
  buttonTextColor = "#224F75",
  enableShadow = false,
  heading = "",
  description = "",
  buttonText = "Đăng ký",
  darkMode = false
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/widget.js';
    script.async = true;
    document.body.appendChild(script);

    window.CustomSubstackWidget = {
      substackUrl: "learnanything.substack.com",
      placeholder: "nhập-email@gmail.com",
      buttonText: buttonText,
      theme: "custom",
      colors: {
        primary: buttonBackgroundColor,
        input: "#f4f4f4",
        email: "#808080",
        text: descriptionColor,
        buttonText: buttonTextColor,
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [buttonBackgroundColor, buttonTextColor, descriptionColor, buttonText]);

  return (
    <div 
      style={{
        ...styles.fullWidthContainer,
        backgroundColor,
      }}
    >
      <div 
        style={{ 
          ...styles.container, 
          boxShadow: enableShadow ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none' 
        }}
      >
        {heading && (
          <h2 style={{ ...styles.heading, color: headingColor }}>{heading}</h2>
        )}

        {description && (
          <p style={{ ...styles.description, color: descriptionColor }}>
            {description}
          </p>
        )}

        {/* Flex container for centering input and button */}
        <div style={styles.inputContainer}>
          <div id="custom-substack-embed"></div>
        </div>
      </div>
    </div>
  );
};

// Updated styles for center alignment
const styles = {
  fullWidthContainer: {
    width: '100%',
    padding: '1rem',
    // margin: '2rem 0', // Remove the gap between the component with other component below
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: '800px',
    width: '100%',
    padding: '1.5rem',
    borderRadius: '8px',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',    // Centers the input and button
    alignItems: 'center',        // Vertically aligns input and button
    gap: '0.5rem',               // Space between input and button
    maxWidth: '400px',           // Limits width for better alignment
    margin: '0 auto',            // Centers the container within the component
  }
};

export default SubscribeNewsletter;
