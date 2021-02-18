
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
        const items = this.props.items.map(item => {
            return (
                <CartItem item={item} key={item.id} deleteCartItem={this.props.deleteCartItem}/>
            )
        });
        let total = 0;
        if(this.props.items.length != 0){
            this.props.items.forEach(item => total += item.price);
        }
        const checkout = total === 0 ? "" : <><div>Item(s) total: {total}</div><button className="checkout-btn">Proceed to checkout</button></>
        const len = this.props.items.length;
        const headerMsg = len === 0 ? "Your cart is empty." : `${len} items in your cart.`;
        const cls = len === 0 ? "no-payment" : "payment-box";
        return (
            <>
                <div className="cart-show-page clrfix">
                    <div className="cart-col content">
                        <div>
                            <p>{headerMsg}</p>
                        </div>
                        <div className="item-container">
                           <ul>
                                {items}
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