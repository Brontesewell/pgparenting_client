
import React, { Component } from 'react';
import Navbar from './Navbar'
import {connect} from 'react-redux'
import addKid from '../actions/addKid'
import {Form, Col, FormGroup, FormControl} from 'react-bootstrap'
import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';
import { MDBDatePickerV5 } from 'mdbreact';
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
        

        const {name, birthday, gender, behaviour_progress, behaviour_score, sport_progress, sport_score, academic_progress, academic_score, character_progress, character_score, user_id} = this.state
        const {history} = this.props

        return (
            <div>
                
                    {<Navbar/>}
                
                <div id="edit-background">
                <div className = 'form-edit'>
                    <h2 id="add-kid">Add a Child</h2>
                    <form className = 'edit-kid' onSubmit={(e) => this.props.addKid(e, this.state, history)}>
                       <div id="add-kid-general">

                          
                              <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                  <Form.Label>Name</Form.Label>
                                  <Form.Control name="name" value={name} onChange={this.handleChange} type="text" placeholder="Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridGender">
                                  <Form.Label id="gender-profile-kid">Gender</Form.Label>
                                  <Form.Control name="gender" value={gender} onChange={this.handleChange} as="select" defaultValue="Choose...">
                                    <option  value="" disabled>Choose...</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                  </Form.Control>
                                </Form.Group>
                              </Form.Row>
                              <Form.Row>
                                <Form.Group as={Col} controlId="formGridBirthday">
                                  <Form.Label>Birthday</Form.Label>
                                  <Form.Control name="birthday" value={birthday} onChange={this.handleChange} type="text" placeholder="Birthday" />
                                </Form.Group>
                                </Form.Row>  
                  
                 
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
                        <button id="btn-add-child" className="btn" type="submit" >Add Child</button>
                    </form>
                   </div>
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
