import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';


class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
      const {product, history} = this.props;
      const productId = product.id;
      history.push(`/products/${productId}`);
  }
    render() {
        const { product } = this.props;
        return (
          <li key={product.id} >
              <Link to={`/products/${product.id}`} onClick={()=> this.handleClick}>
                <img src={product.photoUrl} alt=""/>
                <span>
                  <StarRatingComponent 
                      name="average-rating"
                      editing={false}
                      starCount={5}
                      value={parseFloat(product.averageRating)}
                      starColor={"#222323"}
                      emptyStarColor={"#DDDCDC"}
                      starSpacing="15px"
                  />
                </span>
                <span>({product.totalReviews})</span><br/>
                ${product.price}
              </Link>
          </li>
        )
    }
}



export default withRouter(ProductIndexItem);