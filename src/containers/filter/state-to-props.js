export default (state) => {
    const isShown = state.bar.barShown || false;
    return {
        isShown
    };
};
