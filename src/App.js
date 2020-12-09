import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Content from './components/Content/Content';
import SideNavbar from './components/Sidebar/SideNavbar/SideNavbar';
import Header from './components/Header/Header';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <Router>
      <div className='app-wraper'>
        <Grid container direction='column' >
          <Grid item xs={12} >
            <Header />
          </Grid>
          <Grid item container direction='row'>
            <Grid item xs={false} md={2}></Grid>
            <Grid item >
              <SideNavbar />
            </Grid>
            <Grid item md={7} xs={12}><Content /></Grid>
          </Grid>
        </Grid>

      </div>
    </Router>
  )
}

export default App;
