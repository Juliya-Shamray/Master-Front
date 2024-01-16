import React, { createContext, useContext, useState } from 'react';

const DateOfBirthContext = createContext();

export const useDateOfBirth = () => {
  return useContext(DateOfBirthContext);
};

export const DateOfBirthProvider = ({ children }) => {
  const [dateOfBirth, setDateOfBirth] = useState(null);

  return (
    <DateOfBirthContext.Provider value={{ dateOfBirth, setDateOfBirth }}>
      {children}
    </DateOfBirthContext.Provider>
  );
};
