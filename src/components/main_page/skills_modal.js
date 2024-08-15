import React from 'react';
import { Modal, Box, IconButton, Grid, Card, CardContent, Typography, CircularProgress, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FaPython, FaReact } from 'react-icons/fa';
import { DiJava, DiPhp } from 'react-icons/di';
import { PiFileCpp } from "react-icons/pi";
import { SiFlask } from "react-icons/si";
import { TbBrandNextjs, TbBrandGolang } from "react-icons/tb";
import { PiLinuxLogo } from "react-icons/pi";
import { DiMysql } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const styles = {
  '@keyframes bounce': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-3px)' },
    '100%': { transform: 'translateY(0)' },
  },
};

const skillSections = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90, icon: <FaPython /> },
      { name: 'C++', level: 90, icon: <PiFileCpp /> },
      { name: 'Java', level: 80, icon: <DiJava /> },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React.js', level: 80, icon: <FaReact /> },
      { name: 'Next.js', level: 70, icon: <TbBrandNextjs /> },
      { name: 'Flask', level: 70, icon: <SiFlask /> },
    ],
  },
  {
    title: 'Backend Tools',
    skills: [
      { name: 'JavaScript', level: 80, icon: <IoLogoJavascript /> },
      { name: 'Golang', level: 70, icon: <TbBrandGolang /> },
      { name: 'PHP', level: 70, icon: <DiPhp /> },
    ],
  },
  {
    title: 'DevOps and Data',
    skills: [
      { name: 'SQL', level: 90, icon: <DiMysql /> },
      { name: 'Shell Scripting', level: 80, icon: <PiLinuxLogo /> },
      { name: 'Docker', level: 80, icon: <FaDocker /> },
    ],
  },
];


const otherSkills = ['Git', 'Linux', 'AWS', 'Agile/Scrum'];

const CircularProgressWithLabel = ({ value }) => (
  <Box sx={{ position: 'relative', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
    <CircularProgress
      variant="determinate"
      value={value}
      size={80}
      thickness={5}
      sx={{ color: '#000' }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="caption"
        component="div"
        color="text.secondary"
        sx={{ fontSize: '1rem', fontFamily: '"Belanosima", sans-serif' }}
      >
        {`${Math.round(value)}%`}
      </Typography>
    </Box>
  </Box>
);

const SkillsComponent = () => (
  <Box>
    {skillSections.map((section, index) => (
      <Box key={index} sx={{ marginBottom: 4 }}>
        <Typography variant="h5" component="div" sx={{ fontFamily: '"Belanosima", sans-serif', textAlign: 'center', marginBottom: 2 }}>
          {section.title}
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {section.skills.map((skill, skillIndex) => (
            <Grid item xs={12} sm={6} md={4} key={skillIndex} style={{ textAlign: 'center' }}>
              <Card sx={{ position: 'relative', minHeight: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 4, border: '3.5px solid #000', boxShadow: '0 8px 0px rgba(0, 0, 0, 1)', backgroundColor: '#FFF8F0' }}>
                <CardContent>
                  <CircularProgressWithLabel value={skill.level}/>
                  <Typography variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2, fontFamily: '"Belanosima", sans-serif' }}>
                    {skill.icon}
                    <span style={{ marginLeft: 8 }}>{skill.name}</span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    ))}
    
    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
      <Typography variant="h5" component="div" sx={{ fontFamily: '"Belanosima", sans-serif' }}>Other Skills:</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, marginTop: 2 }}>
        {otherSkills.map((skill, index) => (
          <Chip sx={{ fontSize: 20, color: 'black', fontFamily: '"Belanosima", sans-serif'}} key={index} label={skill} variant="outlined" />
        ))}
      </Box>
    </Box>
  </Box>
);

const ModalComponent = ({ open, onClose }) => (
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
        height: '80vh',
      }}
    >
      <Box sx={{ flex: '0 1 auto', textAlign: 'center' }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'black',
          }}
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </IconButton>

        <h2 id="modal-modal-title" style={{ textAlign: 'center', marginTop: 0, fontFamily: '"Young Serif", serif', fontSize: 25 }}>Skills</h2>
        
        <Box sx={{ marginTop: 2, ...styles }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              fontFamily: '"Belanosima", sans-serif',
              fontSize: '1.2rem',
              animation: 'bounce 5s infinite',
            }}
          >
            Scroll for more
            <ArrowDownwardIcon sx={{ fontSize: 25, verticalAlign: 'middle', marginLeft: 0.5 }} />
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: '1 1 auto',
          overflow: 'auto',
          marginTop: 4,
          '&::-webkit-scrollbar': {
            width: '0',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
          },
        }}
      >
        <SkillsComponent />
      </Box>
    </Box>
  </Modal>
);

export default ModalComponent;
