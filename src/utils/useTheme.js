import React, { useState, useEffect } from 'react';

const useTheme=()=>{

      const [isDarkMode, setIsDarkMode] = useState(false);
    
      useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
          setIsDarkMode(true);
        }
      }, []);
    
      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }, [isDarkMode]);
    
      return (
        <div className={`bg-primary text-primary ${isDarkMode ? 'dark' : ''}`}>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            Toggle Dark Mode
          </button>
          {/* Your app content */}
        </div>
      );
    }
    
export default useTheme;