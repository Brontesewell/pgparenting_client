import React, { Component } from 'react';
import { connect } from 'react-redux'
import signIn from '../actions/signIn'
import Logo from '../Logo.jpg'
import { Link } from "react-router-dom";
import WelcomeNav from './WelcomeNav'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
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
            <div >
                <WelcomeNav />
                 {/* <a href="/"><img className ='logo-signin' alt="Logo" src={Logo}/></a> */}
                <div id="login-div">

                <MDBContainer className="container-signin">
                
                    <MDBCol md="5">
                    <form onSubmit={(e) => this.props.signIn(e, this.state, this.props.history)} className="signin-div">
                        <p className="login-title text-center mb-4">PG <span id="parenting">Parenting</span> Login</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                        Your Email*
                        </label>
                        <input type='email' name="email" value={email} onChange={this.handleChange} id="defaultFormLoginEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                        Your Password*
                        </label>
                        <input type='password' name="password" value={password} onChange={this.handleChange} id="defaultFormLoginPasswordEx" className="form-control" />
                        <div className="text-center mt-4">
                        <button className="btn-login" color="indigo" type="submit">Continue  →</button>
                        </div>
                    </form>
                                <Link to='/signup-user' className="links-signin" >Or Sign Up</Link>
                    </MDBCol>
                
                </MDBContainer>
            </div>

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


  {/* <h1 id="sign_in">Login In</h1>
  <form onSubmit={(e) => this.props.signIn(e, this.state, this.props.history)}>

      <div className="input-field col s10 ">
          <i className="material-icons prefix"></i>
          <label htmlFor='icon_prefix'>Email</label>
          <input className = 'validate' id = 'icon_prefix' type='email' name="email" value={email} onChange={this.handleChange}/>
      </div>

      <div className="input-field col s12">
          <i className="material-icons prefix"></i>
          <label htmlFor='icon_lock'>Password</label>
          <input className = 'validate' id='icon_lock' type='password' name="password" value={password} onChange={this.handleChange}/>
      </div>
      
      <button id="sign-in-button" className="btn-large" type="submit">Continue  →</button>
 <br></br>
  </form> */}