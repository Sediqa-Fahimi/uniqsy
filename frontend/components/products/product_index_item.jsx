import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { product } = this.props;
        return (
          <li key={product.id}>
              <img src={window.brentURL} alt=""/>
              <span>${product.price}</span>
          </li>
        )
    }
}



export default withRouter(ProductIndexItem);