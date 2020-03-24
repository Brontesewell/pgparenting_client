import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Children extends Component {
    
    render() {
        return (
            <div>
            <div id="child-div">
            <h4>{this.props.kid.name}</h4>
            <h6 className="child-gender-bday">Gender: {this.props.kid.gender}</h6>
            <h6 className="child-gender-bday">Birthday: {this.props.kid.birthday}</h6>
           <div id="s-child">
               <h5>Scores</h5>
               <h6>Behaviour Score:  {this.props.kid.behaviour_score}/4</h6>
               <h6>Sport Score:  {this.props.kid.sport_score}/4</h6>
               <h6>Academic Score:  {this.props.kid.academic_score}/4</h6>
               <h6>Character Score:  {this.props.kid.character_score}/4</h6>
                <h6 id="total">Total Score: {this.props.kid.behaviour_score + this.props.kid.sport_score + this.props.kid.academic_score + this.props.kid.character_score}/16</h6>
               </div>
            
            <div id="s-child">
           <h5>Progress</h5>
           <h6>Behaviour Progress:  {this.props.kid.behaviour_progress}/4</h6>
            <h6>Sport Progress:  {this.props.kid.sport_progress}/4</h6>
           <h6>Academic Progress:  {this.props.kid.academic_progress}/4</h6>
           <h6>Character Progress:  {this.props.kid.character_progress}/4</h6>
            
            <h6 id="total">Total Progress: {this.props.kid.academic_progress + this.props.kid.character_progress + this.props.kid.sport_progress + this.props.kid.behaviour_progress}/16</h6>
               </div>
            <Link to='/edit-kid' onClick={() => this.props.selectedKid(this.props.kid)}><button id="edit-child-button" className="btn">Edit</button></Link>
            <Link><h5 id="journal">{this.props.kid.name}'s Journals →</h5></Link>
               

            </div>
</div>
    );
}
}

const mapsToDispatchProps = dispatch =>{
    return{
        selectedKid: (kid) => dispatch({type: 'SET_SELECTED_KID', kid: kid}),
        }
}
export default connect(null, mapsToDispatchProps)(Children);















