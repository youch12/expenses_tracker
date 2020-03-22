import React from 'react';
import classes from './App.module.css';
import Copyright from 'components/Copyright'
import Container from '@material-ui/core/Container';
import MainLayout from './MainLayout';
import AppHeader from 'containers/AppHeader';
import AppSideBar from 'containers/AppSideBar';

const AppRoute = () => {
  return (
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
  )
}
  ;


export default AppRoute