import React from 'react';
import HeaderContainer from './header/header_container';
import Modal from './modal/modal';
import { Link, Route, Switch ,Redirect} from 'react-router-dom';
import ProductIndexContainer from './products/product_index_container';
import SearchContainer from './products/search';
import ProductShowContainer from './products/product_show_container';

const App = () => {
    return (
        <>
            <div className="main-header">
                <Modal />
                <header className="inner-header">
                    <Link to='/' className="home-icon">Uniqsy</Link>
                    <SearchContainer />
                    <HeaderContainer />
                    <Link to='#' className="shopping-cart-link">
                        <div className="shopping-cart-icon-container">
                            <img src={window.cartURL} alt="" className="shopping-cart-icon" />
                        </div>
                    </Link>
                </header>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="#">Valentine's Day</a></li>
                    <li><a href="#">Jewelry & Accessories</a></li>
                    <li><a href="#">Clothing & Shoes</a></li>
                    <li><a href="#">Home & Living</a></li>
                    <li><a href="#">Wedding & Party</a></li>
                    <li><a href="#">Toys & Entertainment</a></li>
                    <li><a href="#">Art & Collectibles</a></li>
                    <li><a href="#">Craft Supplies</a></li>
                    <li><a href="#">Gifts & Gift Cards</a></li>
                </ul>
            </div>
            <div className="nav-bottom-line"></div>
            
            
            <Switch>

                <Route path="/products/:productId" component={ProductShowContainer} />
                <Route exact path="/" component={ProductIndexContainer} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
