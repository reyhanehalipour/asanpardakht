
import React, { createContext, useState, useContext } from 'react';

const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {

  const [phone, setPhone1] = useState('');

  const setPhone = (number) => {
    setPhone1(number);
  };

  
  const login = (token) => {
    // ورود به سیستم با دریافت توکن
    setUser({ token });
    localStorage.setItem('user', JSON.stringify({ token }));
  };

  const logout = () => {
    // خروج از سیستم
    setUser(null);
    localStorage.removeItem('user');
  };


  return (
    <PhoneContext.Provider value={{ phone, setPhone, login, logout }}>
      {children}
    </PhoneContext.Provider>
  );
};

export const usePhone = () => {
  const context = useContext(PhoneContext);
  if (!context) {
    throw new Error('usePhone must be used within a PhoneProvider');
  }
  return context;
};
