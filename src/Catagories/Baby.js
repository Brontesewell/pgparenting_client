import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories';
import Young_Adult_Container from './Young_Adult_Container';

class Baby extends Component {

state = {
  babies: this.props.babies,
  catagories: this.props.catagories
}


  componentDidMount (){
    this.props.fetchAllCatagories()
       
    {this.props.catagories.map(c => console.log(c))}
        // c.id 
        // !== 1 ? null : this.setState({
        //   ...this.state,
        //   babies: babies.concat(c) 

        // })
        
        }


    //        const newArray = state.catagories.map(c => c.id === 1 ? {...state,
    //     babies: [...state.babies action.c]} : null )
    //         return {...state, babies: action.babies}

   /* {this.props.catagories.map(c => c.id === 1 ? <h1>{c.catagory_title}</h1> : null)} */

//             case ADD_ITEM :
// return { 
//     ...state,
//     arr: [...state.arr, action.newItem]


    render() {
      console.log(this.props.babies)
      console.log(this.props.babies)
        return (
            <div>
              <div><Navbar/></div>
              <h1 className="Catagory">Baby (0 - 12 mo)</h1>
        <div className="line-catagory"></div>
       
       {/* {this.props.catagories.map(c => c.id === 1 ? <h1>{c.catagory_title}</h1> : null)} */}
       
        
             
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


