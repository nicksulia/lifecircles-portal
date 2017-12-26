import { handleActions } from 'redux-actions';
import { filterState as defaultState } from './defaultState.js';

import ACTIONS from '../actions/actionsConstants.js';

export default handleActions({
    default: state => state,
    [ACTIONS.SET_FILTERS_LIST]: (state, { groupName, id }) => {
        const group = Object.assign({}, state[groupName]);
        group.options[id]["checked"] = !group.options[id]["checked"];
        return {
            ...state,
            [groupName]: group
        }
    },
}, defaultState);
