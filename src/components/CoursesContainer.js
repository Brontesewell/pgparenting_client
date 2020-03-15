import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import ParentingCourses from './ParentingCourses'
import fetchAllCourses from '../actions/fetchAllCourses'

class CoursesContainer extends Component {

  
    componentDidMount () {
        fetchAllCourses()
        this.props.fetchAllCourses()
     }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="split left-side">
                    
                       <div>
                        <h1> Parenting Courses</h1>


                        {this.props.courses.map(course => <ParentingCourses course={course}/>)}
                
                    </div>

                </div>
                
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
  
export default connect(mapStateToProps, mapsToDispatchProps)(CoursesContainer);
