
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'


class QuadBox extends Component {

   

    
    render() {
    
console.log(this.props.num_1)
        return (
            <div>
                
                <div className = 'row'>
               {<Navbar/>} 
            </div>

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




export default QuadBox;
