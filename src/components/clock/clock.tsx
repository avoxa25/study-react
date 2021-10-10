import * as React from 'react';

export default class Clock extends React.Component<{}> {
  public props: any;
  public state: any;

  constructor(props: any) {
    super(props);

    this.props = props;
    this.state = {date: new Date()}
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