import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import ParentingCourses from './ParentingCourses'

class CoursesContainer extends Component {


    render() {
        // console.log(this.props.course.sub_catagory)
        return (
            <div>
    {/* <h1>{this.props.catagories.sub_catagory.title}</h1> */}
    <h1>{this.props.catagories.catagory_name}</h1>
    {/* <h3>{this.props.catagories.content}</h3>
    <h4>{this.props.catagories.quote}</h4> */}

                
            </div>
                
        );
    }
}

  
export default CoursesContainer;
