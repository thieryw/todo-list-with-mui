import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from "theme/ThemeProvider"
import { DarkModeToggle } from "components/DarkModeToggle";
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";

import { useIsDarkModeEnabled } from "theme/useIsDarkModeEnabled";



function App() {

  const { isDarkModeEnabled } = useIsDarkModeEnabled();

  return (
    <ThemeProvider isDarkModeEnabled={isDarkModeEnabled}>
      <Container className="App">

        <header className="App-header">
          <DarkModeToggle />
          
          <img src={logo} className="App-logo" alt="logo" />
          <Typography> Edit <code>src/App.tsx</code> and save to reload. </Typography>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>

      </Container>
    </ThemeProvider>
  );
}

export default App;
