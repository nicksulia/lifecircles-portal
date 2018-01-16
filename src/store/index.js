'use strict';

import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';

const store = compose(applyMiddleware(thunk, promiseMiddleware()))(createStore)(rootReducer);

export default store;
