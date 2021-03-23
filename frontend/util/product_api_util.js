
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

export const deletereview = reviewId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${reviewId}`
  })
}
export const updatereview = (review) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: { review }
  })
}