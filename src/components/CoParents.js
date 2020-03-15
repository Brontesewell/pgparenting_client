import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'

class CoParents extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <div className="split left-side">
                    
                       <div>
                        <h1>Co Parenting</h1>

                    </div>

                
                    </div>



            </div>
                
        );
    }
}

export default CoParents;

