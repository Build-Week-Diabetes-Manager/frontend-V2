import React from 'react';
import Search from './Search';
import {DailyGlucoseChart} from './graphs/DailyGlucoseChart';


function Home() {
  return (
    <div className="Home">
      <DailyGlucoseChart  />
      <Search/>
    </div>
  );
}

export default Home;
