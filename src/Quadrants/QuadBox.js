
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import QuadCharacter from './QuadCharacter'

class QuadBox extends Component {

    state={
        sport_1: [],
        sport_2: [],
        sport_3: [],
        sport_4: [],
    }

    componentDidMount(){
        this.props.currentUser.kids.map(kid => (kid.sport_score * kid.sport_progress) <= 5 ?
          this.setState(prevState => ({
                sport_1: [...prevState.sport_1, ...this.state.sport_1.concat(kid)]
        }))
        : (kid.sport_score * kid.sport_progress) >= 5 && (kid.sport_score * kid.sport_progress) <= 10 && kid.sport_progress == 2 ?
            this.setState(prevState => ({
                sport_2: [...prevState.sport_2, ...this.state.sport_2.concat(kid)]
         })) : (kid.sport_score * kid.sport_progress) >= 5 && (kid.sport_score * kid.sport_progress) <= 10 && kid.sport_progress >= 3 ?
            this.setState(prevState => ({
                sport_3: [...prevState.sport_3, ...this.state.sport_3.concat(kid)]
         })) 
             : (kid.sport_score * kid.sport_progress) >= 11 ?
              this.setState(prevState => ({
                  sport_4: [...prevState.sport_4, ...this.state.sport_4.concat(kid)]
                })) : null

        )
    }
    

    
    render() {
    
console.log(this.state.sport_1)
        return (
          <div>


                <h4>Sport</h4>
                <div class="block two">2 { this.state.sport_2.map(kid => <h5 id="sport2">{kid.name}</h5>)}</div>
                <div class="block four">4 { this.state.sport_4.map(kid => <h5 id="sport4">{kid.name}</h5>)}</div>
                <div class="block one">1 { this.state.sport_1.map(kid => <h5 id="sport1">{kid.name}</h5>)}</div>
                <div class="block three">3 { this.state.sport_3.map(kid => <h5 id="sport3">{kid.name}</h5>)}</div>
               
                < QuadCharacter currentUser={this.props.currentUser} />
               
            </div>
        );
    }
}




export default QuadBox;
