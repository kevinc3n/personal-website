import React from 'react';

const GridBox = ({ text, image, imageWidth, onClick }) => {
  return (
    <div className="grid-box" onClick={onClick}>
    {image && <img src={image} alt="icon" className="grid-box-icon" style={{ width: imageWidth }} />}
    <p className="grid-box-text">{text}</p>
    </div>
  );
};

export default GridBox;