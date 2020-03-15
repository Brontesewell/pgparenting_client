import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories'
import ParentingTips from './ParentingTips'
import CoursesContainer from './CoursesContainer'
import Baby from '../Catagories/Baby'
import Toddler from '../Catagories/Toddler'
import Pre_school from '../Catagories/Pre_school';
import Primary_school from '../Catagories/Primary_School';
import Preteen from '../Catagories/Preteen';
import Teen from '../Catagories/Teen';
import Young_Adults from '../Catagories/Young_Adult';

class ParentingCourses extends Component {

    state = {
        catagories: this.props.catagories,
        Baby: "",
        Toddler: "",
        Pre_school: "",
        Primary_School: "",
        Preteen: "",
        Teen: "",
        Young_Adult: "",
    }

    componentDidMount () {
      
       this.props.fetchAllCatagories()
    }

    componentDidMount() {
         this.state.catagories.map(catagories => catagories.id === 1 ?
            this.setState({
                Baby: catagories
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
        

              {/* {this.state.catagories.map(catagories => 
                catagories.id === 1 ? 
                <Baby catagories={catagories}/> :
                )}
        {/* // catagories.id === 1 ? 
        // <Baby catagories={catagories}/> : 
        // catagories.id === 2 ? 
        // <Toddler catagories={catagories}/> : 
        // catagories.id === 3 ?
        // <Pre_school catagories={catagories}/>
        // : "hehehe" */} */}
        
        {/* {if(catagories.id === 1) {
        return <Baby catagories={catagories}/> }
        else if (catagories.id === 2 ) {
            return  <Toddler catagories={catagories}/> 
        }  
        else if  (catagories.id === 3 ) {
            return <Pre_school catagories={catagories}/>
        }
            //      
         else if  (catagories.id === 4 ) {
             return <Primary_school catagories={catagories}/> 
         }
        else if ( catagories.id === 5) {
            return <Preteen catagories={catagories}/>
        }
        else if ( catagories.id === 6) {
            return <Teen catagories={catagories}/>
        }
        else {return <Young_Adults catagories={catagories}/> }
                 
        })} */}

        {/* <CoursesContainer catagories={catagories}/> */}
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

