// App.js

import React, { useState } from 'react';
import './App.css';
import smileImage from './assets/images/smile.png';
import aboutMeImage from './assets/images/me.png';
import projectsImage from './assets/images/projects.png';
import experiencesImage from './assets/images/experience.png';
import skillsImage from './assets/images/skills.png';
import GridBox from './components/main_page/grid_box';
import ModalComponent from './components/main_page/modal_box';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleGridBoxClick = (text) => {
    setModalText(text);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <header className="app-header">
      <div className="title">
        <h1 className="first-name">kevin</h1>
        <img src={smileImage} alt="smiley face" className="smile" />
        <h1 className="last-name">cen</h1>
      </div>

      <div className="grid-container">
        <GridBox text="about me" image={aboutMeImage} imageWidth="40px" onClick={() => handleGridBoxClick('About Me')} />
        <GridBox text="experience" image={experiencesImage} imageWidth="45px" onClick={() => handleGridBoxClick('Experience')} />
        <GridBox text="projects" image={projectsImage} imageWidth="40px" onClick={() => handleGridBoxClick('Projects')} />
        <GridBox text="skills" image={skillsImage} imageWidth="30px" onClick={() => handleGridBoxClick('Skills')} />
      </div>

      <ModalComponent open={openModal} onClose={closeModal} text={modalText} />
      
      <footer className="footer">
        <div className="copyright">
          &copy;2024 kevin cen
        </div>
        <div className="copyright">
          made with react.js
        </div>
      </footer>
    </header>
  );
}

export default App;
