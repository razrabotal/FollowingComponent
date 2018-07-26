import React from 'react';
import './App.css';

import FollowingWrap from './components/FollowingWrap/FollowingWrap'
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: "#2196f3",
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

const App = () => {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <FollowingWrap/>
        </MuiThemeProvider>
      </div>
    );
}

const SimpleModalWrapped = withStyles(styles)(App);

export default SimpleModalWrapped;