

export const fetchCartitems = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/cartitems`
    })
}

export const createCartitem = cartitem => (
    $.ajax({
        method: 'POST',
        url: `/api/cartitems`,
        data: { cartitem }
    })
);

export const removeCartitem = id => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cartitems/${id}`
    })
}