import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TaskListComponent } from './task-list/task-list.component';
import { VerifyService } from './auth/verify/verify.service';
import SharedModule from './shared.module';

@NgModule({
  declarations: [AppComponent, TaskListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RouterModule.forRoot([{ path: '', canActivate: [VerifyService], component: TaskListComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
