import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories'
import ParentingTips from './ParentingTips'

class ParentingCourses extends Component {

    state = {
        catagories: this.props.catagories,
    }

    componentDidMount () {
      
       this.props.fetchAllCatagories()
    }


    
    render() {
        
        return (
            <div>
              <div><Navbar/></div>
              <h1><strong>Parenting Tips</strong></h1>
        
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

const mapsToDispatchProps = dispatch => {
    return {
        fetchAllCatagories: ()=> dispatch(fetchAllCatagories())
    }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(ParentingCourses);

