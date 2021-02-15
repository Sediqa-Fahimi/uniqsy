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
                    <p>Find things you'll love. Support independent sellers. Only on Uniqsy.</p>
                </div>
                <div className="celebrate-subtitle">
                    <p>Everyday finds</p>
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

                <div className="what-is-uniqsy group">
                    <h2>What is Uniqsy?</h2>
                    <p><a>Read our wonderfully weird story.</a></p>
                    <div className="coll-container clearfix">
                        <div className="coll coll-1-3">
                            <h3>A one-of-a-kind community</h3>
                            <p>
                                Uniqsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.
                            </p>
                        </div>
                        <div className="coll coll-1-3">
                            <h3>Support independent creators</h3>
                            <p>There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
                        </div>
                        <div className="coll coll-1-3">
                            <h3>Peace of mind</h3>
                            <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                        </div>
                    </div>
                    <div className="question-section">
                        <h3>Have a question? Well, we’ve got some answers.</h3>
                        <button className="help-btn">Go to Help Center</button>
                    </div>

                    <img src={window.blueCircleURL} alt="" className="blue-circle-png" />
                    {/* <img src={window.plantURL} alt="" className="plant-design-png" /> */}

                </div>
            </>
        )
    }
}
 


export default ProductIndex;