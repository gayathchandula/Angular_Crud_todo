
import { Action, createReducer, on} from '@ngrx/store';
import {Todo} from "../models/todo.model";
import {
  deleteTodoAPISuccess,
  saveNewTodoAPISucess,
  todoFetchAPISuccess,
  updateTodoAPISucess
} from "../actions/todo.action";



export const initialState: ReadonlyArray<Todo> =[];

export const TodoReducer = createReducer(
  initialState,
  on(todoFetchAPISuccess,(state,{todos})=>{
    return todos;
  }),
  on(saveNewTodoAPISucess, (state, { newTodo }) => {
    let newState = [...state];
    newState.unshift(newTodo);
    return newState;
  }),
  on(updateTodoAPISucess, (state, { updateTodo }) => {
    let filtered = state.filter(function(el) { return el._id != updateTodo._id; });
    filtered.unshift(updateTodo);
    return filtered;
  }),
  on(deleteTodoAPISuccess, (state, { _id }) => {
    let newState =state.filter((_) => _._id != _id);
    return newState;
  })
)
