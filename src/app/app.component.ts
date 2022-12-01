import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {map, Observable, switchMap} from 'rxjs';
import { Article } from './store/models/article.model';
import { State } from './store/models/state.model';
import { AddArticleAction, GetTodoAction } from './store/actions/articles.actions';
import {TodoService} from "./service/todo.service";
import {
  invokeDeleteTodoAPI,
  invokeSaveNewTodoAPI,
  invokeTodoAPI,
  invokeUpdateTodoAPI
} from "./store/actions/todo.action";
import {selectTodo} from "./store/selector/todo.selector";
import {Todo} from "./store/models/todo.model";
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  articles$: Observable<Array<Article>> | undefined;
  constructor(private store: Store<State>, private service:TodoService) {}

  myId: string = uuid();

  todoForm: Todo = {
    _id: this.myId,
    title: '',
    description: ''
  };

  todoUpdateForm: Todo = {
    _id: '',
    title: '',
    description: ''
  };

  editing: boolean = false;

  todos$ = this.store.pipe(select(selectTodo));

  /** Display popup on edit btn click */
  updatePopup(_id:string,title:string,description:string) {
    this.todoUpdateForm._id = _id,
      this.todoUpdateForm.title = title,
      this.todoUpdateForm.description = description
    this.editing = true;
  }

  /** Close the popup */
  closePopup() {
    this.editing = false;
  }


  ngOnInit() {
    this.store.dispatch(invokeTodoAPI());
    this.articles$ = this.store.select((store) => {
      return store.article
    });
  }

  addArticle(form: NgForm) {
    this.store.dispatch(new AddArticleAction(form.value));
    form.reset();
  }

  save() {
    this.store.dispatch(invokeSaveNewTodoAPI({ newTodo: this.todoForm }));
  }

  /** Task update */
  updateOne() {
    this.store.dispatch(
      invokeUpdateTodoAPI({ updateTodo: { ...this.todoUpdateForm } })
    );
  }

  /** Task delete */
  deleteOne(_id: string) {
    this.store.dispatch(
      invokeDeleteTodoAPI({
        _id: _id,
      })
    );
  }

}
