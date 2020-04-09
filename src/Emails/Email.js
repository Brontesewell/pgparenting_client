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
               
        {this.props.users.map(c => <h3>{c.email}</h3>)}
     </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, null)(Email);
