import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../../containers/Navbar'
import {Link} from 'react-router-dom'
import Children from '../Children'
import CourseCollection from '../CourseCollection'
import Footer from '../../containers/Footer'
import BehaviourQuadrant from '../Quadrants/BehaviourQuadrant'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import {Col} from 'react-bootstrap'
import { Route, Switch, Redirect } from 'react-router-dom'
import JournalsPage from '../JournalsPage'
import SkillBar from 'react-skillbars';

class KidProfile extends Component  {
    
    handleJournalClick = (journal) => {
        this.props.selectedJournal(journal)
    }
    
    render() {
        const Behaviour_S = [{
               "type": "Behaviour",
               "level": (this.props.selectedChild.behaviour_score/ 5 * 100),
               "color": {
                "bar": "#ed8a9d",
                "title": {
                  "background": "#c21738",
                  "text": "white"
                }
              }
             }]

        const Sport_S = [{
               "type": "Sport",
               "level": (this.props.selectedChild.sport_score/ 5 * 100),
               "color": {
                "bar": "#ed8a9d",
                "title": {
                  "background": "#c21738",
                  "text": "white"
                }
              }
             }]
        const Academic_S = [{
               "type": "Academic",
               "level": (this.props.selectedChild.academic_progress/ 5 * 100),
               "color": {
                "bar": "#ed8a9d",
                "title": {
                  "background": "#c21738",
                  "text": "white"
                }
              }
             }]
        const Character_S = [{
               "type": "Character",
               "level": (this.props.selectedChild.character_score/ 5 * 100),
               "color": {
                "bar": "#ed8a9d",
                "title": {
                  "background": "#c21738",
                  "text": "white"
                }
              }
             }]
        const Total_S = [{
                "type": "Total",
                "level": Math.round(((this.props.selectedChild.behaviour_score + this.props.selectedChild.sport_score + this.props.selectedChild.academic_score + this.props.selectedChild.character_score)/ 20 * 100)),
                "color": {
                    "bar": "#8597C5",
                    "title": {
                      "background": "#3b4b75",
                      "text": "white"
                    }
                  }
              }
           ]

           const Behaviour_P = [{
            "type": "Behaviour",
            "level": (this.props.selectedChild.behaviour_progress/ 5 * 100),
            "color": {
                "bar": "#ed8a9d",
                "title": {
                  "background": "#c21738",
                  "text": "white"
                }
              }
          }]

            const Sport_P = [{
                    "type": "Sport",
                    "level": (this.props.selectedChild.sport_progress/ 5 * 100),
                    "color": {
                        "bar": "#ed8a9d",
                        "title": {
                          "background": "#c21738",
                          "text": "white"
                        }
                      }
                }]
            const Academic_P = [{
                    "type": "Academic",
                    "level": (this.props.selectedChild.academic_progress/ 5 * 100),
                    "color": {
                        "bar": "#ed8a9d",
                        "title": {
                          "background": "#c21738",
                          "text": "white"
                        }
                      }
                }]
            const Character_P = [{
                    "type": "Character",
                    "level": (this.props.selectedChild.character_progress/ 5 * 100),
                    "color": {
                        "bar": "#ed8a9d",
                        "title": {
                          "background": "#c21738",
                          "text": "white"
                        }
                      }
                }]
            const Total_P = [{
                    "type": "Total",
                    "level": Math.round(((this.props.selectedChild.behaviour_progress + this.props.selectedChild.sport_progress + this.props.selectedChild.academic_progress + this.props.selectedChild.character_progress)/ 20 * 100)),
                    "color": {
                        "bar": "#8597C5",
                        "title": {
                          "background": "#3b4b75",
                          "text": "white"
                        }
                      }
                
                }
                ]

// console.log(document.querySelector('.skillbar'))

    return (
        <div id = "leftbox">  
       
       <h1>{this.props.selectedChild.name}</h1>

       <div id="child-div">
            <div class="container line-journals">
                    <div class="row">
                        <div class="col-md child-general-info" >
                            <h6 className="child-gender-bday">Gender: {this.props.selectedChild.gender}</h6>
                            <h6 className="child-gender-bday">Birthday: {this.props.selectedChild.birthday}</h6>
                            {this.props.selectedJournals ?
                            <Switch>
                                <Redirect to={{
                                    pathname: `/journal/${this.props.selectedJournals.id}`,
                                    }} />
                                    <Route path={`/journal/${this.props.selectedJournals.id}`} >
                                        <JournalsPage />
                                    </Route>

                            </Switch>
                            : 
                            <div>
                            <br></br>
                            <h5 id="journal" onClick={() => this.handleJournalClick(this.props.selectedChild)} >{this.props.selectedChild.name}'s Journals →</h5>
                            </div>
                            }

                        </div>
                        <div class="col-md">
                            <Link to='/edit-kid' onClick={() => this.props.selectedKid(this.props.selectedChild)}><button id="edit-child-button" className="btn">Edit</button></Link>
                        </div>
                    </div>
            </div>

            <div class="kid-scores-div">
           <div id="s-child">
               <h5 className="p-a-scores">Achievement Scores</h5>
               <h6>Behaviour Score:  {this.props.selectedChild.behaviour_score}/5</h6>
               <SkillBar skills={Behaviour_S} height={15}></SkillBar>
               <h6>Sport Score:  {this.props.selectedChild.sport_score}/5</h6>
               <SkillBar skills={Sport_S} height={15}></SkillBar>
               <h6>Academic Score:  {this.props.selectedChild.academic_score}/5</h6>
               <SkillBar skills={Academic_S} height={15}></SkillBar>
               <h6>Character Score:  {this.props.selectedChild.character_score}/5</h6>
               <SkillBar skills={Character_S} height={15}></SkillBar>
                <h6 id="total">Total Score: {this.props.selectedChild.behaviour_score + this.props.selectedChild.sport_score + this.props.selectedChild.academic_score + this.props.selectedChild.character_score}/20</h6>
                <SkillBar skills={Total_S} height={15}></SkillBar>
               </div>
            
            <div id="p-child">
           <h5  className="p-a-scores">Progress</h5>
           <h6>Behaviour Progress:  {this.props.selectedChild.behaviour_progress}/5</h6>
           <SkillBar skills={Behaviour_P} height={15}></SkillBar>
            <h6>Sport Progress:  {this.props.selectedChild.sport_progress}/5</h6>
            <SkillBar skills={Sport_P} height={15}></SkillBar>
           <h6>Academic Progress:  {this.props.selectedChild.academic_progress}/5</h6>
           <SkillBar skills={Academic_P} height={15}></SkillBar>
           <h6>Character Progress:  {this.props.selectedChild.character_progress}/5</h6>
           <SkillBar skills={Character_P} height={15}></SkillBar>
            <h6 id="total">Total Progress: {this.props.selectedChild.academic_progress + this.props.selectedChild.character_progress + this.props.selectedChild.sport_progress + this.props.selectedChild.behaviour_progress}/20</h6>
            <SkillBar skills={Total_P} height={15}></SkillBar>
               </div>
               </div>
        
            <h5 className="quadrant-child-title">Quadrants</h5>
            </div>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        selectedKid: state.selectedKid,
        kids: state.kids,
        currentUser: state.currentUser,
        journals: state.journals,
        selectedJournals: state.selectedJournals
    }
}

const mapsToDispatchProps = dispatch =>{
    return{
        selectedKid: (kid) => dispatch({type: 'SET_SELECTED_KID', kid: kid}),
        selectedJournal: (journal) => dispatch({type: 'SET_SELECTED_JOURNALS', journal: journal}),
        }
}

export default connect(mapStateToProps, mapsToDispatchProps)(KidProfile);