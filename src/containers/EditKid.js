
import React, { Component } from 'react';
import Navbar from './Navbar'
import {connect} from 'react-redux'
import editKid from '../actions/editKid'
import deleteKid from '../actions/deleteKid'

class EditKid extends Component {

    state = {
        name: this.props.selectedKid.name,
        birthday: this.props.selectedKid.birthday,
        gender: this.props.selectedKid.gender,
        user_id: this.props.currentUser.id
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    } 

    render() {
        
        console.log(this.props.selectedKid)

        const {name, birthday, gender, user_id} = this.state
        const {editKid, deleteKid, history, selectedKid} = this.props
        const {id} = selectedKid
console.log(this.props)
        return (
            
            <div>
                <div className = 'row'>
                    {<Navbar/>}
                </div>
                <div className = 'form-edit'>
                    <form className = 'container' onSubmit={(e)=> editKid(e, this.state, id, history)}>
                        <label htmlFor="name">Name</label>
                        <input name="name" value={name} onChange={this.handleChange}/>

                        <label htmlFor="gender">Gender</label>
                        <input name="gender" value={gender} onChange={this.handleChange}/>

                       <label htmlFor="birthday">Birthday</label>
                        <input type='text' name="birthday" value={birthday} onChange={this.handleChange}/>
                        
                        <br></br>
                        <br></br>
                        <button className="waves-effect waves btn blue" type="submit" >Update</button>
                    </form>
                    <br/><button className="waves-effect waves btn pink accent-3" type="submit" onClick={(e) => deleteKid(e, selectedKid, history)}>Delete Your Kid</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedKid: state.selectedKid,
        kids: state.kids,
        currentUser: state.currentUser,
    }
}

const mapsToDispatchProps = dispatch => {
    return {
        editKid: (e, history, state, id) => dispatch(editKid(e, history, state, id)),
        deleteKid: (e, kid, history) => dispatch(deleteKid(e, kid, history))
    }
}

export default connect(mapStateToProps, mapsToDispatchProps)(EditKid);
