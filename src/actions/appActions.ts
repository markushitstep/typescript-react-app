import { Todo } from '../thunk/appThunk'
import { FetchTodosAction, DeleteTodosAction } from '../thunk/appThunk'

export enum ActionTypes {
    fetchTodos,
    deleteTodo
}

export type Action = FetchTodosAction | DeleteTodosAction; //type union 

export const fetchTodosAction = (payload: Todo[] ) => ({type: ActionTypes.fetchTodos, payload }) 