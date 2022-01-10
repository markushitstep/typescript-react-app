import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { todosReducer } from '../reducers/todos'
import { Todo } from '../thunk/appThunk';

export interface StoreState {
    todos: Todo[]
}

const reducers = combineReducers<StoreState>({
    todos: todosReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;