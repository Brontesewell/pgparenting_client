
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
        behaviour_progress: this.props.selectedKid.behaviour_progress, 
        behaviour_score: this.props.selectedKid.behaviour_score, 
        sport_progress: this.props.selectedKid.sport_progress, 
        sport_score: this.props.selectedKid.sport_score, 
        academic_progress: this.props.selectedKid.academic_progress, 
        academic_score: this.props.selectedKid.academic_score, 
        character_progress: this.props.selectedKid.character_progress, 
        character_score: this.props.selectedKid.character_score,
        user_id: this.props.currentUser.id,
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    } 

  //   handleBackClick = () => {
  //     this.props.clearSelectedKid()
  //     // this.props.history.push('/profile')

  // }

    render() {
        
        // console.log(this.props.selectedKid)

        const {name, birthday, gender, behaviour_progress, behaviour_score, sport_progress, sport_score, academic_progress, academic_score, character_progress, character_score, user_id} = this.state
        const {editKid, deleteKid, history, selectedKid} = this.props
        const {id} = selectedKid
        return (
            
            <div>
             
                    {<Navbar/>}
               
                <div id="edit-background">
                <div className = 'form-edit'>
                <h2 id="add-kid">Edit Child</h2>
                    <form className = 'edit-kid' onSubmit={(e)=> editKid(e, this.state, id, history)}>
                    <div id="add-kid-general">
                        <label htmlFor="name">Name</label>
                        <input name="name" value={name} onChange={this.handleChange}/>

                        {/* <label htmlFor="gender">Gender</label>
                        <input name="gender" value={gender} onChange={this.handleChange}/> */}

                        <label htmlFor="gender">Gender</label>
                        <select className="browser-default" name="gender" value={gender} onChange={this.handleChange}>
                            <option value="" disabled selected>Choose a Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>

                       <label htmlFor="birthday">Birthday</label>
                        <input type='text' name="birthday" value={birthday} onChange={this.handleChange}/>
                    </div>

                        <div id="progress">
                        <h3 id="progress-title">Progress</h3>
                        <div className="rankings-progress">
                        <h6> 1 = Getting Worse</h6>
                        <h6> 2 = No Progress</h6>
                        <h6> 3 = Very Little Progress</h6>
                        <h6> 4 = Progress</h6>
                        <h6> 5 = Very Good Progress</h6>
                        </div>
                        <br></br>

                            <label htmlFor="Behaviour Progress">Behaviour Progress</label>  
                            <br></br>   
                              <label className="score">
                                <input name="behaviour_progress" value="1" type="radio" checked onChange={this.handleChange} checked={behaviour_progress === '1'}/>
                                <span>1</span>
                              </label>

                              <label className="score">
                                <input name="behaviour_progress" value="2" type="radio" onChange={this.handleChange} checked={behaviour_progress === '2'}/>
                                <span>2</span>
                              </label>
                              <label className="score">
                                <input name="behaviour_progress" value="3" type="radio" onChange={this.handleChange} checked={behaviour_progress === '3'}/>
                                <span>3</span>
                              </label>

                              <label className="score">
                                <input name="behaviour_progress" value="4" type="radio" onChange={this.handleChange} checked={behaviour_progress === '4'}/>
                                <span>4</span>
                              </label>

                              <label className="score">
                                <input name="behaviour_progress" value="5" type="radio" onChange={this.handleChange} checked={behaviour_progress === '5'}/>
                                <span>5</span>
                              </label>
    
                              <br></br> 
                              <br></br> 

                              <label htmlFor="Sport Progress">Sport Progress</label>  
                            <br></br>   
                              <label className="score">
                                <input name="sport_progress" value="1" type="radio" checked onChange={this.handleChange} checked={sport_progress === '1'}/>
                                <span>1</span>
                              </label>

                              <label className="score">
                                <input name="sport_progress" value="2" type="radio" onChange={this.handleChange} checked={sport_progress === '2'}/>
                                <span>2</span>
                              </label>
                              <label className="score">
                                <input name="sport_progress" value="3" type="radio" onChange={this.handleChange} checked={sport_progress === '3'}/>
                                <span>3</span>
                              </label>

                              <label className="score">
                                <input name="sport_progress" value="4" type="radio" onChange={this.handleChange} checked={sport_progress === '4'}/>
                                <span>4</span>
                              </label>

                              <label className="score">
                                <input name="sport_progress" value="5" type="radio" onChange={this.handleChange} checked={sport_progress === '5'}/>
                                <span>5</span>
                              </label>

                              <br></br> 
                              <br></br> 

                              <label htmlFor="Academic Progress">Academic Progress</label>  
                            <br></br>   
                              <label className="score">
                                <input name="academic_progress" value="1" type="radio" checked onChange={this.handleChange} checked={academic_progress === '1'}/>
                                <span>1</span>
                              </label>

                              <label className="score">
                                <input name="academic_progress" value="2" type="radio" onChange={this.handleChange} checked={academic_progress === '2'}/>
                                <span>2</span>
                              </label>
                              <label className="score">
                                <input name="academic_progress" value="3" type="radio" onChange={this.handleChange} checked={academic_progress === '3'}/>
                                <span>3</span>
                              </label>

                              <label className="score">
                                <input name="academic_progress" value="4" type="radio" onChange={this.handleChange} checked={academic_progress === '4'}/>
                                <span>4</span>
                              </label>

                              <label className="score">
                                <input name="academic_progress" value="5" type="radio" onChange={this.handleChange} checked={academic_progress === '5'}/>
                                <span>5</span>
                              </label>
<br></br> 
<br></br> 


                              <label htmlFor="Character Progress">Character Progress</label>  
                            <br></br>   
                              <label className="score">
                                <input name="character_progress" value="1" type="radio" checked onChange={this.handleChange} checked={character_progress === '1'}/>
                                <span>1</span>
                              </label>

                              <label className="score">
                                <input name="character_progress" value="2" type="radio" onChange={this.handleChange} checked={character_progress === '2'}/>
                                <span>2</span>
                              </label>
                              <label className="score">
                                <input name="character_progress" value="3" type="radio" onChange={this.handleChange} checked={character_progress === '3'}/>
                                <span>3</span>
                              </label>

                              <label className="score">
                                <input name="character_progress" value="4" type="radio" onChange={this.handleChange} checked={character_progress === '4'}/>
                                <span>4</span>
                              </label>

                              <label className="score">
                                <input name="character_progress" value="5" type="radio" onChange={this.handleChange} checked={character_progress === '5'}/>
                                <span>5</span>
                              </label>
                              </div>

                                
                    
                    <div id="score-add-kid">
                                <h4 id="score-title">Achievement Score</h4>
                                <div className="rankings-score">
                                  <h6> 1 = Very Bad</h6>
                                  <h6> 2 = Poor</h6>
                                  <h6> 3 = Ok</h6>
                                   <h6> 4 = Good</h6>
                                   <h6> 5 = Very Good</h6>
                                   </div>
                               <br></br>

                               <label htmlFor="Behaviour Score">Behaviour Score</label>  
                            <br></br>   
                              <label className="score">
                                <input name="behaviour_score" value="1" type="radio" checked onChange={this.handleChange} checked={behaviour_score === '1'}/>
                                <span>1</span>
                              </label>

                              <label className="score">
                                <input name="behaviour_score" value="2" type="radio" onChange={this.handleChange} checked={behaviour_score === '2'}/>
                                <span>2</span>
                              </label>
                              <label className="score">
                                <input name="behaviour_score" value="3" type="radio" onChange={this.handleChange} checked={behaviour_score === '3'}/>
                                <span>3</span>
                              </label>

                              <label className="score">
                                <input name="behaviour_score" value="4" type="radio" onChange={this.handleChange} checked={behaviour_score === '4'}/>
                                <span>4</span>
                              </label>

                              <label className="score">
                                <input name="behaviour_score" value="5" type="radio" onChange={this.handleChange} checked={behaviour_score === '5'}/>
                                <span>5</span>
                              </label>
    
                              <br></br> 
                              <br></br> 

                              <label htmlFor="Sport Score">Sport Score</label>  
                            <br></br>   
                              <label className="score">
                                <input name="sport_score" value="1" type="radio" checked onChange={this.handleChange} checked={sport_score === '1'}/>
                                <span>1</span>
                              </label>

                              <label className="score">
                                <input name="sport_score" value="2" type="radio" onChange={this.handleChange} checked={sport_score === '2'}/>
                                <span>2</span>
                              </label>
                              <label className="score">
                                <input name="sport_score" value="3" type="radio" onChange={this.handleChange} checked={sport_score === '3'}/>
                                <span>3</span>
                              </label>

                              <label className="score">
                                <input name="sport_score" value="4" type="radio" onChange={this.handleChange} checked={sport_score === '4'}/>
                                <span>4</span>
                              </label>

                              <label className="score">
                                <input name="sport_score" value="5" type="radio" onChange={this.handleChange} checked={sport_score === '5'}/>
                                <span>5</span>
                              </label>

                              <br></br> 
                              <br></br> 

                              <label htmlFor="Academic Score">Academic Score</label>  
                            <br></br>   
                              <label className="score">
                                <input name="academic_score" value="1" type="radio" checked onChange={this.handleChange} checked={academic_score === '1'}/>
                                <span>1</span>
                              </label>

                              <label className="score">
                                <input name="academic_score" value="2" type="radio" onChange={this.handleChange} checked={academic_score === '2'}/>
                                <span>2</span>
                              </label>
                              <label className="score">
                                <input name="academic_score" value="3" type="radio" onChange={this.handleChange} checked={academic_score === '3'}/>
                                <span>3</span>
                              </label>

                              <label className="score">
                                <input name="academic_score" value="4" type="radio" onChange={this.handleChange} checked={academic_score === '4'}/>
                                <span>4</span>
                              </label>

                              <label className="score">
                                <input name="academic_score" value="5" type="radio" onChange={this.handleChange} checked={academic_score === '5'}/>
                                <span>5</span>
                              </label>
<br></br> 
<br></br> 


                              <label htmlFor="Character Score">Character Score</label>  
                            <br></br>   
                              <label className="score">
                                <input name="character_score" value="1" type="radio" checked onChange={this.handleChange} checked={character_score === '1'}/>
                                <span>1</span>
                              </label>

                              <label className="score">
                                <input name="character_score" value="2" type="radio" onChange={this.handleChange} checked={character_score === '2'}/>
                                <span>2</span>
                              </label>
                              <label className="score">
                                <input name="character_score" class="with-gap" value="3" type="radio" onChange={this.handleChange} checked={character_score === '3'}/>
                                <span>3</span>
                              </label>

                              <label className="score">
                                <input name="character_score" class="with-gap" value="4" type="radio" onChange={this.handleChange} checked={character_score === '4'}/>
                                <span>4</span>
                              </label>

                              <label className="score">
                                <input name="character_score" class="with-gap" value="5" type="radio" onChange={this.handleChange} checked={character_score === '5'}/>
                                <span>5</span>
                              </label>
                              </div>

                        
                        <br></br>
                        <br></br>
                        <button id="btn-edit-child" className="btn" type="submit" >Update</button>
                    </form>
                    <br/><button className="waves-effect waves btn pink accent-3" type="submit" onClick={(e) => deleteKid(e, selectedKid, history)}>Delete Your Kid</button>
                </div>
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
        deleteKid: (e, kid, history) => dispatch(deleteKid(e, kid, history)),
        clearSelectedKid: () => dispatch({ type: "CLEAR_SELECTED_KID" })
    }
}




export default connect(mapStateToProps, mapsToDispatchProps)(EditKid);
