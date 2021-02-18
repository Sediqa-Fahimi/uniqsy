import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { selectProduct } from '../../reducers/selectors';
import { addCartItem } from '../../actions/cartitem_actions';

const mapStateToProps = (state, { match }) => {
    const productId = parseInt(match.params.productId);
    const product = selectProduct(state.entities,productId);
    return {
        userId: state.session.id,
        productId,
        product
    };
};


const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        addCartItem: (cartitem) => dispatch(addCartItem(cartitem))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductShow);