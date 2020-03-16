import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'

class Young_Adult_Container extends Component {
    
    state= {
        young_adults_courses: this.props.young_adults_courses 
    }
    // State \/
    // young_adult: '',
    // young_adults_courses: '',
    // young_adults_cats: ''


    render() {

        return (
            <div>
              {/* <div><Navbar/></div>
              <h1 className="Catagory">Young Adult (19 - 25 yrs old)</h1>
        <div className="line-catagory"></div>*/}
        
             { this.props.young_adults_cats.id ===  this.props.young_adults_courses.sub_catagory_id ? 
            <h1 className="sub_cats">{this.props.young_adults_cats.title}</h1> :
            null
            } 
            <div className="image-boxes">
            <img className="images" src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
            <h6>Title for it ewr wer wer wer</h6>
           </div> 
            </div>
                
        );
    }
  }
export default Young_Adult_Container;

