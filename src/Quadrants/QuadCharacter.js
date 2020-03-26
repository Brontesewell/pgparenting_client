
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
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


                <h4>Character</h4>
                <div class="block two">2 { this.state.character_2.map(kid => <h5 id="character2">{kid.name}</h5>)}</div>
                <div class="block four">4 { this.state.character_4.map(kid => <h5 id="character4">{kid.name}</h5>)}</div>
                <div class="block one">1 { this.state.character_1.map(kid => <h5 id="character1">{kid.name}</h5>)}</div>
                <div class="block three">3 { this.state.character_3.map(kid => <h5 id="character3">{kid.name}</h5>)}</div>
                
               
            </div>
        );
    }
}




export default QuadCharacter;
