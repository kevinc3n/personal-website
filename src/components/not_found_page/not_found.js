import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../home_bar/home_bar';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '0 50px',
        backgroundColor: '#fffdf0',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontFamily: '"Young Serif", serif', marginBottom: 2 }}
      >
        Stale request! Please access the resource through the home page.
      </Typography>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Navbar />
      </Box>
    </Box>
  );
};

export default NotFoundPage;
