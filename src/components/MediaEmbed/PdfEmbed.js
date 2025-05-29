// src/components/PdfEmbed.js

import React from 'react';

const PdfEmbed = ({ pdfUrl }) => {
  return (
    <div className="pdf-responsive">
      <iframe
        src={pdfUrl}
        width="100%"
        height="800px"
        frameBorder="0"
        title="Embedded PDF"
      ></iframe>
    </div>
  );
};

export default PdfEmbed;
