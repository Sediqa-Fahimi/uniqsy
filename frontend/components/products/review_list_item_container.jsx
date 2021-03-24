import React from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { deleteReview, updateReview } from '../../actions/product_actions';
import { withRouter } from 'react-router-dom';
import EditReviewForm from './edit_review_form';


class Review extends React.Component {
    constructor(props){
      super(props);
      this.state = { editForm: 'review-form-hide'}
      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }
    handleDelete(){
      const {review} = this.props;
      this.props.deleteReview(review.id);
      // .then(()=> window.location.reload());
      // this.props.deleteReview(review.id);
    }
    handleEdit(){
      if(this.state.editForm === 'review-form-hide'){
        this.setState({editForm: 'review-form'});
      } else {
        this.setState({editForm: 'review-form-hide'});
      }
    }
    render(){
      const {review, author, userId, updateReview } = this.props;
      const { rating, content, created_at } = review;

      const dateArray = new Date(created_at).toString().split(' ');
      const date = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;

      const deleteLink = userId === author.id ? <button 
                                              type="button" 
                                              onClick={this.handleDelete}
                                              className="review-delete-btn"
                                              >Delete</button> : "";

      const editLink = userId === author.id ? <button 
                                              type="button" 
                                              onClick={this.handleEdit}
                                              className="review-delete-btn"
                                              >Edit</button> : "";
      const clsName = this.state.editForm;
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

          <EditReviewForm review={review} updateReview={updateReview} clsName={clsName} handleEdit={this.handleEdit} key={review.id}/>

        </div>

      );
    }
}



const mapStateToProps = ({entities: { users }}, {review}) => {
  return {
    author: users[review.author_id],
    review
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    updateReview: review => dispatch(updateReview(review))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));






///////////////////////////////////////////////////////////////////////////////

// const Review = ({ review, author, deleteReview, userId, productId, match, history}) => {
//   const { rating, content, created_at } = review;
 
//   const dateArray = new Date(created_at).toString().split(' ');
//   const date = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;

//   const handleDelete = () =>{
//     deleteReview(review.id).then(()=> window.location.reload());
//   }
//   const updateHistory = () =>{
//     history.push(`/products/${productId}/reviews/${review.id}/edit`);
//   }
//   const deleteLink = userId === author.id ? <button 
//                                               type="button" 
//                                               onClick={handleDelete}
//                                               className="review-delete-btn"
//                                               >Delete</button> : "";

//   const editLink = userId === author.id ? <Link to={`/products/${productId}/reviews/${review.id}/edit`} onClick={updateHistory}>Edit</Link> : "";
//   debugger
//   return (
//     <div className="review-item">
//       <div className="review-title">
//         <p><a>{author.first_name}</a>{date}</p>
//       </div>
//       <div className="review-body">
//         <div><StarRatingComponent 
//               name="rating"
//               editing={false}
//               starCount={5}
//               value={parseFloat(rating)}
//               starColor={"#222323"}
//               emptyStarColor={"#DDDCDC"}
//               /></div>
//         <p>{content}</p>
//       </div>
//       {deleteLink}
//       {editLink}
//       <Route path="/products/:productId/reviews/:reviewId/edit" render={(
//         review.id === match.params.reviewId ? (
//           <reviewFormContainer />
//         ): ""
//       )} />
//     </div>
//   );
// };

// const mapStateToProps = ({entities: { users }}, {review}) => {
//   return {
//     author: users[review.author_id]
//   };
// };

// const mapDispatchToProps = (dispatch)=>{
//   return {
//     deleteReview: reviewId => dispatch(deleteReview(reviewId))
//   }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));
