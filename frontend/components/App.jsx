import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import { Link, Route, Switch ,Redirect} from 'react-router-dom';
import ProductIndex from './products/product_index';

const App = () => {
    return (
        <>
            <div className="main-header">
                <Modal />
                <header className="inner-header">
                    <Link to='/' className="icon">Uniqsy</Link>
                    <GreetingContainer />
                </header>
                
            </div>
            <Switch>

                <Route exact path="/" component={ProductIndex} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
