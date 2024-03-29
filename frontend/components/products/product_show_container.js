import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { selectProduct, checkCartItem, selectReviewsForProduct } from '../../reducers/selectors';
import { addCartItem, updateCartItem } from '../../actions/cartitem_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, { match } ) => {
    const productId = parseInt(match.params.productId);
    const product = selectProduct(state.entities,productId);
    const cartitemId = checkCartItem(state.entities, productId);
    const reviews = selectReviewsForProduct(state.entities, product);
    return {
        userId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        productId,
        product,
        cartitemId,
        reviews
    };
};


const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        addCartItem: (cartitem) => dispatch(addCartItem(cartitem)),
        updateCartItem: (id, cartitem, increase) => dispatch(updateCartItem(id, cartitem, increase)),
        openModal: modal => dispatch(openModal(modal))
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductShow));