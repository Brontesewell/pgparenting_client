import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'

class Home extends Component {


    
    render () {  
        
        return (
            <div>
                <div className = 'row'>
                    {<Navbar/>}
                </div>

                <div className="container row divider"></div>
                <div className ='container row'>
                    <h1>Hello!!!!!!!!</h1>
                </div>
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
