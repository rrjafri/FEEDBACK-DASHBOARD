import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchBar from './SearchBar';
import FeedbackTypes from './FeedbackTypes';

const FeedbackViewContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginRight: theme.spacing(2),
}));

function FeedbackView({ feedbackData, setCurrentView }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSearch = () => {
    const result = feedbackData.find(feedback => 
      feedback.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (result) {
      setSelectedEmployee(result);
    } else {
      alert('No feedback found for this employee.');
    }
  };

  return (
    <FeedbackViewContainer>
      <Typography variant="h4" gutterBottom>
        View Employee Feedback
      </Typography>
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        handleSearch={handleSearch} 
      />
      {selectedEmployee && (
        <FeedbackTypes employee={selectedEmployee} />
      )}
      <Box mt={4}>
        <StyledButton 
          variant="contained" 
          color="primary" 
          onClick={() => setCurrentView('dashboard')}
        >
          Back to Dashboard
        </StyledButton>
      </Box>
    </FeedbackViewContainer>
  );
}

export default FeedbackView;