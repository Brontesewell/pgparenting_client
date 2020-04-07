import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import JournalsPage from './JournalsPage'

class Children extends Component {
  
    //look at this\/
    handleJournalClick = (journal) => {
        this.props.selectedJournal(journal)
        console.log(this.props.selectedJournal)
        console.log(journal)
        localStorage.setItem('selectedJournal', JSON.stringify(journal))
    }


    render() {
        console.log(this.props.selectedJournals)
        return (
            <div>
            <div id="child-div">
            <h4 id="child-name">{this.props.kid.name}</h4>
            <h6 className="child-gender-bday">Gender: {this.props.kid.gender}</h6>
            <h6 className="child-gender-bday">Birthday: {this.props.kid.birthday}</h6>
           <div id="s-child">
               <h5 className="p-a-scores">Achievement Scores</h5>
               <h6>Behaviour Score:  {this.props.kid.behaviour_score}/5</h6>
               <h6>Sport Score:  {this.props.kid.sport_score}/5</h6>
               <h6>Academic Score:  {this.props.kid.academic_score}/5</h6>
               <h6>Character Score:  {this.props.kid.character_score}/5</h6>
                <h6 id="total">Total Score: {this.props.kid.behaviour_score + this.props.kid.sport_score + this.props.kid.academic_score + this.props.kid.character_score}/20</h6>
               </div>
            
            <div id="p-child">
           <h5  className="p-a-scores">Progress</h5>
           <h6>Behaviour Progress:  {this.props.kid.behaviour_progress}/5</h6>
            <h6>Sport Progress:  {this.props.kid.sport_progress}/5</h6>
           <h6>Academic Progress:  {this.props.kid.academic_progress}/5</h6>
           <h6>Character Progress:  {this.props.kid.character_progress}/5</h6>
            
            <h6 id="total">Total Progress: {this.props.kid.academic_progress + this.props.kid.character_progress + this.props.kid.sport_progress + this.props.kid.behaviour_progress}/20</h6>
               </div>
            <Link to='/edit-kid' onClick={() => this.props.selectedKid(this.props.kid)}><button id="edit-child-button" className="btn">Edit</button></Link>
            
            
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

     <h5 id="journal" onClick={() => this.handleJournalClick(this.props.kid)} >{this.props.kid.name}'s Journals →</h5>
     
        }
       
           
               

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
export default connect(mapStateToProps, mapsToDispatchProps)(Children);















