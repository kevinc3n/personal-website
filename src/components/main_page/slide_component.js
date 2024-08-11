import React from 'react';
import { Box, Typography } from '@mui/material';

const SlideComponent = ({ imageUrl, onClick, text }) => {
  const handleClick = (event) => {
    if (event.target.tagName.toLowerCase() === 'img' || event.target.tagName.toLowerCase() === 'div') {
      onClick();
    }
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        flex: '1 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        border: '5px solid #000',
        overflow: 'hidden',
        maxWidth: '80%',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <img
        src={imageUrl}
        alt="Slide"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'cover',
          cursor: 'pointer',
          filter: 'blur(20px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fffdf0',
          padding: '10px',
          borderRadius: '8px',
          border: '4px solid black',
          textAlign: 'center',
          boxShadow: '0 5px 0px rgba(0, 0, 0, 1)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translate(-50%, -50%) scale(1.03)',
          },
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            color: 'black',
            fontFamily: "'Belanosima', sans-serif",
            fontSize: 'clamp(28px, 4vw, 50px)',
            cursor: 'pointer',
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default SlideComponent;
