import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SuccessModal from './components/SuccessModal';
import ErrorModal from './components/ErrorModal';

function App() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSuccess = () => {
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 3000);
  };

  const handleFormError = (message) => {
    setErrorMessage(message);
    setShowErrorModal(true);
    setTimeout(() => setShowErrorModal(false), 4000);
  };

  return (
    <div className="min-h-screen bg-bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact onSuccess={handleFormSuccess} onError={handleFormError} />
      <Footer />
      <ScrollToTop />
      <SuccessModal isOpen={showSuccessModal} />
      <ErrorModal isOpen={showErrorModal} message={errorMessage} />
    </div>
  );
}

export default App;