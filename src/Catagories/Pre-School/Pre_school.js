import React, { Component } from 'react';
import {connect} from 'react-redux'
import fetchAllCatagories from '../../actions/fetchAllCatagories';
import {createBabyHash} from "../../utilities/helpers"
import Navbar from '../../containers/Navbar'
import Container from './PreSchoolContainer';
import {Link} from 'react-router-dom'

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
        {/* <div style={{marginBottom:'50px'}}>
          <button type="button" class="btn btn-dark">By Catagory</button>
          <button type="button" class="btn btn-dark ml-1">By Date</button>
        </div> */}

       {this.props.catagories.filter(baby => baby.id === 3).map(b => <Container baby={createBabyHash(b)}/>)}
  
       </div>
       <br></br>
       <div id="bottom-courses">
       <Link to='/toddler'><h5 id="back-page">← 1 - 2 yrs</h5></Link>
       <Link to='/primary_school'><h5 id="next-page">6 - 10 yrs → </h5></Link>
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


