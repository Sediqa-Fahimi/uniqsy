import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            first_name: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    handleGuest(e){
        e.preventDefault();
        const guestUser = {
            email: 'myguest@test.com',
            first_name: 'Guest',
            password: '456789'
        };
        this.props.login(guestUser).then(this.props.closeModal);
    }

    render() {
        const title = this.props.formType === 'Sign in' ? "Sign in" : "Create your account";
        const fName = this.props.formType === 'Register' ? (
            <label>First name
                <input type="text" value={this.state.first_name} 
                onChange={this.update('first_name')} 
                className='login-input'/>
            </label>
        ) : ("");
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h2>{title}</h2>
                    {this.props.otherForm}
                    
                    {this.renderErrors()}
                    <div className="login-form">
                        
                        <label>Email address
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                    
                        {fName}
                        
                        <label>Password
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                    
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                    <button onClick={this.handleGuest}>Guest demo</button>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);
