import React, { Component } from 'react';
import { connect } from 'react-redux'
import signUpUser from '../actions/signUpUser'

export class SignUpUser extends Component {

    state = {
        firstName: '',
        lastName: '',
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
       const { firstName, lastName, email, password } = this.state
       const {history} = this.props
        return (
            <div className="row">
                <form className ='form-user' onSubmit={(e) => this.props.signUpUser(e, this.state, history)}>
                    <div className="input-field col s12">
                        <label>First Name</label>
                        <input className = 'validate' type="text" name="firstName" value={firstName} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s12">
                        <label>Last Name</label>
                        <input className = 'validate' type="text" name="lastName" value={lastName} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s12">
                        <label>Email</label>
                        <input className = 'validate' type='email' name="email" value={email} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s12">
                        <label>Password</label>
                        <input className = 'validate' type='password' name="password" value={password} onChange={this.handleChange}/>
                    </div>

                    <button className="waves-effect waves btn" type="submit">
                        <i class="material-icons right">navigate_next</i>NEXT</button>

                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpUser: (e, state, history) => dispatch(signUpUser(e, state, history))
    }
}

export default connect(null, mapDispatchToProps)(SignUpUser);