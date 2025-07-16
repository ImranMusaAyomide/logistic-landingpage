import React from 'react';
import './number.css';
import { Box, Typography } from '@mui/material';

const stats = [
  {
    iconClass: 'fa-solid fa-plane',
    value: '250+',
    label: 'Worldwide Branches',
  },
  {
    iconClass: 'fa-solid fa-users',
    value: '1M',
    label: 'Total Clients World',
  },
  {
    iconClass: 'fa-solid fa-thumbs-up',
    value: '2.5K',
    label: 'Satisfied Customers',
  },
  {
    iconClass: 'fa-solid fa-truck',
    value: '99%',
    label: 'Successful Delivery',
  },
];

export default function NumberStats() {
  return (
    <Box className="number-stats-root">
      {stats.map((stat, idx) => (
        <Box className="number-stats-item" key={idx}>
          <Box className="number-stats-icon">
            <i className={stat.iconClass} style={{ fontSize: '2rem' }}></i>
          </Box>
          <Typography className="number-stats-value">{stat.value}</Typography>
          <Typography className="number-stats-label">{stat.label}</Typography>
        </Box>
      ))}
    </Box>
  );
} 