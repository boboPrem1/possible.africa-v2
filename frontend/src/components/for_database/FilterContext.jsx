import React, { createContext, useState, useContext, useRef } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const tableRef = useRef(null);
  
  const clearCountryFilter = () => setSelectedCountry(null);
  
  // Function to scroll to the table
  const scrollToTable = () => {
    if (tableRef.current) {
      // Get viewport height
      const viewportHeight = window.innerHeight;
      
      // Get element's position
      const elementRect = tableRef.current.getBoundingClientRect();
      
      // On mobile, scroll with more offset to account for filter UI
      const isMobile = window.innerWidth < 768;
      const scrollOptions = {
        behavior: 'smooth',
        block: isMobile ? 'start' : 'center'
      };
      
      tableRef.current.scrollIntoView(scrollOptions);
      
      // Additional offset for mobile to account for sticky headers
      // if (isMobile) {
      //   // Add a small additional scroll to clear any headers
      //   setTimeout(() => {
      //     window.scrollBy({
      //       top: -20,
      //       behavior: 'smooth'
      //     });
      //   }, 100);
      // }
    }
  };

  return (
    <FilterContext.Provider value={{ 
      selectedCountry, 
      setSelectedCountry, 
      clearCountryFilter,
      tableRef,
      scrollToTable
    }}>
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