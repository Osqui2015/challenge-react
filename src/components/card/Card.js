import React from 'react';

const Card = ({ imageUrl }) => {
  return (
    <div>
      {/* Render the image using the provided imageUrl */}
      <img src={imageUrl} alt="Flickr" />
    </div>
  );
};

export default Card;
