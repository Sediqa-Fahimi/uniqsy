import React from 'react';
// import ProductDetail from './product_detail';
import { withRouter } from 'react-router-dom';

class ProductShow extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        const productId = this.props.productId;
        this.props.fetchProduct(productId);
    }
   
    render(){
        const { product } = this.props;
        if (product === undefined) return null;
        return(
            <>
                <div className="product-show-page group">
                    <div className="col col-2-3">
                        <section>
                            <img src={window.brentURL} alt=""/>
                        </section>
                    </div>
                    <div className="col col-1-3">
                        <aside className="aside">
                            
                            <h1>{product.title}</h1>
                            <p>${product.price}</p>
                            <button className="add-to-cart-btn">Add to cart</button>
                            <p>Description</p>
                            <p>{product.description}</p>
                            
                        </aside>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(ProductShow);