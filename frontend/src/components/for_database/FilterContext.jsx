import React, { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  
  const clearCountryFilter = () => setSelectedCountry(null);

  return (
    <FilterContext.Provider value={{ selectedCountry, setSelectedCountry, clearCountryFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}