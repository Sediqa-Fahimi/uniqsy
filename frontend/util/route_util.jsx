import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import OpenModalComponent from '../components/modal/open_modal';

const Protected = ({ component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <OpenModalComponent />
    )
  )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.id)}
);




export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
