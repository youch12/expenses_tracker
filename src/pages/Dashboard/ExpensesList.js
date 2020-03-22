import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ExpenseForm from './ExpenseForm';
import Title from 'components/Title';
import format from 'date-fns/format';

const shortid = require('shortid');

export default class ExpensesListCmp extends React.Component {

  render() {
    const { expenses } = this.props;

  return (
    <React.Fragment>
      <Title>Recent Expenses</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map(row => (
            <TableRow key={shortid.generate()}>
              <TableCell>{format(row.date,'dd/MM/yyyy')}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ExpenseForm addExpense={this.props.addExpense} />
    </React.Fragment>
  );
  }
}
