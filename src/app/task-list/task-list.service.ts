import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const TODOS = [
  { title: 'Install Angular CLI', dectription: 'true' },
  { title: 'Style app', dectription: 'true' },
  { title: 'Finish service functionality', dectription: 'false' },
  { title: 'Setup API', dectription: 'false' },
];

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private api = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get(this.api);
  }

  /** POST: add a new hero to the database */
  create(task: object): Observable<object> {
    return this.httpClient.post(this.api, task);
  }

  update(task: object,_id: any): Observable<object> {
    return this.httpClient.put(`${this.api}/${_id}`, task);
  }

  delete(_id: any){
    return this.httpClient.delete(`${this.api}/${_id}`);
  }
}
