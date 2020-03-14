import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCourses from '../actions/fetchAllCourses'

class ParentingCourses extends Component {


    render() {
 
        return (
            <div>
                <Navbar/>
                <div className="split left-side">
                    
                       <div>
                        <h1> Parenting Courses</h1>
                      
	                 {/* <h3>{this.props.courses}</h3> */}
 
                        

                    </div>

                </div>
                
            </div>
                
        );
    }
}

  
export default ParentingCourses;
