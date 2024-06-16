import './App.css';
import smileImage from './assets/images/smile.png';
import aboutMeImage from './assets/images/me.png';
import projectsImage from './assets/images/projects.png';
import experiencesImage from './assets/images/experience.png';
import skillsImage from './assets/images/skills.png';
import GridBox from './components/main_page/grid_box';

function App() {
  return (  
    <header className="app-header">
      <div className="title">
        <h1 className="first-name">kevin</h1>
        <img src={smileImage} alt="smiley face" className="smile" />
        <h1 className="last-name">cen</h1>
      </div>

      <div className="grid-container">
          <GridBox text="about me" image={aboutMeImage} imageWidth="40px"/>
          <GridBox text="experience" image={experiencesImage} imageWidth="45px"/>
          <GridBox text="projects" image={projectsImage} imageWidth="40px"/>
          <GridBox text="skills"image={skillsImage} imageWidth="30px"/>
      </div>

      <footer class="copyright">
        &copy;2024 kevin cen
      </footer>
    </header>    
  );
}

export default App;
