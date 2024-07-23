import React, { useState } from 'react';
import Header from './Components/Header/Header';
import ApiGet from './Components/API/ApiGet';
import ApiUpdate from './Components/API/ApiUpdate';
import ApiPost from './Components/API/ApiPost';
import { AuthProvider, AuthContext } from './Components/Auth/AuthContext';
import Popup from './Components/Auth/Popup';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsPopupOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Reset auth state if necessary
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    // Simulate a successful login
    setIsLoggedIn(true);
  };

  return (
    <AuthProvider>
      <Header />
      <div className='button-container'>
        <div className='auth-wrapper'></div>
      <button onClick={isLoggedIn ? handleLogout : handleLogin} className="auth-button">
        {isLoggedIn ? 'Odjava' : 'Prijava'}
      </button>
      </div>
      
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <div className="spacing">
        <ApiPost />
      </div>
      <div className="spacing">
        <ApiGet />
      </div>
      <ApiUpdate />
    </AuthProvider>
  );
}

export default App;
