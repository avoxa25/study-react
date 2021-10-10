import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './global-styles.scss';

import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <App test="test" />
  </React.StrictMode>,
  document.getElementById('root')
);