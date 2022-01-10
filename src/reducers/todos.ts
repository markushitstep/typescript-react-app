import { Todo, FetchTodosAction } from '../thunk/appThunk'
import { ActionTypes } from '../actions/appActions'

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:{
            return action.payload;
        }
        default:{
            return state;
        }
    }
}