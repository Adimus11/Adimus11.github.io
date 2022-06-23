import * as React from 'react';
import Button from '@mui/material/Button';
import { AppBar, createTheme, CssBaseline, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

const theme = createTheme()

function App() {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar>
      <Toolbar>
        <AccessTime sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Ile zostało pracy do weekendu?
        </Typography>
      </Toolbar>
    </AppBar>

  </ThemeProvider>
}

export default App;
