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
                    <li key={`error-${i}`} className="errors">
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
        const subtitle = this.props.formType === 'Sign in' ? "" : "Registeration is easy.";
        const clssNam = this.props.formType === 'Sign in' ? "login-form-container" : "signup-form-container";
        const fName = this.props.formType === 'Register' ? (
            <label>First name
                <div>
                    <input type="text" value={this.state.first_name} 
                    onChange={this.update('first_name')} 
                    className='login-input'/>

                </div>
            </label>
        ) : ("");

        return (
            <div className={clssNam}>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form-header">
                        <h2>{title}</h2>
                        {this.props.otherForm}
                    </div>
                    <h3>{subtitle}</h3>
                    {this.renderErrors()}
                    <div className="login-form">
                        <div>
                            <label>Email address
                                <div>   

                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                        autoFocus="autofocus"
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            {fName}
                        </div>
                        <div>
                            <label>Password
                                <div>
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                    />

                                </div>
                            </label>
                        </div>
                        <div>
                            <button className="session-submit" type="submit" value={this.props.formType}>{this.props.formType}</button>
                        </div>
                        <div>
                            <span>OR</span>
                            <button onClick={this.handleGuest} className="guest-submit">Guest Demo</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);
