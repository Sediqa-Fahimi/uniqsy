export const selectProduct = ({ products }, productId) => {
    return products[productId];
};

export const asArray = ({ products }) => {
    return Object.keys(products).map(key => products[key])
}
export const itemsAsArray = ({ cartItems }) => {
    return Object.keys(cartItems).map(key => cartItems[key])
}
