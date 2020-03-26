import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'
import Parents from '../Parents.jpg'
import { Link } from 'react-router-dom';

class AboutASP extends Component {


    
    render () {  
        
        return (
            <div>
                <div className = 'row'>
                    <Navbar />
                </div>

        
                <h2 id="asp-title">Achievement Scoring & Progress</h2>
                <div id="asp-line"></div>


<div id="asp-div">
                <h4 className="asp-subtitle">Achievement Scoring</h4>
                <h5 className="define-asp"> →  This is based on the Childs overall demeanor.</h5>
               <h5 className="ranking-asp">Ranking:</h5>
               <h5 className="ranking-asp">1 = Very Bad</h5>
               <h5 className="ranking-asp">2 = Poor</h5>
               <h5 className="ranking-asp">3 = Ok</h5>
               <h5 className="ranking-asp">4 = Good</h5>
               <h5 className="ranking-asp">5 = Very Good</h5>

               <br></br>
              
               <h4 className="asp-subtitle">Progress Scoring</h4>
                <h5 className="define-asp"> → This is based on the Child's day to day Progress and whether or not they are getting better or worse. It is so you can track whether your child is getting better or worse.</h5>
               <h5 className="ranking-asp">Ranking:</h5>
               <h5 className="ranking-asp">1 = Getting Worse</h5>
               <h5 className="ranking-asp">2 = No Progress</h5>
               <h5 className="ranking-asp">3 = Little Progress</h5>
               <h5 className="ranking-asp">4 = Progress</h5>
               <h5 className="ranking-asp">5 = Very Good Progress</h5>
              
               <br></br>

               <h4 className="asp-subtitle">Quadrants</h4>
               </div>
               <Link to="/profile"><button id="asp-button-back" className="btn">Back</button></Link>

            </div>
        )
    }
}


export default AboutASP;
