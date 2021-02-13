import React from 'react';
import HeaderContainer from './header/header_container';
import Modal from './modal/modal';
import { Link, Route, Switch ,Redirect} from 'react-router-dom';
import ProductIndexContainer from './products/product_index_container';
import SearchContainer from './products/search';

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
            <Switch>

                <Route exact path="/" component={ProductIndexContainer} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
