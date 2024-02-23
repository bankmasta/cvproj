import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About'; // Create an About component
import Contact from './Contact'; // Create a Contact component
import CV from './CV'; // Create a CV component
import Counter from './Counter'; 
import { Provider } from 'react-redux'; 
import counterStore from './counterStore';

const App = () => {
  return (
    <Provider store={counterStore}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<index />} />
          <Route path="/about" element={<About name="Oliver" studySubject="Front-end" />} /> {/* Pass props to the About component */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/counter" element={<Counter />} /> {/* Kan inte få den att funka måste skriva manuellt /Counter för att komma till den här sidan */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
