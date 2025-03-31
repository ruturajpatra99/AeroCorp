// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CustomersSection from './components/CustomersSection';
import ContactSection from './components/ContactSection';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  
  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLoginClick={() => handleOpenAuth('login')} onSignupClick={() => handleOpenAuth('signup')} />
      <main>
        <HeroSection />
        <AboutSection />
        <CustomersSection />
        <ContactSection />
      </main>
      <Footer />
      {showAuthModal && (
        <AuthModal 
          mode={authMode} 
          onClose={() => setShowAuthModal(false)} 
          onSwitchMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} 
        />
      )}
    </div>
  );
}

export default App;