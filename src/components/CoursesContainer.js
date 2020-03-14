import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCourses from '../actions/fetchAllCourses'

class CoursesContainer extends Component {

    componentDidMount () {
        this.props.fetchAllCourses()
    }


    render() {
      console.log(courses)

        return (
            <div>
                <Navbar/>
                <div className="split left-side">
                    
                       <div>
                        <h1> Parenting Courses</h1>
                        {courses.map(course => <ParentingCourses key={Math.Random()} course={course}/>)}

                    </div>

                </div>
                
            </div>
                
        );
    }
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  }
}

const mapsToDispatchProps = dispatch => {
  return{
    fetchAllCourses: ()=> dispatch(fetchAllCourses()),
  }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(CoursesContainer);
