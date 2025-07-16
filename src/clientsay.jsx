import React from 'react';
import './clientsay.css';
import { Box, Typography, Avatar } from '@mui/material';

const mainImage = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80';
const sideImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80',
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=facearea&w=400&q=80',
];

export default function ClientSay() {
  return (
    <Box className="client-say-root">
      <Box className="client-say-flex">
        <Box className="client-say-img-col">
          <img src={mainImage} alt="Client" className="client-say-main-img" />
          <Box className="client-say-side-imgs">
            {sideImages.map((img, idx) => (
              <img key={idx} src={img} alt={`side-${idx}`} className="client-say-side-img" />
            ))}
          </Box>
        </Box>
        <Box className="client-say-content">
          <Typography className="client-say-back">CLIENT BACK</Typography>
          <Typography className="client-say-title">
            <span className="client-say-highlight">What Our Clients Say</span> About Transport Logistics
          </Typography>
          <Typography className="client-say-desc">
            Transport Logistics has streamlined our supply chain with timely deliveries and excellent support. They have truly been a reliable partner in our operations.
          </Typography>
          <Box className="client-say-profile">
            <Avatar src={mainImage} alt="Adam Smith" sx={{ width: 44, height: 44 }} />
            <Box ml={2}>
              <Typography className="client-say-name">Adam Smith</Typography>
              <Typography className="client-say-role">Senior Marketing Officer</Typography>
            </Box>
          </Box>
          <Box className="client-say-bottom-row">
            <span className="client-say-stars">★★★★★</span>
            <span className="client-say-pagination">
              <span className="client-say-dot active"></span>
              <span className="client-say-dot"></span>
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
} 