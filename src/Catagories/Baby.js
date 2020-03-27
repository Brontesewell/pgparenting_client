import React, { Component } from 'react';
import {connect} from 'react-redux'
import fetchAllCatagories from '../actions/fetchAllCatagories';
import Container from './Layout/Container';
import {createBabyHash} from "../utilities/helpers"
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'

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
             
             <div><Navbar/></div>
        <div id="background-toddler">
              <h1 className="Catagory">Baby (0 - 12 mo)</h1>
        <div className="line-catagory"></div>
       {this.props.catagories.filter(baby => baby.id === 1).map(b => <Container baby={createBabyHash(b)}/>)}
  
             </div>

             <div id="bottom-courses">
       <Link to='/toddler'><h5 id="next-page">1 - 2 yrs → </h5></Link>
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
  
export default connect(mapStateToProps, mapsToDispatchProps)(Baby);


