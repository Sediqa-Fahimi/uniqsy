
import { connect } from 'react-redux';
import Search from './search';
import { asArray } from '../../reducers/selectors';
import { fetchProducts } from '../../actions/product_actions';

const mSTP = state => {
    return {
        products: asArray(state.entities)
    }
}
const mDTP = dispatch => {
    return {
        fetchProducts: ()=> dispatch(fetchProducts())
    }
}

export default connect(mSTP, mDTP)(Search);