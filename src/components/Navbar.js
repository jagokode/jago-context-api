import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, login } = useContext(AuthContext);

  const currentTheme = isLightTheme ? light : dark;

  return (
    <nav
      style={{ backgroundColor: currentTheme.ui, color: currentTheme.syntax }}
    >
      <h1>Jago Context API</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li onClick={login}>{isAuthenticated ? 'User' : 'Login'}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
