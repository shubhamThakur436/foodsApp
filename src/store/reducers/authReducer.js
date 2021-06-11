import { LOGIN, LOGOUT } from "../actions/actionTypes";

const initial_state = {
    loggedIn: false
}

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                loggedIn: true
            };
        case LOGOUT:
            return {
                loggedIn: false
            };
        default:
            return state;
    }
}

export default reducer;