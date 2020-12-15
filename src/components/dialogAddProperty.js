/* eslint-disable react/prop-types */
import React from 'react';
//  import { useForm, Controller } from 'react-hook-form';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  Select,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  fade,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

//  import DialogAddPropertyHouseInfo from './dialogAddPropertyHouseInfo';

const useStyles = makeStyles(() => ({
  dialog: {
    root: {
      width: '80vw',

      position: 'relative',
    },
    paper: {
      minHeight: '80vh',
      maxHeight: '80vh',
    },
  },
  pagecontainer: {
    display: 'grid',
  },
  backdrop: {
    position: 'absolute',
    backgroundColor: fade('#D3D3D3', 0.5),
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
  spinner: {
    position: 'relative',
    left: '50%',
    top: '50%',
  },
}));

export default function DialogAddProperty({ open, onClose }) {
  const classes = useStyles();
  const [secondPageOpen, setSecondPageOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
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

  const submitForm = async () => {
    const promise = new Promise((res) => {
      console.log('start spinner');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        return res('done');
      }, 2000);
    });

    const result = await promise;
    console.log('the data :', data, result);
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
            <Button
              onClick={() => {
                //  setFirstPageOpen(false);
                onClose(false);
                setSecondPageOpen(true);
                //  console.log('open , firstpageOpen', open, firstPageOpen);
              }}
            >
              Next
            </Button>
          </DialogContent>
        </Box>
      </Dialog>
      <Dialog className={classes.dialog} open={secondPageOpen}>
        <Box component="form">
          <DialogTitle>Add Property Details</DialogTitle>
          <DialogContent>
            <Typography>Property Nickname</Typography>
            <TextField
              name="floors"
              value={data.floors}
              onChange={handleChange}
            />
            <Button onClick={submitForm}>Save and Close</Button>
          </DialogContent>
        </Box>
        {loading && (
          <div className={classes.backdrop}>
            <CircularProgress color="inherit" className={classes.spinner} />
          </div>
        )}
      </Dialog>
    </div>
  );
}
