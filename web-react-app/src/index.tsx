// Import necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// Get root element from the DOM
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// Render the App component inside Router and StrictMode
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
);

//Credit for the Project
//This project is made by jSjonas2024