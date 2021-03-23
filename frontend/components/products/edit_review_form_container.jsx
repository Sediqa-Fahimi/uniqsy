import React from 'react';
import { connect } from 'react-redux';
import EditReviewForm from './edit_review_form';
import { fetchPost, updateReview } from '../../actions/product_actions';
import {withRouter} from 'react-router-dom';

// class EditReviewForm extends React.Component {
//   componentDidMount() {
//     this.props.fetchPost(this.props.match.params.postId);
//   }

//   render() {
//     // DO NOT MODIFY THIS FUNCTION
//     const { action, formType, post } = this.props;

//     // Hint: The post will not exist on the first render - what do we need to do
//     // to get it?
//     if (!post) return null;
//     return (
//       <PostForm
//         action={action}
//         formType={formType}
//         post={post} />
//     );
//   }
// }
/////////////////////////////
// const mapStateToProps = (state, ownProps) => ({
//   review: this.props.review,
//   formType: 'Update Review'
// });

// const mapDispatchToProps = dispatch => ({
//   // fetchPost: postId => dispatch(fetchPost(postId)),
//   updateReview: review => dispatch(updateReview(review))
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditReviewForm));