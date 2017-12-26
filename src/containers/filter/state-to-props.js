export default (state) => {
    const groups = state.filterState || {};
    const specialists = state.mapState.specialists || [];
    const filters = state.mapState.activeFilters || {};
    return {
        groups,
        specialists,
        filters
    };
};
