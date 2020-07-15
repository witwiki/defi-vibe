import React from 'react';
import logo from './logo.svg';
import './App.css';
import MediaGrid from './components/BorrowGridComponent/MediaGrid';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import BorrowLendTab from './components/BorrowLendTabComponent/BorrowLendTab';

require('dotenv').config()

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>


      </header>
      <MuiThemeProvider theme={theme}>
          <BorrowLendTab />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
