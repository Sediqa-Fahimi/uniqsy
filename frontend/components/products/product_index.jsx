import React from 'react';

import ProductIndexItem from './product_index_item';

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
            <>
                <div className="celebrate-title">
                    <p>Celebrate everyone who makes you feel loved.</p>
                </div>
                <div className="celebrate-subtitle">
                    <p>Shop Valentine's Day</p>
                </div>
                <div className="celebrate-images">
                    <ul>
                        <li>
                            <a href="">
                                <img src={window.giftURL} alt="" className="round-images" />
                            Personalized gifts --{'>'}
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={window.necklaceURL} alt="" className="round-images" />
                            Necklaces --{'>'}
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={window.cardURL} alt="" className="round-images" />
                            Greeting cards --{'>'}
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={window.accessoryURL} alt="" className="round-images" />
                            Leather accessories --{'>'}
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={window.wreathURL} alt="" className="round-images" />
                            Wreaths --{'>'}
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={window.ringURL} alt="" className="round-images" />
                            Engagement rings --{'>'}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="recently-viewed">
                    <div ><p>Recently viewed</p></div>
                    <ul>
                        {products.slice(0,6)}
                    </ul>
                </div>
                {/* <div className="hand-picked">
                    <div ><p>Hand-picked for you</p></div>
                    <ul>
                        {products.slice(0,6)}
                    </ul>
                </div> */}
            </>
        )
    }
}
 


export default ProductIndex;