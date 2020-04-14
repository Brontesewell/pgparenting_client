import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar';


class Email extends Component {

    render () {  
        
        return (
            <div>
                <div className = 'row'>
                    {<Navbar/>}
                </div>



               <h1>Subscribed Users:</h1>
               {this.props.currentUser.email === "123@gmail.com" ? this.props.users.map(c => c.subscribe === "true" ? <h3>{c.email}</h3> : null) : null}
        
     </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.users,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Email);