import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import { Link, Route } from 'react-router-dom';
const App = () => {
    return (
        <div>
            <Modal />
            <header>
                <Link to='/'>
                    <h1>Uniqsy</h1>
                </Link>
                <GreetingContainer />
            </header>
            
        </div>
    );
};

export default App;