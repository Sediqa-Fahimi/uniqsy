

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quantity: this.props.item.quantity};

        this.handleClick = this.handleClick.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateDB = this.updateDB.bind(this);
    }
    handleChange(e){
        this.setState({quantity: parseInt(e.target.value)}, ()=>{
            this.updateDB();
        });
    }

    updateDB(){
        const { item } = this.props;
        const cartitem = {product_id: item.product_id, user_id: item.user_id, quantity: this.state.quantity}
        const increase = false;
        this.props.updateCartItem(item.id,cartitem, increase);
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
                        
                        <select value={this.state.quantity} onChange={this.handleChange} className="qty-cart-page">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    
                    </div>
                    <button onClick={this.removeItem} className="remove-btn">Remove</button>
                </div>
                <div className="item-col price">
                    <p>${item.total_price}</p>
                </div>
            </li>
        )
    }
}



export default withRouter(CartItem);