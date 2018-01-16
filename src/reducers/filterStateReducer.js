import { handleActions } from 'redux-actions';
import { filterState as defaultState } from './defaultState.js';

import ACTIONS from '../actions/actionsConstants.js';

export default handleActions({
    default: state => state,
    [ACTIONS.SET_FILTERS_LIST]: (state, { groupName, id }) => {
        let options = [...state[groupName].options].map(option => ({...option}));
        let group = {label: state[groupName].label, options};
        group.options[id]["checked"] = !group.options[id]["checked"];
        return {
            ...state,
            [groupName]: group
        }
    },
}, defaultState);
