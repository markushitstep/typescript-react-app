import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    counter: () => 0
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;