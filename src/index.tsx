import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './global-styles.scss';

import Clock from './components/clock/clock';
import TimeCard from './components/time-card/time-card';

ReactDOM.render(
  <React.StrictMode>
    <Clock test="MSC" />
    <TimeCard />
  </React.StrictMode>,
  document.getElementById('root')
);