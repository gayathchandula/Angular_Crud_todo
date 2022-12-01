import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Todo} from "../models/todo.model";


export const selectTodo = createFeatureSelector<Todo[]>('Todos');

export const selectTodoById = (todoId: string) =>
  createSelector(selectTodo, (todos: Todo[]) => {
    var todobyId = todos.filter((_) => _._id == todoId);
    if (todobyId.length == 0) {
      return null;
    }
    return todobyId[0];
  });
