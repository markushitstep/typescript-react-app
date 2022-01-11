import React from 'react';
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodos } from '../thunk/appThunk'
import { StoreState } from '../redux/store';

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodos: typeof deleteTodos;
}

interface AppState {
    fetching: boolean;
}
export class _App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = { fetching: false };
    }
    componentDidUpdate(prevP: AppProps): void {
        if (!prevP.todos.length && this.props.todos.length) {
            this.setState({ fetching: false });
        }
    }
    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true });
    }
    onTodoClick = (id: number): void => {
        this.props.deleteTodos(id);
    }

    renderTodos(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>{
                    todo.title
                }</div>
            )
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? "LOADING" : null}
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
    { fetchTodos, deleteTodos }
)(_App);