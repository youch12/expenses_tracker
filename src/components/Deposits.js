/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import format from 'date-fns/format';



export default function DepositsCmp({ expenses }) {
  const total = expenses.reduce((a, b) => +a + +b.amount, 0);
  return (
    <React.Fragment>
      <Title>Total Expenses</Title>
      <Typography component="p" variant="h4">
        {total}DH
      </Typography>
      <Typography color="textSecondary" style={{ flex: 1 }}>
        on {format(new Date(), 'dd MMM, yyyy')}
      </Typography>
      <div>
        <Link to="/" color="primary">
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}

