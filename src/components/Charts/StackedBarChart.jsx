import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    connected: 4000,
    warning: 2400,
    inactive: 2400,
  },
  {
    name: 'Feb',
    connected: 3000,
    warning: 1398,
    inactive: 2210,
  },
  {
    name: 'Mar',
    connected: 2000,
    warning: 9800,
    inactive: 2290,
  },
  {
    name: 'Apr',
    connected: 2780,
    warning: 3908,
    inactive: 2000,
  },
  {
    name: 'May',
    connected: 1890,
    warning: 4800,
    inactive: 2181,
  },
  {
    name: 'Jun',
    connected: 2390,
    warning: 3800,
    inactive: 2500,
  },
  {
    name: 'Jul',
    connected: 3490,
    warning: 4300,
    inactive: 2100,
  },
];

export default class StackedBarChartComponent extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="97%" height="90%" className='pt-4'>
        <h1 className='text-xl text-start font-mono ml-3 font-bold'>Event Trend</h1>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="connected" stackId="a" fill="#3730a3" />
          <Bar dataKey="warning" stackId="a" fill="#4f46e5" />
          <Bar dataKey="inactive" stackId="a" fill="#bfdbfe" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
