import * as React from 'react';

import Clock from '../clock/clock';
import TimeCard from '../time-card/time-card';

export default class TimeWidget extends React.Component<{}> {
  public props: any;
  public state: any = {ms: 0};
  private elapsedTime: Array<Date> = [];

  constructor(props: any) {
    super(props);

    this.props = props;
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  public handleTimeChange(ms: number): void {
    this.setState({ms: ms});
    this.elapsedTime.push(new Date(ms));
  }

  render(): JSX.Element {
    let elapsedTime = this.elapsedTime.map((item, index) => <li key={index}>{item.toLocaleTimeString()}</li>);

    return (
      <section>
        <Clock onTimeChange={this.handleTimeChange} />
        <TimeCard timeInMs={this.state.ms}/>
        <ul>
          {elapsedTime}
        </ul>
      </section>
    )
  }
}