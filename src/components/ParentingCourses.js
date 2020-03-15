import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories'
import ParentingTips from './ParentingTips'
import CoursesContainer from './CoursesContainer'

class ParentingCourses extends Component {

    state = {
        catagories: this.props.catagories,
    }

    componentDidMount () {
      
       this.props.fetchAllCatagories()
    }


    
    render() {
            //    console.log(fetchAllCatagories)
            //    console.log(this.props.catagories)
               console.log(this.state.catagories)
        return (
            <div>
              <div><Navbar/></div>
              <h1><strong>Parenting Course</strong></h1>
        {this.props.catagories.map(catagories => <CoursesContainer catagories={catagories}/>)}
        
            </div>
                
        );
    }
}
const mapStateToProps = state => {
    return {
    catagories: state.catagories,
      displayCatagories: state.displayCatagories
    }
  }
// ?? map over items () of fetchAllCatagories
const mapsToDispatchProps = dispatch => {
    return {
        fetchAllCatagories: ()=> dispatch(fetchAllCatagories())
    }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(ParentingCourses);

