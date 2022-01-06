import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color?: string; // optional
}
interface AppState {
    counter: number; // optional
}
class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = { counter: 0 }
    }

    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1 })
    }
    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                {this.state.counter}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));