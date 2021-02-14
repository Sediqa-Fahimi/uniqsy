import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
      const productId = this.props.product.id;
      this.props.history.push(`/products/${productId}`);
  }
    render() {
        const { product } = this.props;
        return (
          <li key={product.id} >
              <Link to={`/products/${product.id}`} onClick={()=> this.handleClick}>
                <img src={window.brentURL} alt=""/>
                ${product.price}
              </Link>
          </li>
        )
    }
}



export default withRouter(ProductIndexItem);