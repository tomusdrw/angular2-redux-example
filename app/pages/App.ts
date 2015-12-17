import {Component} from 'angular2/core';
import {Inject} from 'angular2/core';

import {bindActionCreators} from 'redux';

import * as TodosActions from '../actions/TodosActions';

import {TodosList} from '../components/TodosList';

@Component({
  selector: 'er-app',
  directives: [TodosList],
  template: `
    <er-todos-list 
      [todos]="todos">
    </er-todos-list>
    {{ todos }}
    <button
      (click)="doSth($event)"
    >Add Todo</button>
  `
})
export class App {

  public todos : any;

  private unsubscribe : () => void;
  private actions : any;

  constructor (@Inject('ngRedux') ngRedux) {
    this.unsubscribe = ngRedux.connect(
      this.mapStateToThis,
      this.mapDispatchToThis  
    )(this);
  }

  doSth () {
    this.actions.addTodo('test');
  }

  mapStateToThis (state) {
    console.log(state);
    return {
      todos: state.todos
    };
  }

  mapDispatchToThis (dispatch) {
    return {
      actions: bindActionCreators(TodosActions, dispatch)
    };
  }

  ngOnDestroy () {
    this.unsubscribe();
  }
}

