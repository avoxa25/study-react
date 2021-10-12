import * as React from 'react';

import Clock from '../clock/clock';
import TimeCard from '../time-card/time-card';

export default class TimeWidget extends React.Component<{}> {
  render(): JSX.Element {
    return (
      <section>
        <Clock />
        <TimeCard />
      </section>
    )
  }
}