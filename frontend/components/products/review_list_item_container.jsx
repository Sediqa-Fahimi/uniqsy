import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, content, created_at } = review;
  return (
    <div className="review-item">
      <ul>
        <li>{author.first_name}{created_at}</li>
        <li>Rating: {rating}</li>
        <li>{content}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({entities: { users }}, { review }) => {
  return {
    author: users[review.author_id]
  };
};

export default connect(mapStateToProps)(Review);
