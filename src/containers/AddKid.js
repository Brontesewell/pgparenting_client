
import React, { Component } from 'react';
import Navbar from './Navbar'
import {connect} from 'react-redux'
import addKid from '../actions/addKid'


class AddKid extends Component {

    state = {
        name: "",
        birthday: "",
        gender: "",
        behaviour_progress: '1', 
        behaviour_score: '1', 
        sport_progress: '1', 
        sport_score: '1', 
        academic_progress: '1', 
        academic_score: '1', 
        character_progress: '1', 
        character_score: '1',
        user_id: this.props.currentUser.id
    }


    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        

        const {name, birthday, gender, behaviour_progress, user_id} = this.state
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
                         <label htmlFor="gender">Gender</label>
                        <select className="browser-default" value={gender} name="gender" onChange={this.handleChange}>
                            <option value="" disabled selected>Choose a Gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>

                       <label htmlFor="birthday">Birthday</label>
                        <input type='text' name="birthday" value={birthday} onChange={this.handleChange}/>

<h4>Progress</h4>
<h6> 1 = Getting Worse</h6>
<h6> 2 = No Progress</h6>
<h6> 3 = Progress</h6>
<h6> 4 = Very Good Progress</h6>
<br></br>
    <label htmlFor="Behaviour Progress">Behaviour Progress</label>  
    <br></br>   
      <label>
        <input name="behaviour_progress" value="1" type="radio" checked onChange={this.handleChange} checked={behaviour_progress === '1'}/>
        <span>1</span>
      </label>
    
      <label>
        <input name="behaviour_progress" value="2" type="radio" onChange={this.handleChange} checked={behaviour_progress === '2'}/>
        <span>2</span>
      </label>
      <label>
        <input name="behaviour_progress" value="3" type="radio" onChange={this.handleChange} checked={behaviour_progress === '3'}/>
        <span>3</span>
      </label>
   
      <label>
        <input name="behaviour_progress" value="4" type="radio" onChange={this.handleChange} checked={behaviour_progress === '4'}/>
        <span>4</span>
      </label>
    
  

                      




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
