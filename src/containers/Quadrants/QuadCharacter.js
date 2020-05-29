
import React, { Component } from 'react';
import Navbar from '../Navbar'
import {connect} from 'react-redux'


class QuadCharacter extends Component {

    state={
        character_1: [],
        character_2: [],
        character_3: [],
        character_4: [],
    }

    componentDidMount(){
        this.props.currentUser.kids.map(kid => (kid.character_score * kid.character_progress) <= 5 ?
          this.setState(prevState => ({
                character_1: [...prevState.character_1, ...this.state.character_1.concat(kid)]
        }))
        : (kid.character_score * kid.character_progress) >= 5 && (kid.character_score * kid.character_progress) <= 10 && kid.character_progress == 2 ?
            this.setState(prevState => ({
                character_2: [...prevState.character_2, ...this.state.character_2.concat(kid)]
         })) : (kid.character_score * kid.character_progress) >= 5 && (kid.character_score * kid.character_progress) <= 10 && kid.character_progress >= 3 ?
            this.setState(prevState => ({
                character_3: [...prevState.character_3, ...this.state.character_3.concat(kid)]
         })) 
             : (kid.character_score * kid.character_progress) >= 11 ?
              this.setState(prevState => ({
                  character_4: [...prevState.character_4, ...this.state.character_4.concat(kid)]
                })) : null

        )
    }
    

    
    render() {
    

        return (
          <div>


                
                <h4 className="quad-title">Character</h4>
                <div id="line-quad-bottom"></div>
                <div id="outside">
                <p> ↑ Good Achievement</p>
                <div class="block two">2 { this.state.character_2.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                <div class="block four">4 { this.state.character_4.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                <p id="bad-progress">Bad Progress ←</p>
                <div id="inside">  </div>
                <div id="side">  </div>
                <div class="block one">1 { this.state.character_1.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                <div class="block three">3 { this.state.character_3.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                <p  id="good-progress">→ Good Progress </p>
                <p id="bad-achievement">↓ Bad Achievement</p>
                </div>
                
               
            </div>
        );
    }
}




export default QuadCharacter;
