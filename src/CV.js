import React from 'react';
import './CV.css';

const CV = () => {
  return (
    <div className="cv-container">
      <h2>CV Page</h2>
      <div className="cv-section">
        <h3>Education</h3>
        <p>Studying Front-End Development</p>
      </div>
      <div className="cv-section">
        <h3>Work Experience</h3>
        <ul>
          <li>Postman</li>
          <li>Assistant Nurse</li>
          <li>Property Manager</li>
        </ul>
      </div>
    </div>
  );
};

export default CV;
