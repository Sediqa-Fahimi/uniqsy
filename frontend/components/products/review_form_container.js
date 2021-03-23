import { connect } from 'react-redux';

import { createReview } from '../../actions/product_actions';
import ReviewForm from './review_form';

const mapStateToProps = state => ({
  review: {
    rating: 1,
    content: ''
  },
  formType: 'Add Review'
});

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(createReview(review))
});

export default connect(mapStateToProps,mapDispatchToProps)(ReviewForm);





////////////////////
// const mapDispatchToProps = dispatch => ({
//   createReview: review => dispatch(createReview(review))
// });

// export default connect(null,mapDispatchToProps)(ReviewForm);