import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductShow extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }
    componentDidMount(){
        const productId = this.props.productId;
        this.props.fetchProduct(productId);
    }
    handleClick(e){
        e.preventDefault();
        this.props.addCartItem({product_id: this.props.productId, user_id: this.props.userId});
        // this.props.parentCallback();
    }
   
    render(){
        const { product } = this.props;
        if (product === undefined) return null;
        if (product.seller === undefined) return null;
        if (!product.photoUrl) return null;
        if (!product.photoUrls) return null;
        return(
            <>
                <div className="product-show-page group">
                    <div className="col col-2-3">
                        <div className="image-show-container">
                            <div className="vertical-image-list-container">
                                <ul className="vertical-image-list">
                                    <li><a ><img src={product.photoUrl} alt="" /></a></li>
                                    <li><a ><img src={product.photoUrls[0]} alt="" /></a></li>
                                    <li><a ><img src={product.photoUrls[1]} alt="" /></a></li>
                                    <li><a ><img src={product.photoUrls[2]} alt="" /></a></li>
                                    <li><a ><img src={product.photoUrls[3]} alt="" /></a></li>
                                </ul>
                            </div> 
                            <button>{'<'}</button>
                            <div className="view-image">
                                <img src={product.photoUrl} alt="" />
                            </div>
                            <button>{'>'}</button>
                        </div>

                        <br/><br/>
                        <div>Reviews</div>
                    </div>
                    <div className="col col-1-3">
                        <aside className="aside">
                            <p>{product.seller.first_name}</p>
                            <h1>{product.title}</h1>
                            <p>${product.price}</p>
                            <button className="add-to-cart-btn" onClick={this.handleClick}>Add to cart</button>
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