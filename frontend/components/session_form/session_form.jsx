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
        // this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // e.stopPropagation();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    // renderErrors() {
        
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`} className="errors">
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }
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
        const subtitle = this.props.formType === 'Sign in' ? "" : "Registration is easy.";
        const clssNam = this.props.formType === 'Sign in' ? "login-form-container" : "signup-form-container";
        const err1 = this.props.errors[0];
        const err2 = this.props.errors[1];
        const err3 = this.props.formType === 'Sign in' ? this.props.errors[0] : this.props.errors[2];
        const inptClsNam = this.props.errors.length === 0 ? "login-input" : "errored-input";
        const fName = this.props.formType === 'Register' ? (
            <label>First name
                <div>
                    <input type="text" value={this.state.first_name} 
                    onChange={this.update('first_name')} 
                    className={inptClsNam}/>

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
                    <div className="login-form">
                        <div>
                            <label>Email address
                                <div>   
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className={inptClsNam}
                                        autoFocus="autofocus"
                                    />
                                </div>
                            </label>
                        </div>
                        <p>{err1}</p>
                        <div>
                            {fName}
                        </div>
                        <p>{err2}</p>
                        <div>
                            <label>Password
                                <div>
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className={inptClsNam}
                                    />

                                </div>
                            </label>
                        </div>
                        <p>{err3}</p>
                        <div>
                            <button type="submit" className="session-submit" value={this.props.formType}>{this.props.formType}</button>
                        </div>
                        <div>
                            <span>OR</span>
                            <button type="button" onClick={this.handleGuest} className="guest-submit">Guest Demo</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);
