import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import classes from './App.module.css';
import Copyright from 'components/Copyright'
import Container from '@material-ui/core/Container';
import MainLayout from './MainLayout';
import AppHeader from 'containers/AppHeader';
import AppSideBar from 'containers/AppSideBar';

const AppRoute = ({ component: Component, ...rest }) => {
  return (
    <Router>
      <div className={classes.root}>
        <AppHeader />
        <AppSideBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <MainLayout />
            <Copyright />
          </Container>
        </main>
      </div>
    </Router>
  )
}
  ;


export default AppRoute