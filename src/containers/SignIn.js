import React, { Component } from 'react';
import { connect } from 'react-redux'
import signIn from '../actions/signIn'
import Logo from '../Logo.jpg'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const{email, password} = this.state

        return (
            <div className="container-signin">
                 <a href="/"><img className ='logo-signin' alt="Logo" src={Logo}/></a>
                <h4 id="sign_in">Sign in</h4>
                <form onSubmit={(e) => this.props.signIn(e, this.state, this.props.history)}>

                    <div className="input-field col s12">
                        <i className="material-icons prefix"></i>
                        <label htmlFor='icon_prefix'>Email</label>
                        <input className = 'validate' id = 'icon_prefix' type='email' name="email" value={email} onChange={this.handleChange}/>
                    </div>

                    <div className="input-field col s12">
                        <i className="material-icons prefix"></i>
                        <label htmlFor='icon_lock'>Password</label>
                        <input className = 'validate' id='icon_lock' type='password' name="password" value={password} onChange={this.handleChange}/>
                    </div>
                    
                    <button id="sign-in-button" className="btn-large" type="submit">Sign In</button>
                </form>
            </div>
        );
    }  

}

const mapDispatchToProps = dispatch => {
    return {
      signIn: (e, state, history) => dispatch(signIn(e, state, history))
    }
  }

export default connect(null, mapDispatchToProps)(SignIn);