import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories'
import ParentingTips from './ParentingTips'
import Baby from '../Catagories/Baby'
import Toddler from '../Catagories/Teen'
import Pre_school from '../Catagories/Pre_school';
import Primary_school from '../Catagories/Primary_School';
import Preteen from '../Catagories/Preteen';
import Teen from '../Catagories/Toddler';
import Young_Adults from '../Catagories/Young_Adult';

class ParentingCourses extends Component {

    state = {
        catagories: this.props.catagories,
        baby: [],
        Toddler: [],
        Pre_school: [],
        Primary_School: [],
        Preteen: [],
        Teen: [],
        Young_Adult: [],
    }

    componentDidMount () {
      
       this.props.fetchAllCatagories()
    }

    componentDidMount() {
         this.state.catagories.map(catagories => catagories.id === 1 ?
            this.setState({
            baby: catagories
            }) : 
            catagories.id === 2 ?
            this.setState({
                Toddler: catagories
            }) :
            catagories.id === 3 ?
            this.setState({
                Pre_school: catagories
            }) :
            catagories.id === 4 ?
            this.setState({
                Primary_School: catagories
            }) :
            catagories.id === 5 ?
            this.setState({
                Preteen: catagories
            }) :
            catagories.id === 6 ?
            this.setState({
                Teen: catagories
            }) :
            catagories.id === 7 ?
            this.setState({
                Young_Adult: catagories
            }) :
                null
         )
    }



    
    render() {
            //    console.log(fetchAllCatagories)
            //    console.log(this.props.catagories)
            //    console.log(this.state.catagories)
               console.log(this.state.Baby)
        return (
            <div>
              <div><Navbar/></div>
              <h1><strong>Parenting Course</strong></h1>

              {this.props.catagories.map(c => c.id === 1 ? <h1>{c.catagory_title}</h1> : null)}
            </div>
                
        );
    }
}
const mapStateToProps = state => {
    return {
    catagories: state.catagories,
      displayCatagories: state.displayCatagories
    }
  }
// ?? map over items () of fetchAllCatagories
const mapsToDispatchProps = dispatch => {
    return {
        fetchAllCatagories: ()=> dispatch(fetchAllCatagories())
    }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(ParentingCourses);

