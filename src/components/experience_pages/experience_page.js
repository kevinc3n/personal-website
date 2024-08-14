import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import '../../App.css';
import Navbar from '../home_bar/home_bar';
import Footer from '../footer';

const ExperiencePage = () => {
  const location = useLocation();
  const { experience } = location.state || {};

  const renderList = (items, isLink = false) => {
    if (Array.isArray(items)) {
      return (
        <ul style={{ margin: '0 0 1rem 1.5rem', padding: 0 }}>
          {items.map((item, index) => (
            <li key={index} style={{ fontSize: '1.125rem', fontFamily: '"Montserrat", sans-serif', marginBottom: '0.5rem' }}>
              {isLink ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                  {item.title}
                </a>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      );
    }
    return <Typography variant="body1">Error: No data available</Typography>;
  };

  return (
    <div className="app-header">
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          p: 4,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align="left"
          sx={{ fontFamily: '"Young Serif", serif', fontWeight: 700, fontSize: '2.5rem' }}
        >
          {experience.name}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            width: '100%',
            mt: 2,
          }}
        >
          <Box
            sx={{
              flex: 1,
              mr: { md: 2 },
              mt: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="body1"
              sx={{ mb: 2, fontFamily: "'Belanosima', sans-serif", fontSize: '1.5rem' }}
            >
              <span style={{ fontWeight: 'normal' }}>Timeframe: </span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.125rem' }}>{experience.date}</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 2, fontFamily: "'Belanosima', sans-serif", fontSize: '1.5rem' }}
            >
              <span style={{ fontWeight: 'normal' }}>Role: </span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.125rem' }}>{experience.role}</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 2, fontFamily: "'Belanosima', sans-serif", fontSize: '1.5rem' }}
            >
              <span style={{ fontWeight: 'normal' }}>Description:</span>
            </Typography>
            {renderList(experience.description)}

            <Typography
              variant="body1"
              sx={{ mb: 2, fontFamily: "'Belanosima', sans-serif", fontSize: '1.5rem' }}
            >
              <span style={{ fontWeight: 'normal' }}>Contributions:</span>
            </Typography>
            {renderList(experience.contributions)}

            <Typography
              variant="body1"
              sx={{ mb: 2, fontFamily: "'Belanosima', sans-serif", fontSize: '1.5rem' }}
            >
              <span style={{ fontWeight: 'normal' }}>What I Learned:</span>
            </Typography>
            {renderList(experience.learned)}

            <Typography
              variant="body1"
              sx={{ mb: 2, fontFamily: "'Belanosima', sans-serif", fontSize: '1.5rem' }}
            >
              <span style={{ fontWeight: 'normal' }}>Links:</span>
            </Typography>
            {renderList(experience.links, true)}
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              order: { xs: -1, md: 0 },
              paddingBottom: '20px'
            }}
          >
            <img
              src={experience.imageUrl}
              alt={experience.text}
              style={{
                maxWidth: '100%',
                borderRadius: '10px',
                border: '3px solid #000',
                boxShadow: '0 8px 0px rgba(0, 0, 0, 1)',
              }}
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
