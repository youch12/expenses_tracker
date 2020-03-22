import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import format from 'date-fns/format';

function createData(date, amount) {
  return { date, amount };
}


export default function ChartCmp({ expenses }) {
  const data = [];
  expenses.sort(function (b, a) {
    return new Date(b.date) - new Date(a.date);
  });

  expenses.forEach(element => {
    const formattedDate = format(element.date, 'dd/MM/yyyy');
    var found = data.find(elem => elem.date === formattedDate);
    if (found) {
      found.amount += element.amount;
    } else {
      data.push(createData(formattedDate, element.amount));
    }
  });
  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Expenses Nb
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
