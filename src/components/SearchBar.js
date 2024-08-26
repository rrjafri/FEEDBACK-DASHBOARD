import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const SearchBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  marginRight: theme.spacing(2),
}));

function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <SearchBarContainer>
      <StyledTextField
        variant="outlined"
        placeholder="Search by employee name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch}
      >
        Search
      </Button>
    </SearchBarContainer>
  );
}

export default SearchBar;