import { handleActions } from 'redux-actions';
import { mapState as defaultState } from './defaultState.js';

import ACTIONS from '../actions/actionsConstants.js';

export default handleActions({
    default: state => state,
    [ACTIONS.SET_FILTERS_LIST]: (state, { groupName, value }) => {
        let newGroup = [ ...state.activeFilters[groupName] ];
        if (newGroup.includes(value)) {
            newGroup = newGroup.filter((option) => {
                return option !== value
            });
        } else newGroup.push(value);
        return {
            ...state,
            activeFilters : Object.assign({}, state.activeFilters, { [groupName]: newGroup})
        }

    },
    [ACTIONS.SHOW_SPECIALIST]: (state , { displayedSpecialist }) => {
        return {
            ...state,
            displayedSpecialist
        }
    },
    [ACTIONS.FILTER_SPECIALISTS]: (state , { filteredSpecialists }) => {
        return {
            ...state,
            filteredSpecialists
        }
    },
    [ACTIONS.GET_SPECIALISTS_CALL]: (state , { specialists }) => {
        return {
            ...state,
            specialists
        }
    }
}, defaultState);
