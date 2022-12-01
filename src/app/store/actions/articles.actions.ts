import { Action } from '@ngrx/store';
import { Article } from '../models/article.model';

export enum ArticleActionType {
  ADD_ITEM = '[ARTICLE] Add ARTICLE',
  GET_ITEMS = '[TODO] Get TODO',
}

export class AddArticleAction implements Action {

  readonly type = ArticleActionType.ADD_ITEM;
  constructor(public payload: Article) {}

}

export class GetTodoAction implements Action {

  readonly type = ArticleActionType.GET_ITEMS;
  constructor(public payload: Article) {}

}

export type ArticleAction = AddArticleAction;
export type TodoAction = GetTodoAction;
