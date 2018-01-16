import constants from './actionsConstants.js';
import { getSpecialists } from '../lib/mockApi/specCall.js';
//import { filterSpecialists } from './filterActions.js';


export const getSpecialistsCall = () =>
    dispatch => {
        dispatch({
            type: constants.GET_SPECIALISTS_CALL,
            specialists: getSpecialists()
        });
    };

export const setSpecialist = (specialist) => ({
    type: constants.SHOW_SPECIALIST,
    displayedSpecialist: specialist
});