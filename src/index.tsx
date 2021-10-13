import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './global-styles.scss';

import TimeWidget from './components/time/time-widget/time-widget';
import PhotoSection from './components/photo/photo-section/photo-section';

ReactDOM.render(
  <React.StrictMode>
    <TimeWidget />
    <PhotoSection/>
  </React.StrictMode>,
  document.getElementById('root')
);