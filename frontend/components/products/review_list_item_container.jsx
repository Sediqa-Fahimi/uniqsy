import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, content, created_at } = review;
 
  const dateArray = new Date(created_at).toString().split(' ');
  const date = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
 
  return (
    <div className="review-item">
      <div className="review-title">
        <p><a>{author.first_name}</a>{date}</p>
      </div>
      <div className="review-body">
        <div>Rating: {rating}</div>
        <p>{content}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({entities: { users }}, { review }) => {
  return {
    author: users[review.author_id]
  };
};

export default connect(mapStateToProps)(Review);
