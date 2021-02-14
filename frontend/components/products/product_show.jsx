import React from 'react';
// import ProductDetail from './product_detail';
// import { withRouter } from 'react-router-dom';

class ProductShow extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        const productId = this.props.match.params.productId;
        this.props.fetchProduct(productId);
    }
   
    render(){
        const { product } = this.props;

        return(
            <>
                <div className="product-show-page group">
                    <div className="col col-2-3">
                        <section>
                            <img src={window.brentURL} alt=""/>
                        </section>
                    </div>
                    <div className="col col-1-3">
                        <aside>
                            <div>
                                <ul>
                                    <li>{product.title}</li>
                                    <li>{product.price}</li>
                                    <li>{product.description}</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </>
        )
    }
}
export default ProductShow;