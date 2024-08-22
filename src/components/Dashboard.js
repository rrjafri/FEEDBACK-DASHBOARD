import React, { useState } from 'react';

function Dashboard({ feedbackData }) {
  const [showPendingTasks, setShowPendingTasks] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFeedback, setFilteredFeedback] = useState([]);

  const pendingFeedback = [
    'John Doe',
    'Jane Smith',
    'Bob Wilson',
    'Eva Green'
  ];

  const handleSearch = () => {
    const results = feedbackData.filter(feedback =>
      feedback.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFeedback(results);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      
      <div className="dashboard-buttons">
        <button 
          className="action-button"
          onClick={() => setShowPendingTasks(!showPendingTasks)}
        >
          Pending Tasks
        </button>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search by employee name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {filteredFeedback.length > 0 && (
        <div className="feedback-results">
          <h3>Feedback Results:</h3>
          <ul>
            {filteredFeedback.map((feedback, index) => (
              <li key={index}>
                <p>Name: {feedback.name}</p>
                <p>Rating: {feedback.rating}</p>
                <p>Appreciate: {feedback.appreciate}</p>
                <p>Improvements: {feedback.improvements}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showPendingTasks && (
        <div className="pending-tasks-list">
          <h3>People who haven't provided feedback:</h3>
          <ul>
            {pendingFeedback.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;