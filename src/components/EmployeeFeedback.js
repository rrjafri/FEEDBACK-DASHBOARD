import React from 'react';

function EmployeeFeedback({ formData, setFormData, nextStep, prevStep }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prevState => {
      const newEmployeeFeedback = [...prevState.employeeFeedback];
      newEmployeeFeedback[index] = {
        ...newEmployeeFeedback[index],
        [name]: value
      };
      return {
        ...prevState,
        employeeFeedback: newEmployeeFeedback
      };
    });
  };

  const addEmployee = () => {
    setFormData(prevState => ({
      ...prevState,
      employeeFeedback: [
        ...prevState.employeeFeedback,
        { name: '', rating: '', appreciate: '', improvements: '' }
      ]
    }));
  };

  const deleteEmployee = (index) => {
    setFormData(prevState => {
      const newEmployeeFeedback = prevState.employeeFeedback.filter((_, i) => i !== index);
      return {
        ...prevState,
        employeeFeedback: newEmployeeFeedback
      };
    });
  };

  return (
    <div className="employee-feedback">
      <h3>Employee Feedback</h3>
      {formData.employeeFeedback.map((employee, index) => (
        <div key={index} className="employee-section">
          <h4>Employee {index + 1}</h4>
          <div className="feedback-column">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={employee.name}
                onChange={(e) => handleChange(index, e)}
                className="form-input"
              />
            </label>
            <label>
              Rating (out of 5):
              <input
                type="number"
                name="rating"
                value={employee.rating}
                onChange={(e) => handleChange(index, e)}
                min="1"
                max="5"
                className="form-input"
              />
            </label>
            <label>
              What do you appreciate:
              <textarea
                name="appreciate"
                value={employee.appreciate}
                onChange={(e) => handleChange(index, e)}
                className="form-textarea"
              />
            </label>
            <label>
              Areas for improvement:
              <textarea
                name="improvements"
                value={employee.improvements}
                onChange={(e) => handleChange(index, e)}
                className="form-textarea"
              />
            </label>
            <button type="button" onClick={() => deleteEmployee(index)} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      ))}
      <button type="button" onClick={addEmployee}>Add Another Employee</button>
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="button" onClick={nextStep}>Next</button>
    </div>
  );
}

export default EmployeeFeedback;