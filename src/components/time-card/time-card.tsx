import * as React from 'react';

export default class TimeCard extends React.Component<{}> {
  public props: any;

  constructor(props: any) {
    super(props);

    this.props = props;
  }

  render(): JSX.Element {
    const date = new Date(this.props.timeInMs);
    const hour = date.getHours();

    if (hour % 2 === 0) {
      return (
        <p>Hour is even!</p>
      )
    } else {
      return (
        <p>Hour is odd!</p>
      )
    }
  }
}