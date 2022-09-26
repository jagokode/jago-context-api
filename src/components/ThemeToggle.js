import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { changeTheme } = useContext(ThemeContext);

  return <button onClick={changeTheme}>Change Theme</button>;
};

export default ThemeToggle;
