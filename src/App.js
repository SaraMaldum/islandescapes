import React from 'react';
import Menu from './components/layout/menu/Menu';
import Footer from './components/layout/footer/Footer';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import './App.css';

const theme = {
  primaryColor: '#1D668F',
  secondaryColor: '#ff9000',
  tertiaryColor: '#fdf6ec',
}

const Wrapper = styled.div`
  &.wrapper {
    flex: 1 0 auto;
}
`


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <GlobalStyles />
          <Menu />
        </div>
        <Footer>&copy; Sara Maldum</Footer>

      </ThemeProvider>

    </>
  );
}

export default App;
