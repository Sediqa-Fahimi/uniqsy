import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, RECEIVE_REVIEW, DELETE_REVIEW } from '../actions/product_actions';

const productsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type){
        case RECEIVE_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            const newProduct = { [action.product.id]: action.product };
            return Object.assign({}, state, newProduct);
        case RECEIVE_REVIEW:
            const { review, average_rating } = action;
            const newState = Object.assign({}, state);
            if(newState[review.product_id].reviewIds.includes(review.id)){
                let index = newState[review.product_id].reviewIds.indexOf(review.id);
                newState[review.product_id].reviewIds[index] = review.id;
            } else{
                newState[review.product_id].reviewIds.push(review.id);
            }
            newState[review.product_id].average_rating = average_rating;
            return newState;
        case DELETE_REVIEW:
            let newStat = Object.assign({}, state);
            let idx = newStat[action.review.product_id].reviewIds.indexOf(action.review.id);
            if(idx > -1){
                delete newStat[action.review.product_id].reviewIds[idx];
            }
            return newStat;
        default:
            return state;
    }
}
export default productsReducer;