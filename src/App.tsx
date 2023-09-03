import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from './components/Main';

const defaultTheme = createTheme();
const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
