import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import './AuthForm.css';

const AuthForm = ({ onClose }) => {
  const { username, setUsername, password, setPassword } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
    // For example, you could verify credentials or call an API
    // After successful login, you can call onClose() to close the popup
    onClose(); // Close the popup on successful login (you may want to add additional logic)
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="form-group kor-ime">
        <label>Korisničko ime</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Lozinka</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-submit">
      <button type="submit" className="auth-submit-button">Prijava</button>
      </div>
      
    </form>
  );
};

export default AuthForm;
