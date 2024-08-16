import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import '../../styling/App.css';
import { 
  containerStyles, 
  headerStyles, 
  boxStyles, 
  contentBoxStyles, 
  imgBoxStyles, 
  typographyStyles 
} from '../../styling/content_styles';
import Navbar from '../home_bar/home_bar';
import Footer from '../footer';

const ProjectPage = () => {
  const location = useLocation();
  const { project } = location.state || {};

  const renderList = (items, isLink = false) => {
    if (Array.isArray(items)) {
      return (
        <ul className="custom-list">
          {items.map((item, index) => (
            <li key={index} className="custom-list-item">
              {isLink ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="custom-list-link">
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
      <Box sx={containerStyles}>
        <Typography
          variant="h2"
          gutterBottom
          align="left"
          sx={headerStyles}
          className="content-title"
        >
          {project.name}
        </Typography>
        <Box sx={boxStyles}>
          <Box sx={contentBoxStyles}>
            <Typography variant="body1" sx={typographyStyles}>
              <span style={{ fontWeight: 'normal' }}>Timeframe: </span>
              <span className="montserrat-text">{project.date}</span>
            </Typography>

            <Typography variant="body1" sx={typographyStyles}>
              <span style={{ fontWeight: 'normal' }}>Description:</span>
            </Typography>
            {renderList(project.description)}

            <Typography variant="body1" sx={typographyStyles}>
              <span style={{ fontWeight: 'normal' }}>Functionalities:</span>
            </Typography>
            {renderList(project.functionalities)}

            <Typography variant="body1" sx={typographyStyles}>
              <span style={{ fontWeight: 'normal' }}>What I Learned:</span>
            </Typography>
            {renderList(project.learned)}

            <Typography variant="body1" sx={typographyStyles}>
              <span style={{ fontWeight: 'normal' }}>Links:</span>
            </Typography>
            {renderList(project.links, true)}
          </Box>

          <Box sx={imgBoxStyles}>
            <img
              src={project.imageUrl}
              alt={project.text}
              className="content-image"
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default ProjectPage;