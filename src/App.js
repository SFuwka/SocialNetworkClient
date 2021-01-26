import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Content from './components/Content/Content';
import SideNavbar from './components/Sidebar/SideNavbar/SideNavbar';
import Header from './components/Header/Header';
import { createMuiTheme, Grid, Paper, ThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { darkMode } from './features/navigation/navigationSlice';
import { useStyles } from './styles';


function App() {
  const classes = useStyles()
  const theme = useSelector(darkMode)
  const currentTheme = createMuiTheme({
    palette: {
      type: theme ? 'dark' : 'light'
    },
    background: theme ? '#424242' : '#FFFFFF'
  })
  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <Paper elevation={0} square className='app-wraper'>
          <Header />
          <Grid className='contentContainer' item container direction='row'>
            <Grid item xs={false} sm={1} lg={2}></Grid>
            <Grid item md={2}>
              <SideNavbar />
            </Grid>
            <Grid item lg={6} md={8} sm={10} xs={12}><Content /></Grid>
            <Grid item xs={false} lg={2} sm={1}></Grid>
          </Grid>
        </Paper >
      </Router>
    </ThemeProvider>
  )
}

export default App;
