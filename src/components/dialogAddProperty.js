/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog, Box } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  dialog: {
    root: {
      width: '50vw',
      height: '80vh',
    },
  },
}));

export default function DialogAddPropertyHouseInfo({ open }) {
  const classes = useStyles();

  return (
    <Dialog className={classes.dialog} open={open}>
      <Box>
        <div>hello world</div>
      </Box>
    </Dialog>
  );
}
