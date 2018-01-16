import specialists from '../../metadata/specialists';

export const getSpecialists = () => {
    return specialists;
}

export const filterSpecialists = (filters) => {
    let temp = [...specialists].map((specialist) => ({...specialist}));
    for (let key in filters) {
        filters[key].forEach((option) => {
            temp = temp.filter( specialist => {
                return specialist.categories[key].includes(option);
            })
        });
    }
    return temp;
}
