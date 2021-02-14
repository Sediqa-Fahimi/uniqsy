import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { selectProduct } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
    const productId = parseInt(match.params.productId);
    const product = selectProduct(state.entities,productId);
    return {
        productId,
        product
    };
};


const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductShow);