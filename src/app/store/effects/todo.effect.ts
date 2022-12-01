import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TodoService} from "../../service/todo.service";
import {select, Store} from "@ngrx/store";
import {
  deleteTodoAPISuccess,
  invokeDeleteTodoAPI,
  invokeSaveNewTodoAPI,
  invokeTodoAPI,
  invokeUpdateTodoAPI,
  saveNewTodoAPISucess,
  todoFetchAPISuccess, updateTodoAPISucess
} from "../actions/todo.action";
import {EMPTY, map, mergeMap, switchMap, withLatestFrom} from "rxjs";
import {selectTodo} from "../selector/todo.selector";

@Injectable()
export class TodoEffect{
    constructor(private action$: Actions, private todoService: TodoService, private store: Store) {}

  loadAllTodos$ = createEffect(()=>
    this.action$.pipe(
      ofType(invokeTodoAPI),
      withLatestFrom(this.store.pipe(select(selectTodo))),
      mergeMap(([,TodoStore])=>{
        if(TodoStore.length > 0){
          return EMPTY;
        }
        return this.todoService.get().pipe(map((data)=>todoFetchAPISuccess({todos:data})));
      })

    )
  );

  addTodo$ = createEffect(()=>
    this.action$.pipe(
      ofType(invokeSaveNewTodoAPI),
      switchMap((action)=>{
        return this.todoService.create(action.newTodo).pipe(
          map((data)=>{
            return saveNewTodoAPISucess({ newTodo: data });
          })
        )
      })
    )
  );

  updateTodoAPI$ = createEffect(() => {
    return this.action$.pipe(
      ofType(invokeUpdateTodoAPI),
      switchMap((action) => {
        return this.todoService.update(action.updateTodo).pipe(
          map((data) => {
            return updateTodoAPISucess({ updateTodo: action.updateTodo });
          })
        );
      })
    );
  });

  deleteTodoAPI$ = createEffect(() => {
    return this.action$.pipe(
      ofType(invokeDeleteTodoAPI),
      switchMap((actions) => {
        return this.todoService.delete(actions._id).pipe(
          map(() => {
            return deleteTodoAPISuccess({ _id: actions._id });
          })
        );
      })
    );
  });

}
