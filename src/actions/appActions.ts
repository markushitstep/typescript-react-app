import { Todo } from '../thunk/appThunk'

export enum ActionTypes {
    fetchTodos,
    deleteTodo
}

export const fetchTodosAction = (payload: Todo[] ) => ({type: ActionTypes.fetchTodos, payload }) 