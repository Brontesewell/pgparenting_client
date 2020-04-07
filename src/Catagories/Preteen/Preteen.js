import React, { Component } from 'react';
import {connect} from 'react-redux'
import fetchAllCatagories from '../../actions/fetchAllCatagories';
import {createBabyHash} from "../../utilities/helpers"
import Navbar from '../../containers/Navbar'
import Container from './PreteenContainer';
import {Link} from 'react-router-dom'

class Preteen extends Component {

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
              <h1 className="Catagory">Preteen (11 - 12 yrs old)</h1>
        <div className="line-catagory"></div>
       
       {this.props.catagories.filter(baby => baby.id === 5).map(b => <Container baby={createBabyHash(b)}/>)}
  
             </div>

             <div id="bottom-courses">
             <Link to='/primary_school'><h5 id="back-page">← 6 - 10 yrs</h5></Link>
               <Link to='/teen'><h5 id="next-page">13 - 18 yrs → </h5></Link>
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
  
export default connect(mapStateToProps, mapsToDispatchProps)(Preteen);


