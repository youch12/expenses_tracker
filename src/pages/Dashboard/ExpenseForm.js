import React from 'react';
import Input from '@material-ui/core/Input';
import DateFnsUtils from '@date-io/date-fns';
import { connect } from 'react-redux';
import { addNdf } from './behavior';

import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


export class ExpenseFormCmp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: '',
      description: '',
      paymentMethod: '',
      amount: ''
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePmChange = this.handlePmChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(value) {
    this.setState({ date: value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }


  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }


  handlePmChange(event) {
    this.setState({ paymentMethod: event.target.value });
  }


  handleAmountChange(event) {
    this.setState({ amount: event.target.value });
  }

  handleSubmit(event) {
    this.props.addNdf(this.state)
  }





  render() {
    const classes = { marginTop: '30px', display: 'flex', justifyContent: 'center' }
    return (
      <div style={classes}>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              format="dd/MM/yyyy"
              name="date"
              onChange={this.handleDateChange}
              value={this.state.date}
            />
          </MuiPickersUtilsProvider>
          <Input
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <Input
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <FormControl style={{ width: '182px', marginTop: '-16px' }}>
            <InputLabel htmlFor="payment-helper">Paiement Method</InputLabel>

            <Select
              name="paymentMethod"
              value={this.state.paymentMethod}
              onChange={this.handlePmChange}
            >
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Carte">Carte</MenuItem>
              <MenuItem value="Cheque">Chèque</MenuItem>
            </Select>
          </FormControl>
          <Input
            placeholder="Amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
        </div>
        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Add
      </Button>
      </div>
    );
  }
}


export default connect(null, { addNdf })(ExpenseFormCmp);
