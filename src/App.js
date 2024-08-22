import React, { useState } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import Dashboard from './components/Dashboard';
import ChatbotAnalysis from './components/ChatbotAnalysis';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [feedbackData, setFeedbackData] = useState([]);

  const renderView = () => {
    switch(currentView) {
      case 'dashboard':
        return <Dashboard setCurrentView={setCurrentView} feedbackData={feedbackData} />;
      case 'feedback':
        return <FeedbackForm setCurrentView={setCurrentView} setFeedbackData={setFeedbackData} />;
      case 'chatbot':
        return <ChatbotAnalysis setCurrentView={setCurrentView} feedbackData={feedbackData} />;
      default:
        return <Dashboard setCurrentView={setCurrentView} feedbackData={feedbackData} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Feedback System</h1>
        <nav>
          <button onClick={() => setCurrentView('dashboard')}>Dashboard</button>
          <button onClick={() => setCurrentView('feedback')}>Submit Feedback</button>
          <button onClick={() => setCurrentView('chatbot')}>Chatbot Analysis</button>
        </nav>
      </header>
      <main>
        {renderView()}
      </main>
    </div>
  );
}

export default App;