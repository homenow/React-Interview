import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import NavBar from '../components/navBar';
import TableProperty from '../components/tableProperty';

const useStyles = makeStyles(() => ({
  headline: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '5vw',
  },
  addButton: {
    marginLeft: '5vw',
  },
  primaryContainer: {
    marginLeft: '20vw',
    marginRight: '20vw',
  },
}));
export default function Properties() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <div className={classes.primaryContainer}>
        <div className={classes.headline}>
          <h1>My Properties</h1>
          <Button
            variant="contained"
            color="primary"
            className={classes.addButton}
          >
            Add Property
          </Button>
        </div>
        <TableProperty />
      </div>
    </div>
  );
}
