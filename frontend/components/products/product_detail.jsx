import React from 'react';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.fetchProduct();
    }
    render() {
        const { product } = this.props;

        return (
            <>
              <div>
                  <ul>
                      <li>{product.title}</li>
                      <li>{product.price}</li>
                      <li>{product.description}</li>
                  </ul>
              </div>
            </>
        )
    }
}
export default ProductDetail;