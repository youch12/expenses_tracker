import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from 'components/Chart';
import Deposits from 'components/Deposits';
import { connect } from 'react-redux';

import ExpensesList from './ExpensesList';
import styles from './style.module.css'


export class IndexPage extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={[styles.fixedHeight, styles.paper].join(' ')}>
              <Chart expenses={expenses} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={[styles.fixedHeight, styles.paper].join(' ')}>
              <Deposits expenses={expenses} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={[styles.paper].join(' ')}>
              <ExpensesList expenses={expenses} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    expenses: state.expensesList.expenses
  }
}

export default connect(mapStateToProps, null)(IndexPage);

