import axios from "axios"
import { Dispatch } from "redux"
import { todoUrl } from '../config'
import { ActionTypes, fetchTodosAction } from '../actions/appActions'

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}
export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        if (todoUrl) {
            const response = await axios.get<Todo[]>(todoUrl)

            dispatch<FetchTodosAction>({
                type: ActionTypes.fetchTodos,
                payload: response.data
            });
            dispatch<FetchTodosAction>(fetchTodosAction(response.data));
        }
        else {
            throw Error(`${todoUrl} undefined`)
        }
    }
};