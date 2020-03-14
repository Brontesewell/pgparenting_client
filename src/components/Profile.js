import React from 'react'
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'

const Profile = (props) => {

    const {first_name, last_name, email} = props.currentUser

    return (
        <div>
            <div className = 'row'>
               {<Navbar/>} 
            </div>
            <div className = 'row'>
                <i className="material-icons large">Profile</i>
                <h3 className="pink-text text-accent-3">{first_name + ' ' + last_name}</h3>
                <h6><strong>Email: </strong>{email}</h6>
               </div>
               <div className = 'row '>
                <div >
                    <Link to='/edit-profile'><button className = 'waves-effect waves-light btn'>Edit Profile</button></Link>
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