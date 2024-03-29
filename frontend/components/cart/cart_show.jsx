
import React from 'react';
import CartItem from './cart_item';
import { withRouter } from 'react-router-dom';

class CartShow extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.fetchCartItems();
    }

    render() {
        const {items, updateCartItem, deleteCartItem } = this.props;
        const cartItems = items.map(item => {
            return (
                <CartItem item={item} key={item.id} 
                updateCartItem={updateCartItem}
                deleteCartItem={deleteCartItem}/>
            )
        });
        let total = 0.0;
        if(items.length != 0){
            items.forEach(item => total += parseFloat(item.total_price));
        }
        const checkout = total === 0.0 ? "" : <>
                                                <div>
                                                    <h1>How you'll pay</h1>
                                                    <label className="container"><img src={window.americanexpressURL} alt="" />
                                                        <input type="radio" defaultChecked name="radio"/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label className="container"><img src={window.mastercardURL} alt="" />
                                                        <input type="radio" name="radio"/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label className="container"><img src={window.visaURL} alt="" />
                                                        <input type="radio" name="radio"/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="total"><span>Item(s) total:</span><span>${total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span></div>
                                                <button className="checkout-btn">Proceed to checkout</button>
                                            </>
        const len = items.length;
        const headerMsg = len === 0 ? "Your cart is empty." : `${len} items in your cart.`;
        const cls = len === 0 ? "no-payment" : "payment-box";
        return (
            <>
                <div className="cart-show-page clrfix">
                    <div className="cart-col content">
                        <div className="cart-title-msg">
                            <p>{headerMsg}</p>
                        </div>
                        <div className="item-container">
                           <ul>
                                {cartItems}
                           </ul>
                        </div>

                    </div>
                    <div className="cart-col payment">
                        <aside className={cls}>
                            {checkout}
                        </aside>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(CartShow);