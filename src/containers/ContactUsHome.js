import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import addContact from '../actions/addContact'

class ContactUs extends Component {

    state = {
        email: this.props.currentUser.email,
        description: "",
        f_name: this.props.currentUser.first_name,
        l_name: this.props.currentUser.last_name,
        user_id: this.props.currentUser.id
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    render () {  
        // console.log(this.props.currentUser.contacts)
        const {email, description,  user_id} = this.state
        const {history} = this.props
        return (
            <div>
               
                    <Navbar/>

                    <div id ="contact-us-image">
                   
                    <div className="contact-us-div">
                    <MDBContainer >
                    <MDBCol md="12">
                        <h1 id="contact-us-title-home">Contact Us</h1>


                    <span for="lname">Email is being sent from: <strong>{email}</strong></span>
                    
                    <br></br>
                    <br></br>
                    <form onSubmit={(e) => this.props.addContact(e, this.state, history)}>
                    <label htmlFor="description" className="grey-text">Description</label>
                    <textarea name="description" value={description} onChange={this.handleChange} placeholder="Write something.." />


                    <button id="btn-add-contact" className="btn" type="submit" >Add Child</button>
                    </form>

                    </MDBCol>
                
                </MDBContainer>
                    </div>

                    </div> 
             
     </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}



const mapsToDispatchProps = dispatch => {
    return {
        addContact: (e, history, state) => dispatch(addContact(e, history, state)),
    }
}

export default connect(mapStateToProps, mapsToDispatchProps)(ContactUs);
