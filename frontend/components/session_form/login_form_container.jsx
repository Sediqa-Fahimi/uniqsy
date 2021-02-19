
import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import SessionForm from './session_form';
import { fetchCartItems } from '../../actions/cartitem_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign in',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        fetchCartItems: () => dispatch(fetchCartItems()),
        login: guest => dispatch(login(guest)),
        otherForm: (
            <button type="button" onClick={() => dispatch(openModal('signup'))} className="register-btn">
                Register
            </button>
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
