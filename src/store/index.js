import { applyMiddleware, createStore, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from '../reducers'

export default compose(applyMiddleware(thunk, promiseMiddleware()))(createStore)(reducer);