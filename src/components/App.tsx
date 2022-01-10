import React from 'react';
import { connect } from 'react-redux'
import { Todo, fetchTodos } from '../thunk/appThunk'
import { StoreState } from '../redux/store';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}
export class _App extends React.Component<AppProps> {
    onButtonClick = (): void => {
        this.props.fetchTodos();
    }

    renderTodos(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return <div key={todo.id}>{todo.title}</div>
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.renderTodos()}
            </div>
            )
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
    return {
        todos: state.todos
    }
}

export const App = connect(
    mapStateToProps,
    { fetchTodos }
)(_App);