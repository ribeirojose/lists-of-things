import React from 'react';

const IframePage = () => {
  return (
    <iframe
      src="https://recipemaker.tinyhabits.com/"
      style={{
        width: '100%',
        height: '100%',
        minHeight: '760px',
        border: 'none',
        overflow: 'hidden',
      }}
      allow="geolocation"
      allowFullScreen={false}
      // onLoad={`javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+" px";}(this));"="`}
    />
  );
};

export default IframePage;
