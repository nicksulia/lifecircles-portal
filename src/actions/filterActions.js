import constants from './actionsConstants.js';
import {filterSpecialists as filterSpecialistsList} from '../lib/mockApi/specCall.js';

export const filterSpecialists = (filtersList) => ({
    type: constants.FILTER_SPECIALISTS,
    filteredSpecialists: filterSpecialistsList(filtersList)
});

export const setFiltersList = (groupName, value, id) => ({
    type: constants.SET_FILTERS_LIST,
    groupName,
    value,
    id
});

export const filtersBarStatus = (isShown) => ({
    type: constants.SET_FILTER_BAR_STATUS,
    isShown
});