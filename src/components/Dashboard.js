import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const DashboardContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2, 4),
  fontSize: '1.2rem',
}));

function Dashboard({ setCurrentView }) {
  return (
    <DashboardContainer>
      <Typography variant="h4" gutterBottom>
        Employee Feedback Dashboard
      </Typography>
      <StyledButton 
        variant="contained" 
        color="primary" 
        size="large"
        onClick={() => setCurrentView('viewFeedback')}
      >
        View Feedback
      </StyledButton>
    </DashboardContainer>
  );
}

export default Dashboard;