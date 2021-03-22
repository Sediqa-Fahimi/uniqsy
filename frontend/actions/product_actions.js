import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const receiveProducts = products => {
    return {
    type: RECEIVE_PRODUCTS,
    products
    }
};

export const receiveProduct = ({ product, reviews, authors }) => {
    return {
        type: RECEIVE_PRODUCT,
        product,
        reviews,
        authors
    }
}
export const receiveReview = ({ review, average_rating, author }) => {
    return {
        type: RECEIVE_REVIEW,
        review,
        average_rating,
        author,
    }
};
export const removeReview = reviewId => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

export const fetchProducts = () => dispatch => {
    return APIUtil.fetchProducts().then(products => dispatch(receiveProducts(products)));
}

export const fetchProduct = id => dispatch => {
    return APIUtil.fetchProduct(id).then(payload => dispatch(receiveProduct(payload)));
}

export const createReview = review => dispatch => {
  return APIUtil.createReview(review).then(payload => {
    dispatch(receiveReview(payload))
  })
};

export const deleteReview = id => dispatch => {
    return APIUtil.deletereview(id).then(()=> dispatch(removeReview(id)))
};