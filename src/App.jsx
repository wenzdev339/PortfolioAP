// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App = () => {
  return (
    <Router>
      <div className="app">
        <CustomCursor />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;