import React, { Component } from 'react';
import { connect } from 'react-redux'
import signIn from '../actions/signIn'

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
            <div className="container">
                <h4>Sign in</h4>
                <form onSubmit={(e) => this.props.signIn(e, this.state, this.props.history)}>

                    <div className="input-field col s12">
                        <i className="material-icons prefix">mail</i>
                        <label htmlFor='icon_prefix'>Email</label>
                        <input className = 'validate' id = 'icon_prefix' type='email' name="email" value={email} onChange={this.handleChange}/>
                    </div>

                    <div className="input-field col s12">
                        <i className="material-icons prefix">lock</i>
                        <label htmlFor='icon_lock'>Password</label>
                        <input className = 'validate' id='icon_lock' type='password' name="password" value={password} onChange={this.handleChange}/>
                    </div>
                    
                    <button className="waves-effect waves btn-large" type="submit">
                        <i className="material-icons right">exit_to_app</i>SIGN IN</button>
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