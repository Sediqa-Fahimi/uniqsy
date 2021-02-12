
export const asArray = ({ products }) => {
    return Object.keys(products).map(key => products[key])
}
