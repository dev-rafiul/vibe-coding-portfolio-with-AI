import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const colors = {
    dark: {
      bg: '#323647',
      navbar: '#eef4f7',
      actionBtn: '#dbb97b',
      paragraph: '#bfc2c7',
      cardBg: 'rgba(30, 41, 59, 0.8)',
      border: 'rgba(99, 102, 241, 0.2)',
      text: '#e2e8f0',
      textSecondary: '#94a3b8'
    },
    light: {
      bg: '#f9fafb',
      navbar: '#0f172a',
      actionBtn: '#dbb97b',
      paragraph: '#374151',
      cardBg: '#ffffff',
      border: 'rgba(15, 23, 42, 0.1)',
      text: '#1e293b',
      textSecondary: '#64748b'
    }
  };

  const currentColors = colors[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: currentColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
