import React, { Component } from 'react';
import {connect} from 'react-redux'
import fetchAllCatagories from '../actions/fetchAllCatagories';
import {createBabyHash} from "../utilities/helpers"
import Navbar from '../containers/Navbar'
import Container from './Layout/Container';
import {Link} from 'react-router-dom'

class Teen extends Component {

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
              <h1 className="Catagory">Teen (13 - 18 yrs old)</h1>
        <div className="line-catagory"></div>
       
       {this.props.catagories.filter(baby => baby.id === 6).map(b => <Container baby={createBabyHash(b)}/>)}
      
             </div>
             <div id="bottom-courses">
             <Link to='/preteen'><h5 id="back-page">11 - 12 yrs → </h5></Link>
             <Link to='/young_adults'><h5 id="next-page">19 - 25 yrs → </h5></Link>
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
  
export default connect(mapStateToProps, mapsToDispatchProps)(Teen);


