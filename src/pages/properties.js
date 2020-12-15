import React from 'react';
import { Button } from '@material-ui/core';

import NavBar from '../components/navBar';
import TableProperty from '../components/tableProperty';

export default function Properties() {
  return (
    <div>
      <NavBar />
      <div>
        <h1>My Properties</h1>
        <Button variant="contained" color="primary">
          Add Property
        </Button>
        <TableProperty />
      </div>
    </div>
  );
}
