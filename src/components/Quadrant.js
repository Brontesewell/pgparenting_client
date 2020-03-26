
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import QuadBox from './QuadBox'


class Quadrant extends Component {

    state = {
        total_progress: this.props.kid.academic_progress + this.props.kid.character_progress + this.props.kid.sport_progress + this.props.kid.behaviour_progress,
        total_score: this.props.kid.behaviour_score + this.props.kid.sport_score + this.props.kid.academic_score + this.props.kid.character_score,
        total_behaviour: this.props.kid.behaviour_score * this.props.kid.behaviour_progress,
        total_sport: this.props.kid.sport_score * this.props.kid.sport_progress,
        total_academic: this.props.kid.academic_progress * this.props.kid.academic_score,
        total_character: this.props.kid.character_score * this.props.kid.character_progress,
        num_1: [],
        num_2: [],
        num_3: [],
        num_4: [],
    }


    componentDidMount(){
        if(this.state.total_behaviour <= 5){
        this.setState({
            num_1: this.props.kid.name
        })}
        else if(this.state.total_behaviour >= 5 && this.state.total_behaviour <= 10  && this.props.kid.behaviour_progress === 2){
            this.setState({
                num_2: this.props.kid.name
            }) }
        else if(this.state.total_behaviour >= 5 && this.state.total_behaviour <= 10  && this.props.kid.behaviour_progress >= 3){
            this.setState({
                num_3: this.props.kid.name
            })}
        else if (this.state.total_behaviour >= 11){
            this.setState({
                num_4: this.props.kid.name
            })}
    }
    
    render() {
    //  console.log(this.state.num_1) 
// console.log(this.state.total_behaviour)
        return (
            <div>
                
            <QuadBox num_1={this.state.num_1}/>

                {/* <div class="block one">2</div>
            <div class="block two">4</div>
                <div class="block three">1</div>
                <div class="block four">3</div> */}
              
              {/* <h4 id="quadrant-name">Behaviour</h4> */}
              {/* <div id="behaviour_quad">
               { this.state.total_behaviour <= 5 ? <div id="one"><h5>{this.props.kid.name} is 1</h5></div> :
               this.state.total_behaviour >= 5 && this.state.total_behaviour <= 9  && this.props.kid.behaviour_progress === 2 ?<div id="two"><h5>{this.props.kid.name} is 2</h5></div> : 
               this.state.total_behaviour >= 5 && this.state.total_behaviour <= 9  && this.props.kid.behaviour_progress >= 3 ? <div id="three"><h5>{this.props.kid.name} is 3</h5></div> :
               this.state.total_behaviour >= 10 ? <div id="four"><h5>{this.props.kid.name} is 4</h5></div> : null
               }
               </div> */}

               
            </div>
        );
    }
}




export default Quadrant;
