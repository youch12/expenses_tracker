import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mainListItems, secondaryListItems } from './listItems';
import classes from './AppHeader.module.css';


export default function () {
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper),
      }}
    >
      <div className={classes.toolbarIcon}>

      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
}