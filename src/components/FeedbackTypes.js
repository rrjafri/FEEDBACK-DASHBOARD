import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const FeedbackTypesContainer = styled('div')(({ theme }) => ({
  flexGrow: 1,
  marginTop: theme.spacing(3),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FeedbackTypes({ employee }) {
  return (
    <FeedbackTypesContainer>
      <Typography variant="h5" gutterBottom>
        Feedback for {employee.name}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <StyledPaper>
            <Typography variant="h6">Positive Feedback</Typography>
            <Typography>{employee.positiveFeedback || 'No data available'}</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledPaper>
            <Typography variant="h6">Negative Feedback</Typography>
            <Typography>{employee.negativeFeedback || 'No data available'}</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledPaper>
            <Typography variant="h6">Average Feedback</Typography>
            <Typography>{employee.averageFeedback || 'No data available'}</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledPaper>
            <Typography variant="h6">Chart Analysis</Typography>
            <Typography>Chart will be displayed here</Typography>
          </StyledPaper>
        </Grid>
      </Grid>
    </FeedbackTypesContainer>
  );
}

export default FeedbackTypes;