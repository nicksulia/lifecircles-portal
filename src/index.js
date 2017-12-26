import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/App.js';
import store from './store'
import { Provider } from 'react-redux';
import {getSpecialistsCall} from './actions/mapActions.js';

store.dispatch(getSpecialistsCall());

ReactDOM.render(
    <Provider store={store}>
        <Application/>
    </Provider>
    , document.getElementById('app'));