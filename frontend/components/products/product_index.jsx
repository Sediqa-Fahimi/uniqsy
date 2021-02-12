import React from 'react';

import ProductIndexItem from './bench_index_item';

class ProductIndex extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchProducts();
    }
    render(){
        const products = this.props.products.map(product => {
            return (
                <ProductIndexItem product={product} key={product.id} />
            )
        });
        return(
            <div>
                <ul>
                    {products}
                </ul>
            </div>
        )
    }
}
 


export default ProductIndex;