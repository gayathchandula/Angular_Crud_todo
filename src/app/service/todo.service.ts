import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, Subject, tap} from 'rxjs';
import {Todo} from "../store/models/todo.model";



@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private api = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }


  /** GET: Get all tasks */
  get(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api);
  }

  /** POST: Save new task */
  create(payload: Todo){
    return this.http.post<Todo>(this.api,payload);
  }

  /** PUT: Update a task */
  update(payload: Todo) {
    return this.http.put<Todo>(
      `${this.api}/${payload._id}`,
      payload
    );
  }

  /** DELETE: Delete a task */
  delete(_id: string) {
    return this.http.delete(`${this.api}/${_id}`,{responseType: 'text'});
  }

}
