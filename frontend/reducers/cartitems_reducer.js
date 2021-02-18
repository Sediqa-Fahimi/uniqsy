

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
        default:
            return state;
    }
}
export default cartItemsReducer;