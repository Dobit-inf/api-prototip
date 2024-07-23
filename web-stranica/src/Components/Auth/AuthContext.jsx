import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthContext.Provider value={{ username, setUsername, password, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};


