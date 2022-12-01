import { Article } from '../models/article.model';
import {Todo} from "./todo.model";

export interface State {
  readonly article: Array<Article>;
  readonly todo: Array<Todo>
}
