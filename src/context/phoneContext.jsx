
import React, { createContext, useState, useContext } from 'react';

const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {

  const [phone, setPhone1] = useState('');

  const setPhone = (number) => {
    setPhone1(number);
  };

  return (
    <PhoneContext.Provider value={{ phone, setPhone }}>
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
