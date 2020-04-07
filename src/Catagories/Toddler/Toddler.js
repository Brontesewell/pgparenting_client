import React, { Component } from 'react';
import {connect} from 'react-redux'
import fetchAllCatagories from '../../actions/fetchAllCatagories';
import {createBabyHash} from "../../utilities/helpers"
import Navbar from '../../containers/Navbar'
import Container from './ToddlerContainer';
import {Link} from 'react-router-dom'

class Toddler extends Component {

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
              <h1 className="Catagory">Toddler (1 - 2 yrs old)</h1>
        <div className="line-catagory"></div>
       
       {this.props.catagories.filter(baby => baby.id === 2).map(b => <Container baby={createBabyHash(b)}/>)}
       </div>

       <div id="bottom-courses">
       <Link to='/baby'><h5 id="back-page">← 0 - 12 mo</h5></Link>
       <Link to='/pre_school'><h5 id="next-page">3 - 5 yrs → </h5></Link>
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
  
export default connect(mapStateToProps, mapsToDispatchProps)(Toddler);


