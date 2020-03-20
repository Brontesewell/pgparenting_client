import React from 'react'
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import Children from './Children'
import CourseCollection from './CourseCollection'


const Profile = (props) => {
console.log(props.currentUser.kids)
    const {first_name, last_name, email} = props.currentUser

    return (
        <div>
            <div className = 'row'>
               {<Navbar/>} 
            </div>
            <div className = 'row'>
            <h1 className="Catagory">My Family</h1>
             <div className="line-catagory"></div>
                <h3 className="p">{first_name + ' ' + last_name}</h3>
                <h6><strong>Email: </strong>{email}</h6>
               </div>
               <div className = 'row '>
                <div >
                    <Link to='/edit-profile'><button id="sign-in-button" className="btn">Edit Profile</button></Link>
                    </div>
            </div>

            <div id = "boxes"> 
            <div id = "leftbox"> 
                <h3>Children</h3>  
                        <Link to='/add-child'><button id="sign-in-button" className="btn">Add another Child</button></Link>
               
                <br></br>
                <br></br>
                    {props.currentUser.kids.map(kid => <div className="children-div"><Children kid={kid}/></div> )}
            </div>
              
            <div id = "middlebox"> 
                <h3>Favourite Courses</h3> 
                <div className="">
                {props.currentUser.courses.map(course => <CourseCollection course={course}/> )}
                </div>
            </div> 
              
          
        </div> 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps)(Profile);