import React from 'react';
import ReactDOM from 'react-dom';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';


class ParentingNav extends React.Component {
render() {
    return (
  <div>
      <div className="container-parenting">
      <div class="menu-item">
      <Link to = '/parenting-tips' className="parenting-links">Parenting Tips</Link>
                   <ul>
                        <li><a href="">0-12mths</a></li>
                       <li><a href="">1-2yrs</a></li>
                        <li><a href=""> 3-5yrs</a></li>
                        <li><a href=""> 6-10yrs</a></li>
                         <li><a href="">11-12yrs</a></li>
                        <li><a href="">13-18yrs</a></li>
                        <li><a href="">19-25yrs</a></li>
                   </ul>
        </div>
        
       
               <Link to = '/co-parents' className="parenting-links">Co-Parenting</Link>
      
              
       <div class="menu-item">
                <Link to = '/parenting-courses' className="parenting-links">Parenting Courses</Link>
                   <ul>
                       <li><a href="">0-12mths</a></li>
                       <li><a href="">1-2yrs</a></li>
                        <li><a href=""> 3-5yrs</a></li>
                        <li><a href=""> 6-10yrs</a></li>
                         <li><a href="">11-12yrs</a></li>
                        <li><a href="">13-18yrs</a></li>
                        <li><a href="">19-25yrs</a></li>
                   </ul>
        </div>
      
      </div>
              <div class="menu-container">
      </div>
      <div class="line-row"></div>
      </div>
    );
}
}

export default ParentingNav;
























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