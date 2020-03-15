import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import ParentingCourses from './ParentingCourses'
import Baby from '../Catagories/Baby'
import Toddler from '../Catagories/Toddler'
import Pre_school from '../Catagories/Pre_school';
import Primary_school from '../Catagories/Primary_School';
import Preteen from '../Catagories/Preteen';
import Teen from '../Catagories/Teen';
import Young_Adults from '../Catagories/Young_Adult';

class CoursesContainer extends Component {


    render() {
        // console.log(this.props.catagories)
        {/* {this.props.catagories.sub_catagories.map(course => console.log(course))}
        {this.props.catagories.courses.map(course => console.log(course))} */}
        
        
        return (
            <div>

            {/* <h1>{this.props.catagories.catagory_name}</h1> */}


                
            </div>
                
        );
    }
}

  
export default CoursesContainer;
