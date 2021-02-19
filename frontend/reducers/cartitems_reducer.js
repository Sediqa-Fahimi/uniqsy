import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_ITEMS, REMOVE_ITEM } from '../actions/cartitem_actions';

const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ITEMS:
            return action.items;
        case REMOVE_ITEM:
            const newState = Object.assign({}, state);
            delete newState[action.itemId];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}
export default cartItemsReducer;