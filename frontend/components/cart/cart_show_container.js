
import CartShow from "./cart_show";
import { fetchCartItems, deleteCartItem, updateCartItem } from '../../actions/cartitem_actions';
import { itemsAsArray } from '../../reducers/selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        items: itemsAsArray(state.entities)
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchCartItems: () => dispatch(fetchCartItems()),
        deleteCartItem: (id) => dispatch(deleteCartItem(id)),
        updateCartItem: (id, cartitem, increase) => dispatch(updateCartItem(id, cartitem, increase))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartShow);