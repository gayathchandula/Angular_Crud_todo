import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private api = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) {}

  /** GET: Get all tasks */
  get() {
    return this.httpClient.get(this.api);
  }

  /** POST: Create a new task */
  create(task: object): Observable<object> {
    return this.httpClient.post(this.api, task);
  }
  /** PUT: Update a existing task */
  update(task: object,_id: any): Observable<object> {
    return this.httpClient.put(`${this.api}/${_id}`, task);
  }
  /** DELETE: Delete a Specific task */
  delete(_id: any){
    return this.httpClient.delete(`${this.api}/${_id}`);
  }
}
