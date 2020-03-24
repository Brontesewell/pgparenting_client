import React from 'react'
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import Children from './Children'
import CourseCollection from './CourseCollection'
import Footer from '../containers/Footer'

const Profile = (props) => {
console.log(props.currentUser.kids)
    const {first_name, last_name, email} = props.currentUser

    return (
        <div >
            <div className = 'row'>
               {<Navbar/>} 
            </div>
            <div id="profiles">
                <h1 id="my-family-title">My Family</h1>
                <div id="line-family"></div>
            <div className = "my-fam">
            <h1 id="my-profile">Profile</h1>
             <div className="line-profile"></div>
                <h3 className="p">{first_name + ' ' + last_name}</h3>
                <h6 id="email-p"><strong>Email: </strong>{email}</h6>
              
                <div >
                    <Link to='/edit-profile'><button id="edit-p" className="btn">Edit Profile</button></Link>
                    </div>
            </div>




            <div id = "boxes"> 
            <div id = "leftbox"> 
                <h3 id="my-children"> Children</h3>  
                <div className="line-child"></div>
                        <Link to='/add-child'><button id="edit-p" className="btn">Add another Child</button></Link>
               
                <br></br>
                <br></br>
                    {props.currentUser.kids.map(kid => <div className="children-div"><Children kid={kid}/></div> )}
            </div>
              
            <div id = "middlebox"> 
                <h3 id="my-children">Favourite Courses</h3> 
                <div className="line-favs"></div>
                <div className="">
                {props.currentUser.courses.map(course => <CourseCollection course={course}/> )}
                </div>
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