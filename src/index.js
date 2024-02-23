import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; 

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h2>Welcome to My Website</h2>
      <p>This is the home page of my website. Feel free to explore!</p>
      
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

