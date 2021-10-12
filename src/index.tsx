import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './global-styles.scss';

import TimeWidget from './components/time-widget/time-widget';

ReactDOM.render(
  <React.StrictMode>
    <TimeWidget />
  </React.StrictMode>,
  document.getElementById('root')
);