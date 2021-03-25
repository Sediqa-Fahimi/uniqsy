
import { connect } from 'react-redux';
import Search from './search';
import { asArray } from '../../reducers/selectors';


const mSTP = state => {
    return {
        products: asArray(state.entities)
    }
}
const mDTP = dispatch => {
    return {
        
    }
}

export default connect(mSTP, mDTP)(Search);