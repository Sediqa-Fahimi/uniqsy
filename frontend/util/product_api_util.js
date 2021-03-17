
export const fetchProducts = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/products`
    })
}
export const fetchProduct = id => (
    $.ajax({
        method: 'GET',
        url: `api/products/${id}`
    })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review }
  })
);