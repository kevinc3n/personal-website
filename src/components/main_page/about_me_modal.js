import React from 'react';
import { Modal, Box } from '@mui/material';
import { FaInstagram, FaSpotify, FaLinkedin } from 'react-icons/fa';
import aboutMeImage from '../../assets/images/me.webp';

const ModalComponent = ({ open, onClose }) => {

  const linkedinUrl = 'https://www.linkedin.com/in/kevincen/';
  const instagramUrl = 'https://www.instagram.com/kidthekevin/';
  const spotifyUrl = 'https://open.spotify.com/artist/1nCvm6kb6paTq9Hv73RSKB';

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '50%',
          width: '45%',
          boxShadow: '0 4px 0px rgba(0, 0, 0, 1)',
          bgcolor: '#fffdf0',
          p: 4,
          borderRadius: 4,
          border: '3.5px solid #000',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            order: { xs: 2, md: 1 },
          }}
        >
          <Box
            sx={{
              width: '275px',
              height: '275px',
              backgroundColor: 'white',
              borderRadius: '10px',
              border: '3.5px solid rgb(18, 34, 51)',
              boxShadow: '0 8px 0px rgba(0, 0, 0, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '@media (max-width: 1000px)': {
                width: '250px',
                height: '250px',
              },
              '@media (max-width: 500px)': {
                width: '200px',
                height: '200px',
              },
            }}
          >
            <div style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', overflow: 'hidden' }}>
              <img src={aboutMeImage} alt="description" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 2,
              gap: 2,
            }}
          >
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <FaLinkedin style={{ fontSize: 30 }} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <FaInstagram style={{ fontSize: 30 }} />
            </a>
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <FaSpotify style={{ fontSize: 30 }} />
            </a>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            mt: { xs: 2, md: 0 },
            pl: { md: 2 },
            order: { xs: 2, md: 1 },
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <h2 id="modal-modal-title" style={{ marginTop: 0, marginBottom: '5px', fontFamily: '"Young Serif", serif' }}>Hello! I'm Kevin</h2>
          <Box
            id="modal-modal-description"
            sx={{
              maxHeight: { xs: '70%', md: '90%' },
              '@media (max-width: 899px)': {
                maxHeight: '70%',
              },
              overflowY: 'auto',
              paddingRight: '15px',
              '&::-webkit-scrollbar': {
                width: '13px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#fffdf0',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#000000',
                borderRadius: '5px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#2e2d2d',
              },
            }}
          >
            <div style={{ whiteSpace: 'pre-wrap', fontFamily: '"Montserrat", sans-serif', lineHeight: 1.5 }}>
              <ul style={{ marginTop: 0, marginBottom: 5, padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  ➤ I am a fourth-year undergraduate at the University of Florida, majoring in Computer Science with a minor in Digital Arts & Sciences.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  ➤ My academic journey has been driven by a passion for software engineering, with a particular interest in machine learning, full stack development, and DevOps/MLOps. This blend of skills allows me to tackle complex projects, ensuring they are both innovative and efficiently executed.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  ➤ The Digital Arts & Sciences minor has provided me with a unique perspective on the intersection between design and engineering, enabling me to merge my technical expertise with my creative passions. This interdisciplinary approach enriches my ability to create user-friendly and aesthetically pleasing software solutions.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  ➤ Beyond computer science, I have been deeply involved in music production since 2018. I take pride in leading the entire creative process, from producing and writing to mixing and designing songs, videos, and clothing. This experience has honed my project management and creative skills, further complementing my technical background.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  ➤ Through my diverse interests and academic pursuits, I strive to bring a holistic and innovative approach to all my endeavors, whether they are in technology or the arts.
                </li>
              </ul>
            </div>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;