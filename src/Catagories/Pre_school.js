import React, { Component } from 'react';
import {connect} from 'react-redux'
import fetchAllCatagories from '../actions/fetchAllCatagories';
import {createBabyHash} from "../utilities/helpers"
import Navbar from '../containers/Navbar'
import Container from './Layout/Container';

class Pre_school extends Component {

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
               <div><Navbar/></div>
               <div id="background-preschool">
              <h1 className="Catagory">Pre-School (3 - 5 yrs old)</h1>
        <div className="line-catagory"></div>
       
       {this.props.catagories.filter(baby => baby.id === 3).map(b => <Container baby={createBabyHash(b)}/>)}
  
       </div>
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
  
export default connect(mapStateToProps, mapsToDispatchProps)(Pre_school);


