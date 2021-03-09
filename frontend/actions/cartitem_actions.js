
import * as APIUtil from '../util/cartitem_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const receiveCartItems = items => {
    return {
        type: RECEIVE_ITEMS,
        items
    }
};
export const removeCartItem = itemId => {
    return {
        type: REMOVE_ITEM,
        itemId
    }
};


export const fetchCartItems = () => dispatch => {
    return APIUtil.fetchCartitems().then(items => dispatch(receiveCartItems(items)));
}

export const addCartItem = cartitem => dispatch => {
    return APIUtil.createCartitem(cartitem).then(items => dispatch(receiveCartItems(items)));
}

export const deleteCartItem = id => dispatch => {
    return APIUtil.removeCartitem(id).then(() => dispatch(removeCartItem(id)));
}

export const updateCartItem = (id, cartitem, increase) => dispatch => {
    return APIUtil.updateCartitem(id, cartitem, increase).then(items => dispatch(receiveCartItems(items)));
}

