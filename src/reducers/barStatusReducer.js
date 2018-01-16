import { handleActions } from 'redux-actions';
import { filterState as defaultState } from './defaultState.js';

import ACTIONS from '../actions/actionsConstants.js';

export default handleActions({
    default: state => state,
    [ACTIONS.SET_FILTER_BAR_STATUS]: (state, { isShown }) => {
        return {
            ...state,
            barShown: isShown
        }
    },

}, defaultState);
