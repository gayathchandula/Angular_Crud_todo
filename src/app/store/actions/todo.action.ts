import { createAction, props } from '@ngrx/store';
import {Todo} from "../models/todo.model";

export const LOAD_TODOS = '[todos page] load todos';
export const LOAD_TODOS_SUCCESS = '[todos page] load todos success';

export const invokeTodoAPI = createAction(
  '[Todos API] Invoke Todos Fetch API'
);

export const todoFetchAPISuccess = createAction(
  '[Todos API] Fetch API Success',
  props<{ todos: Todo[] }>()
);

export const invokeSaveNewTodoAPI = createAction(
  '[Todos API] Inovke save new todo api',
  props<{ newTodo: Todo }>()
);

export const saveNewTodoAPISucess = createAction(
  '[Todos API] save new todo api success',
  props<{ newTodo: Todo }>()
);

export const invokeUpdateTodoAPI = createAction(
  '[Todos API] Inovke update todo api',
  props<{ updateTodo: Todo }>()
);

export const updateTodoAPISucess = createAction(
  '[Todos API] update  todo api success',
  props<{ updateTodo: Todo }>()
);

export const invokeDeleteTodoAPI = createAction(
  '[Todos API] Inovke delete todo api',
  props<{_id:string}>()
);

export const deleteTodoAPISuccess = createAction(
  '[Todos API] deleted todo api success',
  props<{_id:string}>()
);
