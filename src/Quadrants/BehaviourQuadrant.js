
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'

class BehaviourQuadrant extends Component {

    // state = {
    //     total_progress: this.props.kid.academic_progress + this.props.kid.character_progress + this.props.kid.sport_progress + this.props.kid.behaviour_progress,
    //     total_score: this.props.kid.behaviour_score + this.props.kid.sport_score + this.props.kid.academic_score + this.props.kid.character_score,
    //     total_behaviour: this.props.kid.behaviour_score * this.props.kid.behaviour_progress,
    //     total_sport: this.props.kid.sport_score * this.props.kid.sport_progress,
    //     total_academic: this.props.kid.academic_progress * this.props.kid.academic_score,
    //     total_character: this.props.kid.character_score * this.props.kid.character_progress,
    //     num_1: [],
    //     num_2: [],
    //     num_3: [],
    //     num_4: [],
    //     clickedquad: null
    // }

    
    
    // componentDidMount(){
    //     if(this.state.total_behaviour <= 5){
    //     this.setState({
    //         num_1: this.props.kid.name
    //     })}
    //     else if(this.state.total_behaviour >= 5 && this.state.total_behaviour <= 10  && this.props.kid.behaviour_progress == 2){
    //         this.setState({
    //             num_2: this.props.kid.name
    //         }) }
    //         else if(this.state.total_behaviour >= 5 && this.state.total_behaviour <= 10  && this.props.kid.behaviour_progress >= 3){
    //             this.setState({
    //                 num_3: this.props.kid.name
    //             })}
    //             else if (this.state.total_behaviour >= 11){
    //                 this.setState({
    //                     num_4: this.props.kid.name
    //                 })}
    //             }


    //         handleQuadClick = (quad) => {
    //             this.setState({
    //                 clickedquad: quad
    //                 })
    //             }

    // state ={
    //     behaviour_2_arr: []
    // }

    // componentDidMount(){
    //     this.setState({
    //         behaviour_2_arr: this.props.behaviour_3
    //     })
    // }
    
    render() {

console.log(this.props.behaviour_2)
        return (
            <div>
        {/* <div class="block two">{ Object.keys(this.props.behaviour_2).map((keyName, i) => console.log("hello"))}</div> */}
                <h4>Behaviour</h4>
                <div class="block two">2 { this.props.behaviour_2.map(kid => <h3 id="behaviour2">{kid.name}</h3>)}</div>
                <div class="block four">4 { this.props.behaviour_4.map(kid => <h3 id="behaviour4">{kid.name}</h3>)}</div>
                <div class="block one">1 { this.props.behaviour_1.map(kid => <h3 id="behaviour1">{kid.name}</h3>)}</div>
                <div class="block three">3 { this.props.behaviour_3.map(kid => <h3 id="behaviour3">{kid.name}</h3>)}</div>



                
{/* 
            <h5 id="num1">{this.state.num_1}</h5> 
           <h5 id="num2">{this.state.num_2}</h5>
            <h5 id="num3">{this.state.num_3}</h5> 
            <h5 id="num4">{this.state.num_4}</h5> */}
                    {/* <button className="buttonss"><Link to={{
                            pathname: '/quadrant',
                                state: {
                                    num_1: this.state.num_1, 
                                    num_2: this.state.num_2,
                                    num_3: this.state.num_3,
                                    num_4: this.state.num_4
                     }
                    }}>Quadrants</Link></button> */}

{/* {this.props.clickedquad ?
     <Switch>
           <Redirect to={{
                pathname: '/quadrant',
                state: { clickedquad: this.props.clickedquad, num_1: this.state.num_1, 
                    num_2: this.state.num_2,
                    num_3: this.state.num_3,
                    num_4: this.state.num_4 }
            }} /> */}
            {/* <Route path='/quadrant' >
                <QuadBox clickedjournal={this.props.selectedJournals} num_1: this.state.num_1, 
                                    num_2: this.state.num_2,
                                    num_3: this.state.num_3,
                                    num_4: this.state.num_4 />
            </Route> */}
      {/* </Switch>
     : 

     <button className="buttonss" onClick={() => this.handleQuadClick()} >Quadrants</button>
     
        } */}
            
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

export default BehaviourQuadrant;
