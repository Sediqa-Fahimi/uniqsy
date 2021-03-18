export const selectProduct = ({ products }, productId) => {
    return products[productId] || { reviewIds: []};
};

export const asArray = ({ products }) => {
    return Object.keys(products).map(key => products[key])
}
export const itemsAsArray = ({ cartItems }) => {
    return Object.keys(cartItems).map(key => cartItems[key])
}

export const checkCartItem = ({ cartItems }, productId) => {
    let id;
    Object.values(cartItems).forEach(item => {
        if(item.product_id === productId) id = item.id;
    })
    return id;
}

export const selectReviewsForProduct = ({ products, reviews }, product) => {
  return product.reviewIds.map(reviewId => reviews[reviewId]);
};
