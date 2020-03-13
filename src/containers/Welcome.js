import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SignIn from '../containers/SignIn'

class Welcome extends Component {



    render() {
        return (
            <div>
                <div className="split left-side">
                    <div className="centered">
                        <h1 className = "teal-text text-darken-1"><strong>
                            Share More, Waste Less</strong></h1>
                        <h6>We connect neighbours to share food, and other things, rather than chuck them away. </h6>
                        <h4 className = 'pink-text'>It’s fast, free, and friendly</h4>
                        <Link to='/signup-user'><button className='waves-effect waves-light btn-large pink accent-3'>
                            Sign Up Now</button></Link>
                    </div>
                </div>

                <div className="split right-side">
                    <div className="centered">
                        {<SignIn history={this.props.history}/>}
                    </div>
                </div>
                
            </div>
                
        );
    }
}

export default Welcome;

