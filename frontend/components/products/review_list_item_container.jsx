import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, content } = review;
  return (
    <div>
      <ul>
        <li>Rating: {rating}</li>
        <li>{content} - by {author.first_name}</li>

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
