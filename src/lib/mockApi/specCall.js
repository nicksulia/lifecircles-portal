import specialists from '../../metadata/specialists.json';

export const getSpecialists = () => {
    return Promise.resolve(specialists.data);
}

export const filterSpecialists = (filterList, specialists) => {
    console.log(filterList);
    console.log(specialists);
    return {};
}