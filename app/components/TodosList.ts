import {Component} from 'angular2/core';
import {Todo} from '../models/Todo';

@Component({
  selector: 'er-todos-list',
  inputs: ['todos'],
  template:`
    <h1>{{ todosTitles }}</h1>
  `
})
export class TodosList {

  public _todos : Todo[];
  public todosTitles: string[];

  set todos (todos) {
    console.log('Setting todos', todos);
    this._todos = todos;
    this.todosTitles = this._todos.map((t) => t.title)
  }

  get todos () {
    return this._todos;
  }
}
