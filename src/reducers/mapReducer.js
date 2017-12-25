import { handleActions } from 'redux-actions';
import { mapState as defaultState } from './defaultState.js';

import ACTIONS from '../actions/actionsConstants.js';

export default handleActions({
    default: state => state,
    [ACTIONS.SET_FILTERS_LIST]: (state, { groupName, value }) => {
        const newGroup = [ ...state.activeFilters[groupName] ];
        return newGroup.includes(value) ?
            {
                ...state,
                activeFilters: Object.assign({},
                    state.activeFilters,
                    { [groupName]: newGroup.filter((val) => val !== value) } )
            }
            :
            {
                ...state,
                activeFilters: Object.assign({},
                    state.activeFilters,
                    { [groupName]: newGroup.push(value) } )
            }
    },
    [ACTIONS.SHOW_SPECIALIST]: (state , { displayedSpecialist }) => {
        return {
            ...state,
            displayedSpecialist
        }
    },
    [ACTIONS.GET_SPECIALISTS_CALL]: (state , { specialists }) => {
        return {
            ...state,
            specialists
        }
    }
}, defaultState);
