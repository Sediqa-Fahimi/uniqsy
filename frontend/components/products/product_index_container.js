import ProductIndex from "./product_index";
import { fetchProducts } from '../../actions/product_actions';
import { asArray } from '../../reducers/selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        products: asArray(state.entities)
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductIndex);