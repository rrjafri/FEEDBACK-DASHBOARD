import React from 'react';

function SelfFeedback({ formData, setFormData, nextStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      selfFeedback: {
        ...prevState.selfFeedback,
        [name]: value
      }
    }));
  };

  return (
    <div className="self-feedback">
      <h3>Self Feedback</h3>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.selfFeedback.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label>
          Rating (out of 5):
          <input
            type="number"
            name="rating"
            value={formData.selfFeedback.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
            className="form-input"
          />
        </label>
        <label>
          Achievements:
          <textarea
            name="achievements"
            value={formData.selfFeedback.achievements}
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </label>
        <label>
          Areas for Improvement:
          <textarea
            name="improvements"
            value={formData.selfFeedback.improvements}
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </label>
        <label>
          Work Done This Quarter:
          <textarea
            name="workDone"
            value={formData.selfFeedback.workDone}
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </label>
        <label>
          Suggestions for Team Improvement:
          <textarea
            name="suggestions"
            value={formData.selfFeedback.suggestions}
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </label>
        <button type="button" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
}

export default SelfFeedback;