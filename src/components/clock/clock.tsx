import * as React from 'react';

export default class Clock extends React.Component<{}> {
  public props: any;
  public state: any;
  private timer?: NodeJS.Timer;

  constructor(props: any) {
    super(props);

    this.props = props;
    this.state = { date: new Date() }

    this.addHour = this.addHour.bind(this);
    this.makeMark = this.makeMark.bind(this);
  }

  public componentDidMount(): void {
    this.timer = setInterval(() => this.launchClock(), 1000);
  }

  public componentWillUnmount(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private launchClock(): void {
    const newDate: number = Date.parse(this.state.date) + 1000;
    this.setState({ date: new Date(newDate) });
    this.props.onTimeChange(newDate);
  }

  private addHour(): void {
    const newDate: number = Date.parse(this.state.date) + 3600 * 1000;
    this.setState({ date: new Date(newDate) });
    this.props.onTimeChange(newDate);
  }

  private makeMark(): void {
    const currentDate: Date = this.state.date;
    this.props.makeMark(currentDate);
  }

  render(): JSX.Element {
    return (
      <section>
        <h2 className="red">Time is Now:</h2>
        <p>{this.state.date.toLocaleTimeString()}, {this.props.test}</p>
        <button onClick={this.addHour}>Add hour</button>
        <button onClick={this.makeMark}>Make mark</button>
      </section>
    )
  }
}