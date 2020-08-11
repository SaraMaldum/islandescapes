import React from 'react';
import Menu from './components/layout/menu/Menu';
import Footer from './components/layout/footer/Footer';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#1D668F',
  secondaryColor: '#ff9000',
  tertiaryColor: '#fdf6ec',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Menu />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
