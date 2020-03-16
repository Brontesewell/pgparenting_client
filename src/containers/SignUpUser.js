import React, { Component } from 'react';
import { connect } from 'react-redux'
import signUpUser from '../actions/signUpUser'
import Logo from '../Logo.jpg'

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
           
            <div className="container-signup">
                
                 <a href="/"><img className ='logo-signin' alt="Logo" src={Logo}/></a>
              
                <h4 id="sign_in">Sign in</h4>
               
                <form onSubmit={(e) => this.props.signUpUser(e, this.state, history)}>
                   
                        <label>First Name</label>
                        <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange}/>
                   
                        <label>Last Name</label>
                        <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChange}/>
                   
                        <label>Email</label>
                        <input type='email' name="email" placeholder="Email" value={email} onChange={this.handleChange}/>
                    
                    
                        <label>Password</label>
                        <input type='password' name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
                    

                    <button  id="sign-in-button" className="btn-large" type="submit">NEXT</button>

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