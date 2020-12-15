import React from 'react';

import Table from '@material-ui/core/Table';
//  import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
/* const useStyle = makeStyles({
    tableHead: {}
}) */

const StyledHead = withStyles(() => ({
  root: {
    border: '1px solid #D4E8FE',
  },
}))(TableHead);

export default function DenseTable() {
  return (
    <TableContainer>
      <Table size="medium">
        <StyledHead>
          <TableRow>
            <TableCell>Property Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
          </TableRow>
        </StyledHead>
      </Table>
    </TableContainer>
  );
}
