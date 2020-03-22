export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

export default function reducer(state = {
    notificationCount: 6,
}, action) {

    switch (action.type) {
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                notificationCount: state.notificationCount - 1
            };
        default:
            return state;
    }
}

export const removeNotification = () => dispatch => dispatch({ type: REMOVE_NOTIFICATION })