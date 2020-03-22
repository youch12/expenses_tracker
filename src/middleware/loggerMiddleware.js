export const logger = store => next => action => {
    console.log("Store Before ", store.getState())
    console.log("Action dipatched ", action)
    const nextStore = next(action);
    console.log("State after ", store.getState())
    return nextStore;

}

export default logger;