import { combineReducers } from "redux";
import cartItemsReducer from "./cartitems_reducer";
import productsReducer from "./products_reducer";

import usersReducer from "./users_reducer";
import reviewsReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    reviews: reviewsReducer,
    cartItems: cartItemsReducer
});

export default entitiesReducer;