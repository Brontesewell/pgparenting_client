import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories';
import Baby_Container from './Baby_Container';
import Pre_school from './Pre_school';
import Primary_School from './Primary_School';
import Toddler from './Toddler';
import Preteen from './Preteen';
import {createBabyHash} from "../utilities/helpers"


class Baby extends Component {

state = {
  babies: [],
  catagories: this.props.catagories
}


  componentDidMount (){

      this.props.fetchAllCatagories()
        
        }


    render() {
  
        return (
            <div>
             
       
       {this.props.catagories.filter(baby => baby.id === 1).map(b => <Baby_Container baby={createBabyHash(b)}/>)}
  
             
            </div>
                
        );
    }
  }
  const mapStateToProps = state => {
    return {
      babies: state.babies,
      catagories: state.catagories
    }
  }

  const mapsToDispatchProps = dispatch => {
    return {
        fetchAllCatagories: ()=> dispatch(fetchAllCatagories())
    }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(Baby);


