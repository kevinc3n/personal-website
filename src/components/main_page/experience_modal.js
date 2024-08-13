import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import Slider from 'react-slick';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlideComponent from '../main_page/slide_component';
import experiences from '../../data/experiences';

const ModalComponent = ({ open, onClose }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  };

  const handleSlideClick = (experience) => {
    navigate(`/experience/${experience.name}`, { state: { experience } });
  };

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
          width: '70%',
          maxWidth: '800px',
          bgcolor: '#fffdf0',
          p: 4,
          borderRadius: 4,
          border: '3.5px solid #000',
          boxShadow: '0 8px 0px rgba(0, 0, 0, 1)',
          display: 'flex',
          flexDirection: 'column',
          '& .slick-prev, & .slick-next': {
            zIndex: 1,
            color: '#000',
            backgroundColor: 'transparent',
            border: 'none',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '& .slick-prev:hover, & .slick-next:hover': {
            color: '#808080',
            backgroundColor: 'transparent',
          },
          '& .slick-prev:before, & .slick-next:before': {
            fontSize: '30px',
            color: 'inherit',
          },
          '& .slick-dots': {
            marginTop: '30px',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            alignSelf: 'flex-end',
            color: 'black',
          }}
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </IconButton>

        <h2 id="modal-modal-title" style={{ textAlign: 'center', marginTop: 0, fontFamily: '"Young Serif", serif', fontSize: 25 }}>Experience</h2>
        <Slider {...settings}>
          {experiences.map((experience, index) => (
            <div key={index}>
              <SlideComponent
                imageUrl={experience.imageUrl}
                onClick={() => handleSlideClick(experience)}
                text={experience.text}
              />
            </div>
          ))}
        </Slider>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
