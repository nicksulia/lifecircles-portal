import constants from './actionsConstants.js';
import { getSpecialists } from '../lib/mockApi/specCall.js';
import { filterSpecialists } from './filterActions.js';


export const getSpecialistsCall = (filtersList) =>
    dispatch => {
        dispatch({
            type: constants.GET_SPECIALISTS_CALL,
            specialists: getSpecialists().then(specialists => dispatch(filterSpecialists(filtersList, specialists)))
        });

    };

export const setSpecialist = (specialist) => ({
    type: constants.SHOW_SPECIALIST,
    displayedSpecialist: specialist
});