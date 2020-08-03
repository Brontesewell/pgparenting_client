import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
function Error(props) {
 
  return (
  <div class="error-div">
  <h1 style={{paddingTop: '20%', fontFamily: 'sans-serif', color: '#3b4b75'}}>404 Error</h1>
  <Link to="/"> <button id="btn-error" className="btn" >Go Back Home</button></Link>
  </div>
)}
 
export default Error;