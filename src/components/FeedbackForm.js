import React, { useState } from 'react';
import SelfFeedback from './SelfFeedback';
import EmployeeFeedback from './EmployeeFeedback';
import ReviewSubmit from './ReviewSubmit';

function FeedbackForm({ setCurrentView, setFeedbackData }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    selfFeedback: {
      name: '',
      rating: '',
      achievements: '',
      improvements: '',
      workDone: '',
      suggestions: '',
    },
    employeeFeedback: []
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log('Submitting feedback:', formData);
    setFeedbackData(prevData => [...prevData, ...formData.employeeFeedback]);
    alert('Feedback submitted successfully!');
    setCurrentView('dashboard');
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return <SelfFeedback 
          formData={formData} 
          setFormData={setFormData} 
          nextStep={nextStep} 
        />;
      case 2:
        return <EmployeeFeedback 
          formData={formData} 
          setFormData={setFormData} 
          nextStep={nextStep} 
          prevStep={prevStep} 
        />;
      case 3:
        return <ReviewSubmit 
          formData={formData} 
          prevStep={prevStep} 
          handleSubmit={handleSubmit} 
        />;
      default:
        return <SelfFeedback 
          formData={formData} 
          setFormData={setFormData} 
          nextStep={nextStep} 
        />;
    }
  };

  return (
    <div className="feedback-form">
      <h2>Submit Feedback</h2>
      <div className="progress-bar">
        Step {step} of 3
      </div>
      {renderStep()}
    </div>
  );
}

export default FeedbackForm;