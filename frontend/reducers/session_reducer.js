
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './../actions/session_actions';

const _nullCurrentUser = {
    id: null
}
const sessionReducer = (state = _nullCurrentUser, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.currentUser.id });
        case LOGOUT_CURRENT_USER:
            return _nullCurrentUser;
        default:
            return state;
    }
}
export default sessionReducer;