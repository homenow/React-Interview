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
  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default function DialogAddProperty({
  open,
  onClose,
  setTableData,
  tableData,
}) {
  const classes = useStyles();
  const [secondPageOpen, setSecondPageOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => {
    onClose(false);
  };
  const [data, setData] = React.useState({
    type: '',
    floors: 0,
    streetAddress: '',
    city: '',
    state: '',
    bedrooms: 0,
    baths: 0,
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
    setSecondPageOpen(false);
    setTableData([...tableData, data]);
  };

  const closeSecondDialog = () => {
    onClose(true);
    setSecondPageOpen(false);
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
              placeholder="Nickname"
            />
            <Typography>Street Address</Typography>
            <TextField
              value={data.streetAddress}
              name="streetAddress"
              onChange={handleChange}
              placeholder="Address 1"
            />
            <Typography>Street Address Cont. - optional</Typography>
            <TextField
              value={data.streetAddress2}
              name="streetAddress2"
              onChange={handleChange}
              placeholder="Address 2"
            />
            <Typography>City</Typography>
            <TextField
              value={data.city}
              name="city"
              onChange={handleChange}
              placeholder="City"
            />
            <Typography>Zip Code</Typography>
            <TextField
              value={data.zipCode}
              name="zipCode"
              onChange={handleChange}
              placeholder="Zip"
            />
            <Typography>State</Typography>
            <Select
              value={data.state}
              displayEmpty
              onChange={handleChange}
              inputProps={{
                name: 'state',
                id: 'state',
              }}
            >
              <MenuItem value="ak">arkansa</MenuItem>
              <MenuItem value="az">arizona</MenuItem>
              <MenuItem value="al">alabama</MenuItem>
            </Select>
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
      <Dialog
        className={classes.dialog}
        open={secondPageOpen}
        fullWidth="true"
        maxWidth="sm"
      >
        <Box component="form">
          <DialogTitle>Add Property Details</DialogTitle>
          <DialogContent className={classes.detailContainer}>
            <div>
              <Typography>Floors - optional</Typography>
              <TextField
                name="floors"
                value={data.floors}
                onChange={handleChange}
              />
            </div>
            <div>
              <Typography>Bedrooms - optional</Typography>
              <TextField
                name="bedrooms"
                value={data.bedrooms}
                onChange={handleChange}
              />
            </div>
            <div>
              <Typography>Baths - optional</Typography>
              <TextField
                name="baths"
                value={data.baths}
                onChange={handleChange}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={closeSecondDialog}
            >
              Previous
            </Button>
            <Button variant="contained" color="primary" onClick={submitForm}>
              Save and Close
            </Button>
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
