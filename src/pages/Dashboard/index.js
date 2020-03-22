import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from 'components/Chart';
import Deposits from 'components/Deposits';
import ExpensesList from './ExpensesList';
import styles from './style.module.css'

export function createData(date, name, description, paymentMethod, amount) {
  return { date, name, description, paymentMethod, amount };
}

const expensesData = [
  createData(new Date(), 'Elvis Presley', 'Taxi toto', 'Cash', 312.44),
  createData(new Date(2019, 1, 1), 'Paul McCartney', 'Train toto', 'Cash', 866.99),
  createData(new Date(2019, 7, 10), 'Tom Scholz', 'Avion titi', 'Carte', 100.81),
  createData(new Date(), 'Michael Jackson', 'Frais visas', 'Cheque', 654.39),
  createData(new Date(), 'Bruce Springsteen', 'Repas client', 'Cheque', 212.79),
]

export default class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={[styles.fixedHeight, styles.paper].join(' ')}>
              <Chart expenses={[]} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={[styles.fixedHeight, styles.paper].join(' ')}>
              <Deposits expenses={[]} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={[styles.paper].join(' ')}>
              <ExpensesList expenses={[]} addExpense={() => { }} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

}


