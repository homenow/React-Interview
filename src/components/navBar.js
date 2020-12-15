import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default function NavBar() {
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>hello world</Toolbar>
    </AppBar>
  );
}
