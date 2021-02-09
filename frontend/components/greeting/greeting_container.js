
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal} from '../../actions/modal_actions';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}
const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mSTP, mDTP)(Greeting);