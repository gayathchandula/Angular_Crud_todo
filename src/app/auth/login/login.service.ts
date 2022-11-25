import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  login(user: { username: string; password: string; }) {
    return this.http.post<any>(`${this.api}/login`, user)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      })
      );
  }

  verify() {
    var user = JSON.parse(localStorage.getItem("currentUser") as any);
    return user;
  }



}
