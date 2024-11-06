// import { PureComponent } from 'react';
// import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdAutoAwesomeMosaic } from 'react-icons/md';

// const data = [
//   { name: 'Active', value: 40 },
//   { name: 'Inactive', value: 20 },
//   { name: 'Testing', value: 5 },
//   // { name: 'Group D', value: 200 },
// ];

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`PV ${value}`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

// export default class PieChartComponent extends PureComponent {
//   static demoUrl =
//     'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

//   state = {
//     activeIndex: 0,
//   };

//   onPieEnter = (_, index) => {
//     this.setState({
//       activeIndex: index,
//     });
//   };

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="60%">
//         <h1 className="text-xl text-center font-mono font-bold mb-2">Device Overview</h1>
//         <PieChart width={400} height={400}>
//           <Pie
//             activeIndex={this.state.activeIndex}
//             activeShape={renderActiveShape(fill)}
//             data={data}
//             cx="50%"
//             cy="50%"
//             innerRadius={60}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             onMouseEnter={this.onPieEnter}
//           />
//         </PieChart>
//         <div className="text-xl text-start ml-4">
//           <List spacing={3}>
//             <ListItem>
//               <ListIcon as={MdAutoAwesomeMosaic} color="green.500" />
//               <strong>{data[0].value}</strong>  Active
//             </ListItem>
//             <ListItem>
//               <ListIcon as={MdAutoAwesomeMosaic} color="green.500" />
//               <strong>{data[1].value}</strong>  Inactive
//             </ListItem>
//             <ListItem>
//               <ListIcon as={MdAutoAwesomeMosaic} color="green.500" />
//               <strong>{data[2].value}</strong>  Testing
//             </ListItem>
//           </List>
//         </div>
//       </ResponsiveContainer>
//     );
//   }
// }
import { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Active', value: 40 },
  { name: 'Testing', value: 10 },
  { name: 'Warning', value: 3 },
];
const COLORS = ['#4c1d95', '#8b5cf6', '#ddd6fe'];

export default class PieChartComponent extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <ResponsiveContainer width="80%" height="60%" className='m-auto'>
        <h1 className="text-xl text-center font-mono font-bold mb-2">Device Overview</h1>
        <PieChart nMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="text-xl text-start ml-4">
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdAutoAwesomeMosaic} color={COLORS[0]}/>
              <strong>{data[0].value}</strong> Active
            </ListItem>
            <ListItem>
              <ListIcon as={MdAutoAwesomeMosaic} color={COLORS[1]} />
              <strong>{data[1].value}</strong> Inactive
            </ListItem>
            <ListItem>
              <ListIcon as={MdAutoAwesomeMosaic} color={COLORS[2]}/>
              <strong>{data[2].value}</strong> Testing
            </ListItem>
          </List>
        </div>
      </ResponsiveContainer>
    );
  }
}
