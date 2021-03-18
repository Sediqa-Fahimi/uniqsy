import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import openModal from '../actions/modal_actions';

const Protected = ({ component: Component, path, loggedIn, exact, openModal }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      openModal('login')
    )
  )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.id)}
);

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal))
    }
}


export const ProtectedRoute = withRouter(connect(mapStateToProps,mapDispatchToProps)(Protected));
