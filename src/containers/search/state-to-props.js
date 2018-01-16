export default (state) => {
    const groups = state.filterState || {};
    const specialists = state.mapState.specialists || [];
    const filters = state.mapState.activeFilters || {};
    const barShown = state.bar.barShown || false;
    return {
        groups,
        specialists,
        filters,
        barShown
    };
};
