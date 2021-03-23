import {
  RECEIVE_PRODUCT,
  RECEIVE_REVIEW,
  DELETE_REVIEW
} from '../actions/product_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_REVIEW:
      let nState = Object.assign({}, state);
      nState[action.review.id] = action.review;
      return nState;
      // const { review } = action;
      // return Object.assign({}, state, { [review.id]: review });
    case DELETE_REVIEW:
      let newState = Object.assign({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
}

export default reviewsReducer;
