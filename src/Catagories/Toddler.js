import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'

class Toddler extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <div className="split left-side">
                    
                       <div>
                        <h1>Toddler</h1>

                    </div>

                
                    </div>



            </div>
                
        );
    }
}

export default Toddler;

