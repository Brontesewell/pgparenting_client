import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories'


class ParentingNav extends Component {

    state = {
        catagories: this.props.catagories,
        catagory: ""
    }

    componentDidMount () {
      
       this.props.fetchAllCatagories()
    }

    componentDidMount() {
         this.state.catagories.map(cat =>
            this.setState({
              catagory: cat
            }) 
         )
    }

render() {
    return (
  <div>
      <div className="container-parenting">
      
        
              
       <div class="menu-item">
                <Link to = '/parenting-courses' className="parenting-links">Parenting Courses</Link>
                   <ul>
                   
                        <li><a href="/baby">0-12mths</a></li>
                       <li><a href="/toddler">1-2yrs</a></li>
                        <li><a href="/pre_school"> 3-5yrs</a></li>
                        <li><a href="/primary_school"> 6-10yrs</a></li>
                         <li><a href="/preteen">11-12yrs</a></li>
                        <li><a href="/teen">13-18yrs</a></li>
                        <li><a href="/young_adults">19-25yrs</a></li>
                      
                   </ul>
        </div>

        <div class="menu-item">
      <Link to = '/parenting-tips' className="parenting-links">Parenting Tips</Link>
                   <ul>
          
                        <li><a href="/baby">0-12mths</a></li>
                       <li><a href="/toddler">1-2yrs</a></li>
                        <li><a href="/pre_school"> 3-5yrs</a></li>
                        <li><a href="/primary_school"> 6-10yrs</a></li>
                         <li><a href="/preteen">11-12yrs</a></li>
                        <li><a href="/teen">13-18yrs</a></li>
                        <li><a href="/young_adults">19-25yrs</a></li>
                   </ul>


        </div>
        </div>

               <Link to = '/co-parents' className="parenting-co">Co-Parenting</Link>
      
      
      
      <div class="line-row"></div>
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

const mapsToDispatchProps = dispatch => {
    return {
        fetchAllCatagories: ()=> dispatch(fetchAllCatagories())
    }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(ParentingNav);























// // const options = [
// //   <Link to = '/profile' >My Family</Link>, <Link to = '/home' >Home</Link>, 'three'
// // ];
// // const defaultOption = options[0];



// class ParentingNav extends React.Component {

//   render() {
    
    
//     return (
//       <div >
// {/* <Dropdown options={options} 
// onChange={this._onSelect}
//  value={defaultOption} 
//  placeholder="Parenting"/>; */}

//       </div>
//     );
//   }
// }

// export default ParentingNav;



// import React from 'react';
// import ReactDOM from 'react-dom';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import { Link } from 'react-router-dom';

// const options = [
//   <Link to = '/profile' >My Family</Link>, <Link to = '/home' >Home</Link>, 'three'
// ];
// const defaultOption = options[0];



// class ParentingNav extends React.Component {

//   render() {
    
    
//     return (
//       <div >
// <Dropdown options={options} 
// onChange={this._onSelect}
//  value={defaultOption} 
//  placeholder="Parenting"/>;

//       </div>
//     );
//   }
// }

// export default ParentingNav;

// import React from 'react';
// import Select from 'react-select';

// const options = [
//   { value: <Link to = '/home' >My Family</Link>, label: <Link to = '/home' >My Family</Link> },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

// class ParentingNav extends React.Component {
//   state = {
//     selectedOption: null,
//   };
//   handleChange = selectedOption => {
//     this.setState(
//       { selectedOption },
//       () => console.log(`Option selected:`, this.state.selectedOption)
//     );
//   };
//   render() {
//     const { selectedOption } = this.state;

//     return (
     
//      <div id="select">
//       <Select
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={options}
//         placeholder="Parent"
//       />
//       </div>
//     );
//   }
// }
// export default ParentingNav;