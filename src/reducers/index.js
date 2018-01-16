import { combineReducers } from 'redux';
import filterState from './filterStateReducer.js';
import mapState from './mapReducer.js';
import bar from './barStatusReducer.js'

export default combineReducers({
    filterState,
    mapState,
    bar
});
