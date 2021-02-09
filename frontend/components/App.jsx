import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import { Link, Route } from 'react-router-dom';
const App = () => {
    return (
        <div className="main-header">
            <Modal />
            <header className="inner-header">
                <Link to='/' className="icon">Uniqsy</Link>
                <GreetingContainer />
            </header>
            
        </div>
    );
};

export default App;
