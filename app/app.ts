import 'reflect-metadata';

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {provider} from 'ng2-redux';

import rootReducer from './reducers/index';

import './index.html';

@Component({
  selector: 'er-app',
  template: `
    <h1>Hello World</h1>
  `
})
class App {}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

bootstrap(
    App, 
    [
      provider(store)
    ]);


