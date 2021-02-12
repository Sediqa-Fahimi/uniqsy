import React from 'react';

import ProductIndexItem from './bench_index_item';

class ProductIndex extends React.Component{
    
}

const ProductIndex = ({ products, fetchProducts }) => {
    return (
        <div>
            <h1>Products</h1>
            {products.map(product => {
                return <ProductIndexItem product={product} />
            }}
        </div>
    )

}
 


export default ProductIndex;