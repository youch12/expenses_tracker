import React from 'react';
import CustomersList from './CustomersList';
import iiHOC from 'hoc';

export function createData(subDate, name, email) {
    return { subDate, name, email };
}

const customers = [
    createData(new Date(2018, 3, 28), 'Clarisse Norvell', 'cnorvell0@homestead.com'),
    createData(new Date(2002, 1, 1), 'Gerome Tye', 'gtye1@acquirethisname.com'),
    createData(new Date(2015, 7, 10), 'Rockie Agdahl', 'ragdahl2@vinaora.com'),
    createData(new Date(2014, 5, 16), 'Nanice Feckey', 'nfeckey3@disqus.com'),
    createData(new Date(1999, 12, 12), 'Keeley Tabord', 'ktabord4@apple.com'),
]


const EnhancedList = iiHOC(CustomersList)

export default function () {

    return <EnhancedList customers={customers} />;
}

