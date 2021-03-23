import React from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { deleteReview } from '../../actions/product_actions';

const Review = ({ review, author, deleteReview, userId }) => {
 
  const { rating, content, created_at } = review;
 
  const dateArray = new Date(created_at).toString().split(' ');
  const date = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;

  const handleDelete = () =>{
    deleteReview(review.id).then(()=> window.location.reload());
  }
  const handleEdit = () =>{
    
  }
  const deleteLink = userId === author.id ? <button 
                                              type="button" 
                                              onClick={handleDelete}
                                              className="review-delete-btn"
                                              >Delete</button> : "";
  const editLink = userId === author.id ? <button 
                                              type="button" 
                                              onClick={handleEdit}
                                              className="review-edit-btn"
                                              >Edit</button> : "";
  return (
    <div className="review-item">
      <div className="review-title">
        <p><a>{author.first_name}</a>{date}</p>
      </div>
      <div className="review-body">
        <div><StarRatingComponent 
              name="rating"
              editing={false}
              starCount={5}
              value={parseFloat(rating)}
              starColor={"#222323"}
              emptyStarColor={"#DDDCDC"}
              /></div>
        <p>{content}</p>
      </div>
      {deleteLink}
      {editLink}
    </div>
  );
};

const mapStateToProps = ({entities: { users }}, { review }) => {
  return {
    author: users[review.author_id]
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review);
