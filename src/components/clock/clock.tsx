import * as React from 'react';

export default class Clock extends React.Component<{}> {
  public props: any;
  public state: any;
  private timer?: NodeJS.Timer;

  constructor(props: any) {
    super(props);

    this.props = props;
    this.state = { date: new Date() }
  }

  public componentDidMount(): void {
    this.timer = setInterval(() => this.launchClock(), 1000);
  }

  public componentWillUnmount(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private launchClock(): void {
    this.setState({ date: new Date() });
  }

  render(): JSX.Element {
    return (
      <section>
        <h2 className="red">Time is Now:</h2>
        <p>{this.state.date.toLocaleTimeString()}, {this.props.test}</p>
      </section>
    )
  }
}