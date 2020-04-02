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

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      name: '',
      description: '',
      paymentMethod: 'Carte',
      amount: 0,
    }
  }

  onSubmit = () => {
    this.props.callParent(this.state)
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
              value={this.state.date}
              onChange={(e) => this.setState({
                date: e,
              })}
            />
          </MuiPickersUtilsProvider>
          <Input
            value={this.state.name}
            placeholder="Name"
            name="name"
            onChange={(e) => this.setState({
              name: e.target.value,
            })}
          />
          <Input
            value={this.state.description}
            placeholder="Description"
            name="description"
            onChange={(e) => this.setState({
              description: e.target.value,
            })}
          />
          <FormControl style={{ width: '182px', marginTop: '-16px' }}>
            <InputLabel htmlFor="payment-helper">Paiement Method</InputLabel>

            <Select
              value={this.state.paymentMethod}
              name="paymentMethod"
              onChange={(e) => this.setState({
                paymentMethod: e.target.value,
              })}
            >
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Carte">Carte</MenuItem>
              <MenuItem value="Cheque">Chèque</MenuItem>
            </Select>
          </FormControl>
          <Input
            value={this.state.amount}
            placeholder="Amount"
            name="amount"
            onChange={(e) => this.setState({
              amount: e.target.value,
            })}
          />
        </div>
        <Button variant="contained" color="primary"
          onClick={() => this.onSubmit()}
        >
          Add
      </Button>
      </div>
    );
  }
}