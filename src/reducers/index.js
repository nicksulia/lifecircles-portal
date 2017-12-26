import { combineReducers } from 'redux';
import filterState from './filterStateReducer.js';
import mapState from './mapReducer.js';

export default combineReducers({
    filterState,
    mapState
});