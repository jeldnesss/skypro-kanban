import { useEffect, useState } from 'react';
import './App.css';
import { GlobalStyles } from './components/style/GlobalStyles.js';
import AppRoutes from './routes/AppRoutes.jsx';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './context/ThemeContext.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  const lightTheme = {
    header: '#ffffff',
    bg: '#EAEEF6',
  };
  const darkTheme = {
    header: '#333333',
    bg: '#000000',
  };
  const [isAuth, setIsAuth] = useState(false);
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const auth = localStorage.getItem('isAuth');
    if (auth === 'true') {
      setIsAuth(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
        <ToastContainer />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
