
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import QuadBox from './QuadBox'

class BehaviourQuadrant extends Component {

    state={
        academic_1: [],
        academic_2: [],
        academic_3: [],
        academic_4: [],
        sport_1: [],
        sport_2: [],
        sport_3: [],
        sport_4: [],
    }

    componentDidMount(){
        this.props.currentUser.kids.map(kid => 
    (kid.academic_score * kid.academic_progress) <= 5 ?
    this.setState(prevState => ({
          academic_1: [...prevState.academic_1, ...this.state.academic_1.concat(kid)]
  }))
  : (kid.academic_score * kid.academic_progress) >= 5 && (kid.academic_score * kid.academic_progress) <= 10 && kid.academic_progress == 2 ?
      this.setState(prevState => ({
          academic_2: [...prevState.academic_2, ...this.state.academic_2.concat(kid)]
   })) : (kid.academic_score * kid.academic_progress) >= 5 && (kid.academic_score * kid.academic_progress) <= 10 && kid.academic_progress >= 3 ?
      this.setState(prevState => ({
          academic_3: [...prevState.academic_3, ...this.state.academic_3.concat(kid)]
   })) 
       : (kid.academic_score * kid.academic_progress) >= 11 ?
        this.setState(prevState => ({
            academic_4: [...prevState.academic_4, ...this.state.academic_4.concat(kid)]
          })) :
          null

        )
    }
    
    render() {

console.log(this.state.sport_1)
        return (
            <div>
        {/* <div class="block two">{ Object.keys(this.props.behaviour_2).map((keyName, i) => console.log("hello"))}</div> */}
                <h4>Behaviour</h4>
                <div class="block two">2 { this.props.behaviour_2.map(kid => <h5 id="behaviour2">{kid.name}</h5>)}</div>
                <div class="block four">4 { this.props.behaviour_4.map(kid => <h5 id="behaviour4">{kid.name}</h5>)}</div>
                <div class="block one">1 { this.props.behaviour_1.map(kid => <h5 id="behaviour1">{kid.name}</h5>)}</div>
                <div class="block three">3 { this.props.behaviour_3.map(kid => <h5 id="behaviour3">{kid.name}</h5>)}</div>

                <h4>Academic</h4>
                <div class="block two">2 { this.state.academic_2.map(kid => <h5 id="academic2">{kid.name}</h5>)}</div>
                <div class="block four">4 { this.state.academic_4.map(kid => <h5 id="academic4">{kid.name}</h5>)}</div>
                <div class="block one">1 { this.state.academic_1.map(kid => <h5 id="academic1">{kid.name}</h5>)}</div>
                <div class="block three">3 { this.state.academic_3.map(kid => <h5 id="academic3">{kid.name}</h5>)}</div>
                
                < QuadBox currentUser={this.props.currentUser} />
       
               
            </div>
        );
    }
}

export default BehaviourQuadrant;
