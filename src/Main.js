import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import CV from './CV';
import Counter from './Counter'; // Import the Counter component

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};

export default App;
