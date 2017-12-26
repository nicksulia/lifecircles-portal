export default (state) => {
    const specialists = state.mapState.specialists || [];
    const filteredSpecialists = state.mapState.filteredSpecialists || [];
    const activeFilters = state.mapState.activeFilters || {};
    return {
        specialists,
        activeFilters,
        filteredSpecialists
    };
};
