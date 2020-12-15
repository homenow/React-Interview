/* eslint-disable react/prop-types */
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  Select,
  Box,
  Typography,
  TextField,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  dialog: {
    root: {
      width: '50vw',
      height: '80vh',
    },
  },
}));

export default function DialogAddPropertyHouseInfo({ open, onClose }) {
  const classes = useStyles();
  const handleClose = () => {
    onClose(false);
  };
  const [data, setData] = React.useState({
    type: '',
    floors: 0,
  });

  const handleChange = (event) => {
    setData((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div>
      <Dialog
        className={classes.dialog}
        open={open}
        onClose={handleClose}
        fullWidth="true"
        maxWidth="sm"
      >
        <Box component="form">
          <DialogTitle>Add Property</DialogTitle>
          <DialogContent className={classes.pageContainer}>
            <Typography>Property Type</Typography>

            <Select
              value={data.type}
              displayEmpty
              onChange={handleChange}
              inputProps={{
                name: 'type',
                id: 'type',
              }}
            >
              <MenuItem value="singleFamilyHouse">Single Family House</MenuItem>
              <MenuItem value="condominium">Condominium</MenuItem>
              <MenuItem value="apartment">Apartment</MenuItem>
            </Select>

            <Typography>Property Nickname</Typography>
            <TextField
              value={data.nickname}
              name="nickname"
              onChange={handleChange}
            />
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
}
