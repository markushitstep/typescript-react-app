import axios from "axios"
import { Dispatch } from "redux"
import { urlTodos } from '../assets/url'

interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(urlTodos)
        dispatch({
            type: "FETCH_TODOS",
            payload: response.data
        });
    }
};