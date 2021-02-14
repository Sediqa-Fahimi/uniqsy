import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';


const mapStateToProps = (state, { match }) => {
    return {
        product: state.entities.products[match.params.productId]
    };
};


const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductShow);