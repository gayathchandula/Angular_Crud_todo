import { Action } from '@ngrx/store';
// import the interface
import { Article } from '../models/article.model';
import { ArticleAction, ArticleActionType } from '../actions/articles.actions';
//create a dummy initial state
const initialState: Array<Article> = [
  {
    id: '1',
    name: 'Angular State Management with NgRx',
    author: 'Chameera Dulanga',
    publisher: 'SyncFusion',
  },
  {
    id: '1',
    name: 'Angular State Management with NgRx',
    author: 'Chameera Dulanga',
    publisher: 'SyncFusion',
  },
];
export function ArticleReducer(
  state: Array<Article> = initialState,
  action: Action
) {
  switch (action.type) {
    case ArticleActionType.ADD_ITEM:
      return [...state, (action as ArticleAction).payload];
    default:
      return state;
  }
}
