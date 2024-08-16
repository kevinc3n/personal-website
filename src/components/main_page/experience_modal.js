import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import Slider from 'react-slick';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlideComponent from '../main_page/slide_component';
import experiences from '../../data/experiences';
import { modalContainer, closeButton, iconButton, settings } from '../../styling/modal_styles';

const ModalComponent = ({ open, onClose }) => {
  const navigate = useNavigate();

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
        sx={modalContainer}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={iconButton}
        >
          <CloseIcon sx={closeButton} />
        </IconButton>

        <h2 id="modal-modal-title" class='modal-title'>Experience</h2>
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
