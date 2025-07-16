import React from 'react';
import './Skills.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import planeImg from './assets/large-plane.svg';

const skills = [
  { label: 'Shipping', value: 90 },
  { label: 'Management', value: 85 },
  { label: 'Warehousing', value: 80 },
  { label: 'Delivery Services', value: 95 },
];

const Skills = () => {
  return (
    <Box className="skills-root">
      <Box className="skills-left">
        <Typography className="skills-section-title">+ Our Skills +</Typography>
        <Typography variant="h4" className="skills-title">
          Trusted Experts in <br /> Transportation <span className="skills-highlight">& Logistics</span>
        </Typography>
        <Typography className="skills-desc">
          At Transport Logistics, our expertise lies in managing the smooth, efficient flow of goods—from origin to destination. With a deep understanding of supply chain dynamics, we deliver tailored logistics solutions across industries and borders.
        </Typography>
        <Box className="skills-bars">
          {skills.map((skill) => (
            <Box key={skill.label} className="skill-bar-row">
              <Box className="skill-bar-label-row">
                <Typography className="skill-bar-label">{skill.label}</Typography>
                <Typography className="skill-bar-value">{skill.value}%</Typography>
              </Box>
              <LinearProgress variant="determinate" value={skill.value} className="skill-bar-progress" />
            </Box>
          ))}
        </Box>
        <Button variant="contained" className="skills-btn">Book Your Parcel</Button>
      </Box>
      <Box className="skills-right">
        <img src={planeImg} alt="Large Plane" className="skills-plane-img" />
      </Box>
    </Box>
  );
};

export default Skills; 