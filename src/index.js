import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/App.js';
import store from './store'
import { Provider } from 'react-redux';
import {getSpecialistsCall} from './actions/mapActions.js';
import {filterSpecialists} from './actions/filterActions.js';

const temp = store.getState() || {};
store.dispatch(getSpecialistsCall());
store.dispatch(filterSpecialists(temp.mapState.activeFilters, temp.mapState.specialists));



ReactDOM.render(
    <Provider store={store}>
        <Application/>
    </Provider>
    , document.getElementById('app'));