import { Todo } from '../thunk/appThunk'

export enum ActionTypes {
    fetchTodos 
}

export const fetchTodosAction = (payload: Todo[] ) => ({type: ActionTypes.fetchTodos, payload }) 