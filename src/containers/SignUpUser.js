import React, { Component } from 'react';
import { connect } from 'react-redux'
import signUpUser from '../actions/signUpUser'
import Logo from '../Logo.jpg'
import { Link } from "react-router-dom";
import WelcomeNav from './WelcomeNav'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';


export class SignUpUser extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        subscribe: '',
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
       const { firstName, lastName, email, password, subscribe } = this.state
       const {history} = this.props
        return (
           <div>
                <WelcomeNav />
                <div id="login-div">

                    <MDBContainer className="container-signup">
                    <MDBCol md="5">
                         <form onSubmit={(e) => this.props.signUpUser(e, this.state, history)} >

                            <p className="login-title text-center mb-4">PG <span id="parenting">Parenting</span> Sign Up</p>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg fname-forms">
                                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                            First Name*
                                        </label>
                                        <input type="text" name="firstName" placeholder="First name" value={firstName} onChange={this.handleChange} id="defaultFormLoginEmailEx" className="form-control" />       
                                    </div>
                                    <div class="col-lg lname-forms">
                                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                            Last Name*
                                        </label>
                                            <input type="text" name="lastName" placeholder="Last name" value={lastName} onChange={this.handleChange} id="defaultFormLoginPasswordEx" className="form-control" />
                                    </div>
                                </div>
                             </div>
                        
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                Your Email*
                            </label>
                            <input type='email' name="email" placeholder="Email" value={email} onChange={this.handleChange} id="defaultFormLoginEmailEx" className="form-control" />
                            <br></br>

                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                Your Password*
                            </label>
                            <input type='password' name="password" placeholder="Password" value={password} onChange={this.handleChange} id="defaultFormLoginPasswordEx" className="form-control" />
                        

                            <br></br>

                            <h5 style={{fontWeight: 'normal'}}>Email Preference</h5>
                            <label>
                            <input type="checkbox" name="subscribe" class="filled-in" onChange={this.handleChange} value="true" checked={subscribe === 'true'}/>
                            <span>PG Parenting Newsletter</span>
                            </label>
                            
                                <div className="text-center mt-4">
                                    <button className="btn-login" color="indigo" type="submit">Continue  →</button>
                                </div>
                  
                <Link to='/signin-user' className="links-signup" >Or Login</Link>
                
                </form>
                </MDBCol>
                
                </MDBContainer>

                </div>
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