import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from '../Navbar';
import SideNav, {MenuIcon} from 'react-simple-sidenav';


class Email extends Component {
state={
    showNav4: false,
}
    render () {  
        return (
            <div>
                
                    <Navbar/>
                
                    <div class="container">
                    <h1>Admin Info:</h1>
                    <div class="row">
                        <div class="col-lg">
                        <h1>Subscribed Users:</h1>
                        {this.props.currentUser.email === "123@gmail.com" ? this.props.users.map(c => c.subscribe === "true" ? <h3>{c.email}</h3> : null) : null}
                        </div>
                        <div class="col-lg">
                            <h1>Contact Forms:</h1>
        {this.props.currentUser.email === "123@gmail.com" ? this.props.users.map(c => c.contacts.map(i => <div className="admin-contact-div"><h3>{i.email}</h3><h5 style={{textAlign: 'justify', padding: 15}}>{i.description}</h5></div>)): null}

                        </div>
                    </div>
                </div>
                

              
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
