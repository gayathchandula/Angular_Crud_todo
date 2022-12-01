import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {StoreModule} from "@ngrx/store";
import { ArticleReducer } from './store/reducers/article.reducer';
import {TodoService} from "./service/todo.service";
import {TodoReducer} from "./store/reducers/todo.reducer";
import {EffectsModule} from "@ngrx/effects";
import {TodoEffect} from "./store/effects/todo.effect";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    StoreModule.forRoot({
      article: ArticleReducer,
    }),
    StoreModule.forFeature(
      'Todos',TodoReducer
    ),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TodoEffect]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
