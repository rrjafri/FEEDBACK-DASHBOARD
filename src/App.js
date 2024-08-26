import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, AppBar, Toolbar, Typography, Box } from '@mui/material';
import './App.css';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import FeedbackForm from './components/FeedbackForm';
import ChatbotAnalysis from './components/ChatbotAnalysis';
import FeedbackView from './components/FeedbackView';
import ChartAnalysis from './components/ChartAnalysis';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [feedbackData, setFeedbackData] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const renderView = () => {
    switch(currentView) {
      case 'home':
        return <HomePage setCurrentView={setCurrentView} />;
      case 'dashboard':
        return <Dashboard setCurrentView={setCurrentView} />;
      case 'feedback':
        return <FeedbackForm setCurrentView={setCurrentView} setFeedbackData={setFeedbackData} />;
      case 'chatbot':
        return <ChatbotAnalysis setCurrentView={setCurrentView} feedbackData={feedbackData} />;
      case 'viewFeedback':
        return <FeedbackView feedbackData={feedbackData} setCurrentView={setCurrentView} />;
      case 'chartAnalysis':
        return <ChartAnalysis feedbackData={feedbackData} setCurrentView={setCurrentView} />;
      default:
        return <HomePage setCurrentView={setCurrentView} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employee Feedback System
            </Typography>
            {currentView !== 'home' && (
              <Button color="inherit" onClick={() => setCurrentView('home')}>
                Back to Home
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: 3 }}>
          {renderView()}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;