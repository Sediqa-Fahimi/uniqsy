

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    handleClick(e) {
        const productId = this.props.item.product_id;
        this.props.history.push(`/products/${productId}`);
    }
    removeItem(e){
        this.props.deleteCartItem(this.props.item.id);
    }
    render() {
        const { item } = this.props;
        return (
            <li key={item.id} className="items-li clrfx">
                <div className="item-col photo">
                    <Link to={`/products/${item.product_id}`} onClick={() => this.handleClick}>
                        <img src={item.photoUrl} alt="" />
                    </Link>

                </div>
                <div className="item-col title">
                    <span>{item.first_name}</span>
                    <div>
                        <Link to={`/products/${item.product_id}`} onClick={() => this.handleClick}>
                            <p>{item.title}</p>
                        </Link>
                        <select name="" id="" className="qty-cart-page"></select>
                    </div>
                    <button onClick={this.removeItem} className="remove-btn">Remove</button>
                </div>
                <div className="item-col price">
                    <p>${item.price}</p>
                </div>
            </li>
        )
    }
}



export default withRouter(CartItem);