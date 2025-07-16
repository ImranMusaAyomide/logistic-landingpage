import React from 'react';
import './portfolio.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import port1 from './assets/port1.svg';
import port2 from './assets/port2.svg';
import port3 from './assets/port3.svg';
import port4 from './assets/port4.svg';

const projects = [
  {
    img: port1,
    title: 'Air Freight Solutions',
    desc: 'Efficient and reliable air cargo services for global delivery.'
  },
  {
    img: port2,
    title: 'Port Logistics',
    desc: 'Seamless port operations and container management.'
  },
  {
    img: port3,
    title: 'Railway Cargo',
    desc: 'Cost-effective and timely rail freight solutions.'
  },
  {
    img: port4,
    title: 'Road Transport',
    desc: 'Flexible and secure road transportation for all cargo types.'
  }
];

const Portfolio = () => (
  <Box className="portfolio-section" sx={{ background: '#fff', py: 8 }}>
    <Typography variant="subtitle2" className="portfolio-subtitle" sx={{ color: '#ff7043', fontWeight: 700, letterSpacing: 1, mb: 1, textAlign: 'center' }}>
      &#8592; SEE OUR PORTFOLIO
    </Typography>
    <Typography variant="h5" className="portfolio-title" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
      Explore Our Latest <span style={{ color: '#ff7043' }}>Logistics Projects</span>
    </Typography>
    <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
      {projects.map((project, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Box className="portfolio-step" sx={{ textAlign: 'center', position: 'relative' }}>
            <span className="portfolio-icon">
              <img src={project.img} alt={project.title} className="portfolio-icon-img" />
            </span>
            <Typography variant="h6" className="portfolio-step-title" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
              {project.title}
            </Typography>
            <Typography variant="body2" className="portfolio-step-desc" sx={{ color: '#555' }}>
              {project.desc}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Portfolio; 