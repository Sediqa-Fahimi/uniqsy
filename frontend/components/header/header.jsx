import React from 'react';
import { withRouter } from 'react-router-dom'



const Header = ({ currentUser, logout, openModal, history }) => {

    const redirect = () => {
        logout().then(()=> history.replace(`/`));
    }

    const sessionLink = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')} className="signin-btn">Sign in</button>
        </nav>
    );
    const personalGreeting = () => (
        <div className="header-greeting">
            <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
            <button className="logout-btn" onClick={redirect}>Log out</button>
        </div>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLink()
    );
};

export default withRouter(Header);