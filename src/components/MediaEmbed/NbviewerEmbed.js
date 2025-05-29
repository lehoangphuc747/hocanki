// src/components/Embedding/NbviewerEmbed.js

import React from 'react';

const NbviewerEmbed = ({ gistId, notebookName }) => {
  const src = `https://nbviewer.jupyter.org/gist/${gistId}/${notebookName}`;

  return (
    <div className="nbviewer-container">
      <iframe
        src={src}
        width="100%"
        height="800px"
        frameBorder="0"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      ></iframe>
    </div>
  );
};

export default NbviewerEmbed;
