import React from 'react';
import ReactDOM from 'react-dom';
import AuthForm from './AuthForm';
import './Popup.css'; // Ensure this file contains styles for the popup

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-content">
      
        <button className="popup-close" onClick={onClose}>×</button>
     
     
        <AuthForm onClose={onClose} />
      </div>
    </div>,
    document.body
  );
};

export default Popup;
