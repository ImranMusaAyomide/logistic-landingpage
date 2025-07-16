import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import BadgeIcon from '@mui/icons-material/Badge';
import './TeamMember.css';

const teamMembers = [
  {
    name: 'Ivan Musa',
    role: 'Founder',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    icon: <BadgeIcon color="primary" />,
  },
  {
    name: 'Imran Rasheed',
    role: 'Manager',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    icon: <WorkIcon color="primary" />,
  },
  {
    name: 'Imran Rasheed',
    role: 'Founder',
    img: 'https://randomuser.me/api/portraits/men/34.jpg',
    icon: <BadgeIcon color="primary" />,
  },
  {
    name: 'Imran Ayomide',
    role: 'Worker',
    img: 'https://randomuser.me/api/portraits/men/35.jpg',
    icon: <PersonIcon color="primary" />,
  },
];

const TeamMember = () => {
  return (
    <Box className="team-section" sx={{ background: '#f7fafd', p: 4, borderRadius: 3 }}>
      <Typography className="team-label" variant="subtitle2" align="center" sx={{ color: '#b76e79', mb: 1 }}>
        Our Team Members
      </Typography>
      <Typography className="team-title" variant="h5" align="center" sx={{ fontWeight: 700, mb: 1 }}>
        Meet The Experts Behind
      </Typography>
      <Typography className="team-highlight" variant="h5" align="center" sx={{ color: '#ff5722', fontWeight: 700, mb: 4 }}>
        Transport Logistics
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card className="team-card" sx={{ borderRadius: 3, boxShadow: 2 }}>
              <Box className="team-avatar-box" sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Avatar src={member.img} alt={member.name} sx={{ width: 80, height: 80 }} />
              </Box>
              <CardContent>
                <Typography className="team-name" variant="subtitle1" align="center" sx={{ fontWeight: 600 }}>
                  {member.name}
                </Typography>
                <Typography className="team-role" variant="body2" align="center" sx={{ color: '#b76e79', mb: 1 }}>
                  {member.role}
                </Typography>
                <Stack direction="row" justifyContent="center" spacing={2}>
                  {member.icon}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamMember; 