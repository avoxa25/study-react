import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}> {
    public props: any;

    constructor(props: any) {
        super(props);
        
        this.props = props;
    }

    render(): JSX.Element {
        return (
                <h1 className='red'>
                    Hello, it's Vladimir Abdullaev's study project2
                    <br/>
                    {new Date().toLocaleTimeString()}

                    {this.props.test}
                </h1>
        )
    }
}