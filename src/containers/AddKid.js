
import React, { Component } from 'react';
import Navbar from './Navbar'
import {connect} from 'react-redux'
import addKid from '../actions/addKid'


class AddKid extends Component {

    state = {
        name: "",
        birthday: "",
        gender: "",
        user_id: this.props.currentUser.id
    }


    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        

        const {name, birthday, gender, user_id} = this.state
        const {history} = this.props

        return (
            <div>
                <div className = 'row'>
                    {<Navbar/>}
                </div>
                <div className = 'form-edit'>
                    <form className = 'container' onSubmit={(e) => this.props.addKid(e, this.state, history)}>
                        <label htmlFor="name">Name</label>
                        <input name="name" value={name} onChange={this.handleChange}/>

                        {/* <label htmlFor="gender">Gender</label>
                        <input name="gender" value={gender} onChange={this.handleChange}/> */}
                        <select className="browser-default" name="gender" onChange={this.handleChange}>
                            <option value="" disabled selected>Choose a Gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>

                       <label htmlFor="birthday">Birthday</label>
                        <input type='text' name="birthday" value={birthday} onChange={this.handleChange}/>
                        
                        <br></br>
                        <br></br>
                        <button className="waves-effect waves btn blue" type="submit" >Add Child</button>
                    </form>
                   </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}



const mapsToDispatchProps = dispatch => {
    return {
        addKid: (e, history, state) => dispatch(addKid(e, history, state)),
    }
}

export default connect(mapStateToProps, mapsToDispatchProps)(AddKid);
