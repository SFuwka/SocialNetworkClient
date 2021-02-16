import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Content from './components/Content/Content';
import SideNavbar from './components/Sidebar/SideNavbar/SideNavbar';
import Header from './components/Header/Header';
import { createMuiTheme, Grid, Paper, ThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { darkMode } from './features/navigation/navigationSlice';



function App() {
  const theme = useSelector(darkMode)
  const dark = createMuiTheme({
    palette: {
      type: 'dark',
      text: {
        primary: '#ffffff'
      }
    },
    background: '#424242'
  })

  const light = createMuiTheme({
    palette: {
      type: 'light',
      text: {
        primary: '#000000'
      }
    },
    background: '#ffffff'
  })
  return (
    <ThemeProvider theme={theme ? dark : light}>
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
