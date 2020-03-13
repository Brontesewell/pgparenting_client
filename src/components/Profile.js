import React from 'react'
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'

const Profile = (props) => {

    const {id, first_name, last_name, email} = props.currentUser

    return (
        <div>
            <div className = 'row'>
               {<Navbar/>} 
            </div>
            <div className = 'row'>
                <i className="material-icons large">account_circle</i>
                <h3 className="pink-text text-accent-3">{first_name + ' ' + last_name}</h3>
                <h6><strong>Email: </strong>{email}</h6>
               </div>
            
            <div className = 'row '>
                <div className = 'divider container'></div>
                <h4>Your Listings:</h4>
                <div className = 'divider container'></div>
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