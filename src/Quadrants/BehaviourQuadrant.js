
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
               
            
                <h4 className="quad-title">Behaviour</h4>
                <div id="line-quad-bottom"></div>
                <div id="outside">
                <p> ↑ Good Achievement</p>
                <div class="block two">2 { this.props.behaviour_2.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                <div class="block four">4 { this.props.behaviour_4.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                <p id="bad-progress">Bad Progress ←</p>
                <div id="inside">  </div>
                <div id="side">  </div>
                <div class="block one">1 { this.props.behaviour_1.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                <div class="block three">3 { this.props.behaviour_3.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                <p  id="good-progress">→ Good Progress </p>
                <p id="bad-achievement">↓ Bad Achievement</p>
                </div>
               


                <h4 className="quad-title">Academic</h4>
                <div id="line-quad-bottom"></div>
                <div id="outside">
                <p> ↑ Good Achievement</p>
                <div class="block two">2 { this.state.academic_2.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                <div class="block four">4 { this.state.academic_4.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                <p id="bad-progress">Bad Progress ←</p>
                <div id="inside">  </div>
                <div id="side">  </div>
                <div class="block one">1 { this.state.academic_1.map(kid => <h6 id="academic1">{kid.name}</h6>)}</div>
                <div class="block three">3 { this.state.academic_3.map(kid => <h6 id="academic3">{kid.name}</h6>)}</div>
                <p  id="good-progress">→ Good Progress </p>
                <p id="bad-achievement">↓ Bad Achievement</p>
                </div>


                < QuadBox currentUser={this.props.currentUser} />
       
               
            </div>
        );
    }
}

export default BehaviourQuadrant;
