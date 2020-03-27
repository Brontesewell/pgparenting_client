import React, { Component } from 'react';
import {connect} from 'react-redux'
import fetchAllCatagories from '../actions/fetchAllCatagories';
import {createBabyHash} from "../utilities/helpers"
import Navbar from '../containers/Navbar'
import Container from './Layout/Container';
import {Link} from 'react-router-dom'

class Young_Adult extends Component {

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
               <div id="background-toddler">
              <h1 className="Catagory">Young Adults (19 - 25 yrs old)</h1>
        <div className="line-catagory"></div>
       
       {this.props.catagories.filter(baby => baby.id === 7).map(b => <Container baby={createBabyHash(b)}/>)}
  
             
            </div>

             <div id="bottom-courses">
               <Link to='/teen'><h5 id="back-page">13 - 18 yrs → </h5></Link>
             <Link to='/co-parents'><h5 id="back-page">Co-Parenting → </h5></Link>
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
  
export default connect(mapStateToProps, mapsToDispatchProps)(Young_Adult);


