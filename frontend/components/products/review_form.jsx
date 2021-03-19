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
        <form onSubmit={this.handleSubmit} className="review-F">
          <div className="form-div">
            <label>Rating</label>
            <div>
              <input
                type="number"
                value={this.state.rating}
                onChange={this.update("rating")}
                min='1'
                max='5'
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
          <div className="option-btns">
            <button type="submit">Add review</button>
            <button onClick={this.navigateToProductShow}>Cancel</button>
          </div>
        </form>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
