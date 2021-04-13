import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalTransitioning: false
        }
        this.modalCloseTransition = this.modalCloseTransition.bind(this);
    }
    modalCloseTransition(){
        this.setState({modalTransitioning: true},()=>{
            setTimeout(()=>{
                this.props.closeModal();
                this.setState({modalTransitioning: false});
            },200);
        });
    }

    render(){
        const transition = this.state.modalTransitioning ? "-reverse" : "";
        const { modal } = this.props;
        if (!modal) {
            return null;
        }
        let component;
        switch (modal) {
            case 'login':
                component = <LoginFormContainer closeModal={this.modalCloseTransition}/>;
                break;
            case 'signup':
                component = <SignupFormContainer closeModal={this.modalCloseTransition}/>;
                break;
            default:
                return null;
        }
        return (
            <div className={`modal-background${transition}`} onClick={this.modalCloseTransition}>
                <div className={`modal-container${transition}`} >
                    <div className={`modal-child${transition}`} onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                    <div onClick={this.modalCloseTransition} className="close-x"><span>X</span></div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
