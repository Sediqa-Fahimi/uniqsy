import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const OpenModalComponent = ({ openModal }) => {
    const signIn = () => {
        openModal('login');
    }
    return (
        <>
            {signIn()}
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal))
    }
}
export default connect(null, mapDispatchToProps)(OpenModalComponent);