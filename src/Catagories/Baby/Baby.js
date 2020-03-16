import React, { Component } from 'react';
import {connect} from 'react-redux'
import fetchAllCatagories from '../../actions/fetchAllCatagories';
import Baby_Container from './Baby_Container';
import {createBabyHash} from "../../utilities/helpers"
import Navbar from '../../containers/Navbar'

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
              <h1 className="Catagory">Baby (0 - 12 mo)</h1>
        <div className="line-catagory"></div>
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


