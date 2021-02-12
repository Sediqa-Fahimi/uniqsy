
export const fetchProducts = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/products`
    })
}