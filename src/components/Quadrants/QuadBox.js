
import React, { Component } from 'react';
import Navbar from '../../containers/Navbar'
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

            <h4 className="quad-title">Sport</h4>
                <div className="container"  style ={ { backgroundImage: 'url(' + require('../../quadbg.png') + ')',  backgroundRepeat: "no-repeat", backgroundSize: '100% 100%'}}>
                            <div class="row">
                                <div class="col-sm quads-imagez two">
                                <div > { this.state.sport_2.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>

                                </div>
                               
                                <div class="col-sm quads-imagez four">
                                <div > { this.state.sport_4.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                                </div> 
                                </div>

                                <div class="row">
                                <div class="col-sm quads-imagez one">
                                <div > { this.state.sport_1.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>

                                </div>
                               
                                <div class="col-sm quads-imagez three">
                                <div > { this.state.sport_3.map(kid => <h6 className="names-quad">{kid.name}</h6>)}</div>
                                </div> 
                        </div>
                </div>
             
                {/* <h4 className="quad-title">Sport</h4>
                <div id="line-quad-bottom"></div>
                <div id="outside">
                <p> ↑ Good Achievement</p>
                <div class="block two">2 { this.state.sport_2.map(kid => <h6 className="names-quad" >{kid.name}</h6>)}</div>
                <div class="block four">4 { this.state.sport_4.map(kid => <h6 className="names-quad" >{kid.name}</h6>)}</div>
                <p id="bad-progress">Bad Progress ←</p>
                <div id="inside">  </div>
                <div id="side">  </div>
                <div class="block one">1 { this.state.sport_1.map(kid => <h6 className="names-quad" >{kid.name}</h6>)}</div>
                <div class="block three">3 { this.state.sport_3.map(kid => <h6 className="names-quad" >{kid.name}</h6>)}</div>
                <p  id="good-progress">→ Good Progress </p>
                <p id="bad-achievement">↓ Bad Achievement</p>
                </div> */}
                

                < QuadCharacter currentUser={this.props.currentUser} />
               
            </div>
        );
    }
}




export default QuadBox;
