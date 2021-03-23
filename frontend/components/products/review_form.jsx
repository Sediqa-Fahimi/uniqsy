import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToProductShow = this.navigateToProductShow.bind(this);
  }

  navigateToProductShow() {
    const url = `/products/${this.props.match.params.productId}`
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const productId = parseInt(this.props.match.params.productId);
    const review = Object.assign({}, this.state, {
      product_id: productId
    });
    this.props.action(review);
    this.navigateToProductShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
  render() {
    const { rating } = this.state;

    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit} className="review-F">
          <div className="form-div">
            <label>Rating</label>
            <div>
                 <StarRatingComponent 
                    name="add-rating" 
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                    className="add-star-rating"
                    starColor={"#222323"}
                    emptyStarColor={"#DDDCDC"}
                  />
            </div>
          </div>
        
          <div className="form-div">
            <label>Comment</label>
              <div>
                  <textarea
                    value={this.state.content}
                    onChange={this.update("content")}
                  />
              </div>
          </div>
          <div className="option-btns-container">
            <button type="submit">{this.props.formType}</button>
            <button onClick={this.navigateToProductShow}>Cancel</button>
          </div>
        </form>
      </div>
    );
 }
}

export default withRouter(ReviewForm);


//////////////////////////////////////////
// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import StarRatingComponent from 'react-star-rating-component';

// class ReviewForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rating: 1,
//       content: ''
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.navigateToProductShow = this.navigateToProductShow.bind(this);
//   }

//   navigateToProductShow() {
//     const url = `/products/${this.props.match.params.productId}`
//     this.props.history.push(url);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const productId = parseInt(this.props.match.params.productId);
//     const review = Object.assign({}, this.state, {
//       product_id: productId
//     });
//     this.props.createReview(review);
//     this.navigateToProductShow();
//   }

//   update(property) {
//     return e => this.setState({ [property]: e.currentTarget.value });
//   }

//   onStarClick(nextValue, prevValue, name) {
//     this.setState({rating: nextValue});
//   }
//   render() {
//     const { rating } = this.state;

//     return (
//       <div className="review-form">
//         <form onSubmit={this.handleSubmit} className="review-F">
//           <div className="form-div">
//             <label>Rating</label>
//             <div>
//                  <StarRatingComponent 
//                     name="add-rating" 
//                     starCount={5}
//                     value={rating}
//                     onStarClick={this.onStarClick.bind(this)}
//                     className="add-star-rating"
//                     starColor={"#222323"}
//                     emptyStarColor={"#DDDCDC"}
//                   />
//             </div>
//           </div>
        
//           <div className="form-div">
//             <label>Comment</label>
//               <div>
//                   <textarea
//                     value={this.state.content}
//                     onChange={this.update("content")}
//                   />
//               </div>
//           </div>
//           <div className="option-btns-container">
//             <button type="submit">Add review</button>
//             <button onClick={this.navigateToProductShow}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     );
//  }
// }

// export default withRouter(ReviewForm);
