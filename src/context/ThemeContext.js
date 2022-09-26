import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const theme = {
  isLightTheme: true,
  light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
  dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
};

const ThemeContextProvider = ({ children }) => {
  const [stateTheme, setStateTheme] = useState(theme);

  const changeTheme = () =>
    setStateTheme({ ...stateTheme, isLightTheme: !stateTheme.isLightTheme });

  return (
    <ThemeContext.Provider value={{ ...stateTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
