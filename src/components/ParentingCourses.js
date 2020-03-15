import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCourses from '../actions/fetchAllCourses'
import ParentingTips from './ParentingTips'
import CoursesContainer from './CoursesContainer'

class ParentingCourses extends Component {


    componentDidMount () {
      
       this.props.fetchAllCourses()
    }
    
    render() {
               console.log(fetchAllCourses)
               console.log(this.props.courses)
        return (
            <div>
              
            {this.props.courses.map(course => <ParentingTips course={course}/>)}
                
            </div>
                
        );
    }
}
const mapStateToProps = state => {
    return {
      courses: state.courses,
      displayCourses: state.displayCourses
    }
  }
// ?? map over items () of fetchallcourses
const mapsToDispatchProps = dispatch => {
    return {
        fetchAllCourses: ()=> dispatch(fetchAllCourses())
    }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(ParentingCourses);

