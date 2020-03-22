import React from 'react';
import Input from '@material-ui/core/Input';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


export default class ExpenseFormCmp extends React.Component {


  render() {
    const classes = { marginTop: '30px', display: 'flex', justifyContent: 'center' }
    return (
      <div style={classes}>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              format="dd/MM/yyyy"
              name="date"
            />
          </MuiPickersUtilsProvider>
          <Input
            placeholder="Name"
            name="name"
          />
          <Input
            placeholder="Description"
            name="description"
          />
          <FormControl style={{ width: '182px', marginTop: '-16px' }}>
            <InputLabel htmlFor="payment-helper">Paiement Method</InputLabel>

            <Select
              name="paymentMethod"
            >
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Carte">Carte</MenuItem>
              <MenuItem value="Cheque">Chèque</MenuItem>
            </Select>
          </FormControl>
          <Input
            placeholder="Amount"
            name="amount"
          />
        </div>
        <Button variant="contained" color="primary">
          Add
      </Button>
      </div>
    );
  }
}