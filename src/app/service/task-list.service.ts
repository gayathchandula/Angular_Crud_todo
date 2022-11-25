import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class TaskListService {

    private api = 'http://localhost:3000/todos';
    private todos = new Subject<void>();

    constructor(private httpClient: HttpClient) { }

    get refreshTodo() {
        return this.todos;
    }

    /** GET: Get all tasks */
    get(): Observable<object> {
        return this.httpClient.get(this.api);
    }

    /** POST: Create a new task */
    create(task: object): Observable<object> {
        return this.httpClient.post(this.api, task).pipe(
            tap(() => {
                this.todos.next();
            })
        );
    }
    /** PUT: Update a existing task */
    update(task: object, _id: any): Observable<object> {
        return this.httpClient.put(`${this.api}/${_id}`, task).pipe(
            tap(() => {
                this.todos.next();
            })
        );
    }
    /** DELETE: Delete a Specific task */
    delete(_id: any): Observable<object> {
        return this.httpClient.delete(`${this.api}/${_id}`).pipe(
            tap(() => {
                this.todos.next();
            })
        );
    }
}
