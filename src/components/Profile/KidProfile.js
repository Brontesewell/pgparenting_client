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

class KidProfile extends Component  {
    
    handleJournalClick = (journal) => {
        this.props.selectedJournal(journal)
    }

    render() {

    return (
        <div id = "leftbox">  
       
       <h1>{this.props.selectedChild.name}</h1>

       <div id="child-div">
            <h6 className="child-gender-bday">Gender: {this.props.selectedChild.gender}</h6>
            <h6 className="child-gender-bday">Birthday: {this.props.selectedChild.birthday}</h6>
           <div id="s-child">
               <h5 className="p-a-scores">Achievement Scores</h5>
               <h6>Behaviour Score:  {this.props.selectedChild.behaviour_score}/5</h6>
               <h6>Sport Score:  {this.props.selectedChild.sport_score}/5</h6>
               <h6>Academic Score:  {this.props.selectedChild.academic_score}/5</h6>
               <h6>Character Score:  {this.props.selectedChild.character_score}/5</h6>
                <h6 id="total">Total Score: {this.props.selectedChild.behaviour_score + this.props.selectedChild.sport_score + this.props.selectedChild.academic_score + this.props.selectedChild.character_score}/20</h6>
               </div>
            
            <div id="p-child">
           <h5  className="p-a-scores">Progress</h5>
           <h6>Behaviour Progress:  {this.props.selectedChild.behaviour_progress}/5</h6>
            <h6>Sport Progress:  {this.props.selectedChild.sport_progress}/5</h6>
           <h6>Academic Progress:  {this.props.selectedChild.academic_progress}/5</h6>
           <h6>Character Progress:  {this.props.selectedChild.character_progress}/5</h6>
            
            <h6 id="total">Total Progress: {this.props.selectedChild.academic_progress + this.props.selectedChild.character_progress + this.props.selectedChild.sport_progress + this.props.selectedChild.behaviour_progress}/20</h6>
               </div>
            <Link to='/edit-kid' onClick={() => this.props.selectedKid(this.props.selectedChild)}><button id="edit-child-button" className="btn">Edit</button></Link>
            
            
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

     <h5 id="journal" onClick={() => this.handleJournalClick(this.props.selectedChild)} >{this.props.selectedChild.name}'s Journals →</h5>
     
    }
       
           
               

    
            </div>
            <br/>
            <h4 id="child-name">Quadrants</h4>
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