import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';
import { fetchCartItems } from '../../actions/cartitem_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Register',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        fetchCartItems: () => dispatch(fetchCartItems()),
        login: guest => dispatch(login(guest)),
        otherForm: ("")
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
