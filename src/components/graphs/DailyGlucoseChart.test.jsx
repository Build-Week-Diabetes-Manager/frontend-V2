import React from 'react';
import ReactDOM from 'react-dom';
import {DailyGlucoseChart} from './DailyGlucoseChart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DailyGlucoseChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});


