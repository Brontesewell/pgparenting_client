import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories';
import Container from '../Catagories/Layout/Container';
import {createBabyHash} from "../utilities/helpers"


class CoParents extends Component {

    state = {
        babies: [],
        catagories: this.props.catagories
      }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="background-catagory">
                       <h1 className="Catagory">Co-Parenting</h1>
        <div className="line-catagory"></div>



        {this.props.catagories.filter(baby => baby.id === 8).map(b => <Container baby={createBabyHash(b)}/>)}

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
  
export default connect(mapStateToProps, mapsToDispatchProps)(CoParents);

