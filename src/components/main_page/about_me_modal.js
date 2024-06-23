import React, { useState } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import { FaInstagram, FaSpotify, FaLinkedin } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import aboutMeImage from '../../assets/images/me.webp';

const ModalComponent = ({ open, onClose }) => {
  const linkedinUrl = 'https://www.linkedin.com/in/kevincen/';
  const instagramUrl = 'https://www.instagram.com/kidthekevin/';
  const spotifyUrl = 'https://open.spotify.com/artist/1nCvm6kb6paTq9Hv73RSKB';

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const listItems = [
    {
      title: "➤ Education",
      content: "I am a fourth-year undergraduate at the University of Florida, majoring in Computer Science with a minor in Digital Arts & Sciences.",
    },
    {
      title: "➤ SWE",
      content: "My academic journey has been driven by a passion for software engineering, with a particular interest in machine learning, full stack development, and DevOps/MLOps. This blend of skills allows me to tackle complex projects, ensuring they are both innovative and efficiently executed.",
    },
    {
      title: "➤ Digital Art",
      content: "The Digital Arts & Sciences minor has provided me with a unique perspective on the intersection between design and engineering, enabling me to merge my technical expertise with my creative passions. This interdisciplinary approach enriches my ability to create user-friendly and aesthetically pleasing software solutions.",
    },
    {
      title: "➤ Music",
      content: "Beyond computer science, I have been deeply involved in music production since 2018. I take pride in leading the entire creative process, from producing and writing to mixing and designing songs, videos, and clothing. This experience has honed my project management and creative skills, further complementing my technical background.",
    },
    {
      title: "➤ Goals",
      content: "Through my diverse interests and academic pursuits, I strive to bring a holistic and innovative approach to all my endeavors, whether they are in technology or the arts.",
    },
  ];

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
          width: '50%',
          boxShadow: '0 4px 0px rgba(0, 0, 0, 1)',
          bgcolor: '#fffdf0',
          p: 4,
          borderRadius: 4,
          border: '3.5px solid #000',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          '@media (max-width: 900px)': {
            height: '80%',
            width: '65%',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'black',
          }}
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </IconButton>
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
                width: '225px',
                height: '225px',
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
            order: { xs: 1, md: 1 },
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginLeft: 3,
            '@media (max-width: 500px)': {
              marginLeft: 0,
            },
          }}
        >
          <h2
            id="modal-modal-title"
            style={{
              marginTop: 0,
              marginBottom: '10px',
              fontFamily: '"Young Serif", serif',
              textAlign: 'center',
              fontSize: 25,
            }}
          >
            Hello! My Name Is Kevin Cen
          </h2>
          <Box
            id="modal-modal-description"
            sx={{
              overflowY: 'auto',
              paddingRight: '15px',
              '&::-webkit-scrollbar': {
                width: '13px',
                display: 'auto',
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
              whiteSpace: 'pre-wrap',
              fontFamily: '"Montserrat", sans-serif',
              lineHeight: 1.5,
            }}
          >
            <ul style={{ marginTop: 0, marginBottom: 5, padding: 0 }}>
              {listItems.map((item, index) => (
                <li key={index} style={{ marginBottom: '10px', cursor: 'pointer', fontFamily: '"Montserrat", sans-serif' }} onClick={() => toggleExpand(index)}>
                  <span style={{ fontFamily: '"Belanosima", sans-serif', fontSize: 25 }}>{item.title}</span>
                  {expandedIndex === index && (
                    <div style={{ marginTop: '5px', marginLeft: '25px'}}>
                      {item.content}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
