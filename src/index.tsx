import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './global-styles.scss';

import Clock from './components/clock/clock';

ReactDOM.render(
  <React.StrictMode>
    <Clock test="MSC" />
  </React.StrictMode>,
  document.getElementById('root')
);