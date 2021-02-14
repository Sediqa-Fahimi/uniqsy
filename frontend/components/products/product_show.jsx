import React from 'react';
import ProductDetail from './product_detail';
// import { withRouter } from 'react-router-dom';

class ProductShow extends React.Component{
    constructor(props){
        super(props);

    }
   
    render(){
        const { product, fetchProduct } = this.props;

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
                            <ProductDetail product={product} fetchProduct={fetchProduct}/>
                        </aside>
                    </div>
                </div>
            </>
        )
    }
}
export default ProductShow;