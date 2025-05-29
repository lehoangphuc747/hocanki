import React, { useState } from 'react';

const ImageModal = ({ src, caption }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleModal = () => setOpen(!isOpen);

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img
          src={src}
          alt="Open Modal"
          onClick={toggleModal}
          style={{ cursor: 'pointer', maxWidth: '100%', display: 'block', margin: '0 auto' }}
        />
        {/* Always-visible Caption */}
        {caption && <div style={{
          color: '#555',
          fontSize: '16px',
          marginTop: '5px',
          textAlign: 'center'  // Center-align the caption
        }}>
          {caption}
        </div>}
      </div>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1050  // Ensure it's above other content
        }}>
          <div style={{
            position: 'relative',
            maxWidth: '90%',  // Limit the width to avoid touching the window edges
            maxHeight: '90vh', // Limit the height to ensure it fits in the viewport
            overflow: 'auto',  // Enable scrolling if the image is too large
            textAlign: 'center'  // Center-align the caption
          }}>
            <img src={src} alt="Modal Content" style={{
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'block'  // Ensures the image is block level to respect maxWidth/maxHeight
            }} />
            {/* Caption inside the modal */}
            {caption && <div style={{
              color: '#fff',
              marginTop: '10px',  // Add some spacing between image and caption
              fontSize: '16px',
              textAlign: 'center'  // Center-align the caption
            }}>
              {caption}
            </div>}
            <button onClick={toggleModal} style={{
              position: 'absolute',
              top: 10,
              right: 10,
              background: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>&times;</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
