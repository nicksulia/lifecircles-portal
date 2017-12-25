import constants from './actionsConstants.js';
import {filterSpecialistsList} from '../lib/mockApi/specCall.js';

export const filterSpecialists = (filtersList, specialists) => ({
    type: constants.FILTER_SPECIALISTS,
    filteredSpecialists: filterSpecialistsList(filtersList, specialists)
});

export const setFiltersList = (groupName, value, id) => ({
    type: constants.SET_FILTERS_LIST,
    groupName,
    value,
    id
});