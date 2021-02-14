export const selectProduct = ({ products }, productId) => {
    return products[productId];
};

export const asArray = ({ products }) => {
    return Object.keys(products).map(key => products[key])
}
