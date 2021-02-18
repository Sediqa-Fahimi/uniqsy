


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
            <li key={item.id} >
                <span>{item.first_name}</span>
                <Link to={`/products/${item.product_id}`} onClick={() => this.handleClick}>
                    <img src={item.photoUrl} alt="" />
                </Link>
                <Link to={`/products/${item.product_id}`} onClick={() => this.handleClick}>
                    <p>{item.title}</p>
                </Link>
                <p>${item.price}</p>
                <button onClick={this.removeItem}>Remove</button>
            </li>
        )
    }
}



export default withRouter(CartItem);