import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const receiveProducts = products => {
    return {
    type: RECEIVE_PRODUCTS,
    products
    }
};

export const receiveProduct = ({ product }) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

export const fetchProducts = () => dispatch => {
    return APIUtil.fetchProducts().then(products => dispatch(receiveProducts(products)));
}

export const fetchProduct = id => dispatch => {
    return APIUtil.fetchProduct(id).then(payload => dispatch(receiveProduct(payload)));
}
