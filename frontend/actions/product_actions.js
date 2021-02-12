import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const receiveProducts = products => {
    return {
    type: RECEIVE_PRODUCTS,
    products
    }
};

export const fetchProducts = () => dispatch => {
    return APIUtil.fetchProducts().then(products => dispatch(receiveProducts(products)));
}
