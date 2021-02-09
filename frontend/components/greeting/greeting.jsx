import React from 'react';



const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLink = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Sign in</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLink()
    );
};

export default Greeting;