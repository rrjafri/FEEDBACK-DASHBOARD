import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import FeedbackIcon from '@mui/icons-material/Feedback';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  height: '200px', // Fixed height for all tiles
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
}));

function HomePage({ setCurrentView }) {
  const tiles = [
    { title: 'Dashboard', icon: <DashboardIcon fontSize="inherit" />, view: 'dashboard' },
    { title: 'Chatbot', icon: <ChatIcon fontSize="inherit" />, view: 'chatbot' },
    { title: 'Submit Feedback', icon: <FeedbackIcon fontSize="inherit" />, view: 'feedback' },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Welcome to Employee Feedback System
      </Typography>
      <Grid container spacing={4}>
        {tiles.map((tile) => (
          <Grid item xs={12} sm={6} md={4} key={tile.title}>
            <StyledPaper elevation={3} onClick={() => setCurrentView(tile.view)}>
              <IconWrapper color="primary">{tile.icon}</IconWrapper>
              <Typography variant="h6">{tile.title}</Typography>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomePage;