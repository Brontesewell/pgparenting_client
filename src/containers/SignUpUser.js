import React, { Component } from 'react';
import { connect } from 'react-redux'
import signUpUser from '../actions/signUpUser'
import Logo from '../Logo.jpg'
import { Link } from "react-router-dom";

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
                <h4 id="sign_in">Sign Up</h4>
                
                 {/* <a href="/"><img className ='logo-signin' alt="Logo" src={Logo}/></a> */}
              
               
                <form onSubmit={(e) => this.props.signUpUser(e, this.state, history)}>
                                <div class="row">
                                   <div class="input-field col s6">
                                   <label>First Name</label>
                                    <input type="text" name="firstName" placeholder="First name" value={firstName} onChange={this.handleChange}/>
                                   </div>

                                  <div class="input-field col s6">
                                  <label>Last Name</label>
                                <input type="text" name="lastName" placeholder="Last name" value={lastName} onChange={this.handleChange}/>

                                  </div>
                        
                   
                       <div className="email-password">
                        <label>Email</label>
                        <input type='email' name="email" placeholder="Email" value={email} onChange={this.handleChange}/>
                    
                    
                        <label>Password</label>
                        <input type='password' name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
                        </div>
                                  </div>

                    <button  id="sign-up-button" className="btn-large" type="submit">Next</button>
                    <br></br>
                <Link to='/signin-user' className="links-signup-signin" >Or Login</Link>
                
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