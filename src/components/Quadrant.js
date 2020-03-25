
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'



class Quadrant extends Component {

    state = {
        total_progress: this.props.kid.academic_progress + this.props.kid.character_progress + this.props.kid.sport_progress + this.props.kid.behaviour_progress,
        total_score: this.props.kid.behaviour_score + this.props.kid.sport_score + this.props.kid.academic_score + this.props.kid.character_score,
        total_behaviour: this.props.kid.behaviour_score * this.props.kid.behaviour_progress,
        total_sport: this.props.kid.sport_score * this.props.kid.sport_progress,
        total_academic: this.props.kid.academic_progress * this.props.kid.academic_score,
        total_character: this.props.kid.character_score * this.props.kid.character_progress,
    }
    
    render() {
     console.log(this.props.kid) 
console.log(this.state.total_behaviour)
        return (
            <div>
                
              
              <h4 id="quadrant-name">Behaviour</h4>
               { this.state.total_behaviour <= 5 ? <h5>{this.props.kid.name} is less then 5</h5> :
               
               this.state.total_behaviour >= 5 && this.state.total_behaviour <= 9  && this.props.kid.behaviour_progress === 2 ? <h5>{this.props.kid.name} is 2</h5> : 
               this.state.total_behaviour >= 5 && this.state.total_behaviour <= 9  && this.props.kid.behaviour_progress >= 3 ? <h5>{this.props.kid.name} is 3</h5> :
               
               this.state.total_behaviour >= 10 ? <h5>{this.props.kid.name} is more then 10</h5> : null
               
               }

               
            </div>
        );
    }
}




export default Quadrant;
