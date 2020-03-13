import React, { Component } from 'react';
import WelcomeNav from "./WelcomeNav"

class Welcome extends Component {



    render() {
        return (
            <div>
                <div className="split left-side">
                    
                        <WelcomeNav />
                    
                       <div>
                        <img id="welcome-image" alt="welcome-image" src="https://images.unsplash.com/photo-1547948577-438c80482068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
                            <h2 className="tagline"><strong>Better Parenting for a Better World</strong></h2>
                            <a href="/signup-user"><button className="btnleft">Join Now</button></a>
                            <button className="btnright">Learn More</button>
                            </div>
                    </div>

                
                
            </div>
                
        );
    }
}

export default Welcome;

{/* <h4 className = 'pink-text'>Sign Up</h4>
<Link to='/signup-user'><button className='waves-effect waves-light btn-large pink accent-3'>
    Sign Up Now</button></Link>
</div>
</div>

<div className="split right-side">
<div className="centered">
<h4 className = 'pink-text'>Sign In</h4>
<Link to='/signin-user'><button className='waves-effect waves-light btn-large pink accent-3'>
    Sign In Now</button></Link> */}