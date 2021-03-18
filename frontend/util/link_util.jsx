import React from 'react';
import { Route, Link } from 'react-router-dom';

export const ReviewLink = ({ label, to }) => (
  <Route path={to} children={({ match }) => (
    <div className="review-link">
      {match ? "" : <Link to={to} className="review-L">{label}</Link>}
    </div>
  )} />
);
