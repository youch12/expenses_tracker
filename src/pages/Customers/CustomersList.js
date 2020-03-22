import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from 'components/Title';
import format from 'date-fns/format';

const shortid = require('shortid');

export default class CustomersListCmp extends React.Component {

    render() {
        const { customers } = this.props;

        return (
            <React.Fragment>
                <Title>System Customers</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Subscription Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map(row => (
                            <TableRow key={shortid.generate()}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{format(row.subDate, 'dd/MM/yyyy')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }
}
