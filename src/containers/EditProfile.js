import React, { Component } from 'react';
import Navbar from './Navbar'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import editProfile from '../actions/editProfile'
import deleteUser from '../actions/deleteUser'
import {Form, Col, FormGroup, FormControl} from 'react-bootstrap'

class EditProfile extends Component {

    state = {
        firstName: this.props.currentUser.first_name,
        lastName: this.props.currentUser.last_name,
        email: this.props.currentUser.email,
        subscribe: this.props.currentUser.subscribe
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    } 

    render() {
        const {firstName, lastName, subscribe, email} = this.state
        const {editProfile, deleteUser, history, currentUser} = this.props
        return (
            <div>
                
                    {<Navbar/>}
               
                <div className = 'form-edit-p'>

                <h2 id="add-kid">Edit your Profile</h2>
                    <form className='edit-profile-div' onSubmit={(e)=> editProfile(e, history, this.state, currentUser.id)}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                  <Form.Label class="email-edit">First Name</Form.Label>
                                  <Form.Control name="firstName" value={firstName} onChange={this.handleChange} type="text" placeholder="First Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                  <Form.Label class="email-edit">Last Name</Form.Label>
                                  <Form.Control name="lastName" value={lastName} onChange={this.handleChange} type="text" placeholder="Last Name" />
                                </Form.Group>
                        </Form.Row>
                              
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label class="email-edit">Email</Form.Label>
                                        <Form.Control type='email' name="email" value={email} onChange={this.handleChange} placeholder="Email" />
                                    </Form.Group>
                                </Form.Row> 


                                <Form.Row>
                                  
                                    <Form.Group  as={Col} controlId="formBasicCheckbox">
                                    <Form.Label class="email-edit">Email Preference</Form.Label>
                                        <Form.Check type="checkbox" label="PG Parenting Newsletter" name="subscribe" onChange={this.handleChange} value="true" />
                                    </Form.Group>
                                </Form.Row> 

                               
                       
                        
                        <button id="btn-edit-child" className="btn" type="submit" >Update</button>
                    </form>
                    <br/>
                    <button className="waves-effect waves btn pink accent-3" type="submit" onClick={(e) => deleteUser(e, history, currentUser)}>Delete Your Account</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapsToDispatchProps = dispatch => {
    return {
        editProfile: (e, history, state, id) => dispatch(editProfile(e, history, state, id)),
        deleteUser: (e, history, user) => dispatch(deleteUser(e, history, user))
    }
}

export default connect(mapStateToProps, mapsToDispatchProps)(EditProfile);
