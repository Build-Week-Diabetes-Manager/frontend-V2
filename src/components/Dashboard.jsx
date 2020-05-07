import React from 'react';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';
function Dashboard() {
  function onChange(time, timeString) {
    console.log(time, timeString);
  }
  return (
    <div className="Dashboard">
        <DatePicker />
        <TimePicker use12Hours format="h:mm a" onChange={onChange} />
    </div>
  );
}

export default Dashboard;
