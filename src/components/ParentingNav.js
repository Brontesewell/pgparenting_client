import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories'


class ParentingNav extends Component {

render() {
    return (
  <div>
      <div className="container-parenting">
      
        
              
       <div class="menu-item">
                <h5 id="menu-item-p">Parenting Courses</h5>
                   <ul>
                   
                        <li className="parent-lis"><a href="/baby">0-12mths</a></li>
                       <li className="parent-lis"><a href="/toddler">1-2yrs</a></li>
                        <li className="parent-lis"><a href="/pre_school"> 3-5yrs</a></li>
                        <li className="parent-lis"><a href="/primary_school"> 6-10yrs</a></li>
                         <li className="parent-lis"><a href="/preteen">11-12yrs</a></li>
                        <li  className="parent-lis"><a href="/teen">13-18yrs</a></li>
                        <li className="parent-lis"><a href="/young_adults">19-25yrs</a></li>
                      
                   </ul>
        </div>

        {/* <div class="menu-item">
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


        </div> */}
        <div class="menu-item">
               <h5 onClick={() =>  window.location.href='/co-parents'}   id="menu-item-p">Co-Parenting</h5>
      
               </div>
        </div>
        <br></br>
   
      
      <div class="line-row"></div>
      </div>
    );
}
}
export default ParentingNav;















