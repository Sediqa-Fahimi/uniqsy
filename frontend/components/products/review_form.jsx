import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      content: ''
    };
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
    this.props.createReview(review);
    this.navigateToProductShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <br/>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
            min='1'
            max='5'
          />
          <br/>

          <label>Comment</label>
          <br/>

          <textarea
            cols="30"
            rows="10"
            value={this.state.content}
            onChange={this.update("content")}
          />
          <br/>
          <input type="submit" />
        </form>
        <button onClick={this.navigateToProductShow}>Cancel</button>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
