import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Auth from './components/Auth/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1db954'
    },
    secondary: {
      main: '#191414'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Auth>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <PrivateRoute path="/" component={HomePage}/>
          </Switch>
        </Router>
      </Auth>
    </ThemeProvider>
  );
}

export default App;
