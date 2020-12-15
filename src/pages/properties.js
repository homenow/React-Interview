import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import NavBar from '../components/navBar';
import TableProperty from '../components/tableProperty';
import DialogAddProperty from '../components/dialogAddProperty';

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
  const [openDialog, setOpenDialog] = React.useState(false);
  const [data, setTableData] = React.useState([]);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

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
            onClick={handleOpenDialog}
          >
            Add Property
          </Button>
          <DialogAddProperty
            open={openDialog}
            onClose={setOpenDialog}
            setTableData={setTableData}
            tableData={data}
          />
        </div>
        <TableProperty data={data} />
      </div>
    </div>
  );
}
