import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from './../actions/session_actions';

import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLOSE_MODAL:
            return [];
        case OPEN_MODAL:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;