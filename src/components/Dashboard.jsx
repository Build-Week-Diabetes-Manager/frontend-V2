import React from 'react';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';
import BglForm from './BglForm'
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import ZingChart from 'zingchart-react';

function Dashboard() {
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
  const data2 ={
      type: 'line',
      title: {
        color: "#ffff00"
      },
      scaleX: {
        // Set scale label
        label: { text: 'Days' },
        // Convert text on scale indices
        labels: [ 'Morning', 'Noon', 'Afternoon', 'Evening', 'Nighttime', 'MidNight', 'Sun' ]
      },
      
      series: [{
        values: [4,100,3,4,5,3,5],
        text:"Hello"
      },
    {
      values:[1,2,4,10,6,6,7],
      text:"Hooele"
    }],

  }
  return (
    <div className="Dashboard">
        <ZingChart data={data2}/>
        <BglForm/>
    </div>
  );
}

export default Dashboard;
