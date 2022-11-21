import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';


import { TaskListComponent } from './task-list/task-list.component';
import { LoginComponent } from './auth/login/login.component';
import { VerifyService } from './auth/verify/verify.service';

@NgModule({
  declarations: [AppComponent, TaskListComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    RouterModule.forRoot([{ path: '', canActivate:[VerifyService], component: TaskListComponent }, { path: 'login', component: LoginComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
