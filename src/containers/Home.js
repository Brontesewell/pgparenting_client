import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'

import Dropdown, { DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

class Home extends Component {


    
    render () {  
        
        return (
            <div>
                <div className = 'row'>
                    {<Navbar/>}
                    
                </div>
             <h1>Home</h1>
                    
                </div>
         
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps, null)(Home);
