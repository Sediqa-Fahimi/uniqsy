import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewListItemContainer from './review_list_item_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';
import ReviewFormContainer from './review_form_container';
import StarRatingComponent from 'react-star-rating-component';

class ProductShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 1};

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    componentDidMount(){
        const productId = this.props.productId;
        this.props.fetchProduct(productId);
    }
    handleClick(e){
        e.preventDefault();
        const { currentUser, openModal, addCartItem, updateCartItem, productId, userId, cartitemId} = this.props;
        const cartitem = {product_id: productId, user_id: userId, quantity: this.state.value};
        if(currentUser){
            const increase = true;
            cartitemId ? updateCartItem(cartitemId, cartitem, increase) : addCartItem(cartitem);     
        } else {
            openModal('login');
        }
    }

    handleChange(e) {
        this.setState({value: parseInt(e.target.value, 10)});
    }

    render(){
        const { product, reviews } = this.props;
        if (product === undefined) return null;
        if (product.seller === undefined) return null;
        if (!product.photoUrl) return null;
        if (!product.photoUrls) return null;
        const reviewList = reviews.map(review => {
            return (
                <ReviewListItemContainer
                review={review}
                key={review.id}
                />
            )
        });
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

                        <div className="reviews">
                            <div className="reviews-header">
                                <h3>{reviews.length} reviews</h3>
                                <span><StarRatingComponent 
                                        name="average-rating"
                                        editing={false}
                                        starCount={5}
                                        value={parseFloat(product.average_rating)}
                                        /></span>
                                {/* <span>Average rating: {product.average_rating}</span> */}
                            </div>
                            {reviewList}
                            <ReviewLink
                                component={ReviewFormContainer}
                                to={`/products/${product.id}/review`}
                                label="Add a Review"
                            />
                            <ProtectedRoute
                                path="/products/:productId/review"
                                component={ReviewFormContainer}
                            />
                        </div>
                    </div>
                    <div className="col col-1-3">
                        <aside className="aside">
                            <p>{product.seller.first_name}</p>
                            <h1>{product.title}</h1>
                            <p>${product.price}</p>
                            <span>Qty:</span>
                            <select value={this.state.value} onChange={this.handleChange} className="qty-show-page">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
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