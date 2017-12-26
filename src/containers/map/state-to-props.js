export default (state) => {
    const markers = state.mapState.specialists || [];
    const activeFilters = state.mapState.activeFilters || {};
    return {
        markers,
        activeFilters
    };
};
