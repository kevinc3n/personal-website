import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import smileImage from './assets/images/smile.png';
import aboutMeImage from './assets/images/me.png';
import projectsImage from './assets/images/projects.png';
import experiencesImage from './assets/images/experience.png';
import skillsImage from './assets/images/skills.png';
import GridBox from './components/main_page/grid_box';
import AboutMeModal from './components/main_page/about_me_modal';
import ExperienceModal from './components/main_page/experience_modal';
import ProjectsModal from './components/main_page/projects_modal';
import SkillsModal from './components/main_page/skills_modal';
import ProjectPage from './components/project_pages/project_page';
import ExperiencePage from './components/experience_pages/experience_page';
import Footer from './components/footer';
import NotFoundPage from './components/not_found_page/not_found';

function App() {
  const [openModal, setOpenModal] = useState({
    aboutMe: false,
    experience: false,
    projects: false,
    skills: false,
  });

  const handleGridBoxClick = (modalName) => {
    setOpenModal((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setOpenModal((prev) => ({ ...prev, [modalName]: false }));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <header className="app-header">
            <div className="title">
              <h1 className="first-name">kevin</h1>
              <img src={smileImage} alt="smiley face" className="smile" />
              <h1 className="last-name">cen</h1>
            </div>

            <div className="grid-container">
              <GridBox text="about me" image={aboutMeImage} imageWidth="40px" onClick={() => handleGridBoxClick('aboutMe')} />
              <GridBox text="experience" image={experiencesImage} imageWidth="45px" onClick={() => handleGridBoxClick('experience')} />
              <GridBox text="projects" image={projectsImage} imageWidth="40px" onClick={() => handleGridBoxClick('projects')} />
              <GridBox text="skills" image={skillsImage} imageWidth="30px" onClick={() => handleGridBoxClick('skills')} />
            </div>

            <AboutMeModal open={openModal.aboutMe} onClose={() => closeModal('aboutMe')} />
            <ExperienceModal open={openModal.experience} onClose={() => closeModal('experience')} />
            <ProjectsModal open={openModal.projects} onClose={() => closeModal('projects')} />
            <SkillsModal open={openModal.skills} onClose={() => closeModal('skills')} />
            
            <Footer />
          </header>
        } />
        <Route path="/project/:projectName" element={<ProjectPage />} />
        <Route path="/experience/:experienceName" element={<ExperiencePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
