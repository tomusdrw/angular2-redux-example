/// <reference path="custom.d.ts" />

import 'reflect-metadata';

import {bootstrap} from 'angular2/platform/browser';

import {createStore, applyMiddleware} from 'redux';
let thunk = require('redux-thunk');
import {provider} from 'ng2-redux';

import {App} from './pages/App';
import {rootReducer} from './reducers/index';

import './index.html';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

bootstrap(
    App, 
    [
      provider(store)
    ]);


