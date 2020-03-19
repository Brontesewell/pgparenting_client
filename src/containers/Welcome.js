import React, { Component } from 'react';
import WelcomeNav from "./WelcomeNav"
import { Link } from "react-router-dom";
import ScrollableAnchor from 'react-scrollable-anchor'

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
                            <a href='#section1'> <button className="btnright" >Learn More</button> </a>
                            </div>
                    </div>
                
               
                <ScrollableAnchor id={'section1'}>
                    <div>
                    
                    <h3 id="membership-title">With you every step of the way</h3>
                    <div id="left-membership">
                        <h4 id="left-membership-head">Explore all the benefits that are included when you sign-up:</h4>
                        <h4 className="h5-left-membership">Exlusive access to parenting courses</h4>
                        <h4 className="h5-left-membership">Unlimited access to parenting guides and articles</h4>
                        <h4 className="h5-left-membership">Expert and doctor opinion</h4>
                        <h4 className="h5-left-membership">Private online community chatroom</h4>
                    </div>
                   
                    <div id="right-membership">
                        <img src="https://images.unsplash.com/photo-1576104852640-c5036ecb7065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    </div>
                </div>
                </ScrollableAnchor>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div>
            <div id="bottom-div-welcome">
                <div  id="right-welcome-bottom" class="box sb3"><h5 id="right-top-text">My subscription to PG introduced me to a support system that has helped me to become a better role model for my kid.</h5><h5 id="right-bottom-text">- Taylor, Auston TX</h5></div>
                <a href="/signup-user"><button className="btn-welcome-bottom">Join PG Parenting</button></a>

            <div id="left-welcome-bottom">
                        <img src="https://images.unsplash.com/photo-1482235225574-c37692835cf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
                    </div>
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