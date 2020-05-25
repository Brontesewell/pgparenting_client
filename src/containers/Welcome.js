import React, { Component } from 'react';
import WelcomeNav from "./WelcomeNav"
import ScrollableAnchor from 'react-scrollable-anchor'
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
  } from "react-share";
  import {
    FacebookShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount,
  } from "react-share";

  import {
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
  } from "react-share";


class Welcome extends Component {



    render() {
        const shareUrl = `https://www.example.com${this.props.location.pathname}`;
        return (
            <div>
                <div className="split left-side">
                    
                        <WelcomeNav />
                    
                       <div>
                            <img id="welcome-image" alt="welcome-image" src="https://images.unsplash.com/photo-1547948577-438c80482068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
                            <h2 className="tagline"><strong>Better Parenting for a Better World</strong></h2>
                            <a href="/signup-user"><button className="btnleft">Join Now</button></a>
                            <a href='#section1'> <button className="btnright" >Learn More</button> </a>

                            <h5 className="tagline-small"><strong>Better Parenting for a Better World</strong></h5>
                            <a href="/signup-user"><button className="btnleft-small">Join Now</button></a>
                            <a href='#section1'> <button className="btnright-small" >Learn More</button> </a>
                        </div>
                    </div>
        
                
                <ScrollableAnchor id={'section1'}>
                <div class="container">
                        <h3 id="membership-title">With you every step of the way</h3>
                    <div class="row">
                        <div class="col-lg">
                        <h4 id="left-membership-head">Explore all the benefits that are included when you sign-up:</h4>
                        <h4 className="h5-left-membership">Exlusive access to parenting courses</h4>
                        <h4 className="h5-left-membership">Unlimited access to parenting guides and articles</h4>
                        <h4 className="h5-left-membership">Expert and doctor opinion</h4>
                        <h4 className="h5-left-membership">Private online community chatroom</h4>
                        </div>
                        <div class="col-lg">
                            <img src="https://images.unsplash.com/photo-1576104852640-c5036ecb7065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                        </div>
                    </div>
                </div>
                </ScrollableAnchor>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <div id="bottom-div-welcome">
                        <div id="right-welcome-bottom" className="box sb3"><h5 id="right-top-text">My subscription to PG introduced me to a support system that has helped me to become a better role model for my kid.</h5><h5 id="right-bottom-text">- Taylor, Auston TX</h5></div>
                        <a href="/signup-user"><button className="btn-welcome-bottom">Join PG Parenting</button></a>
                        
                    <div id="left-welcome-bottom">
                        <img className="welcome-bottom-image" src="https://images.unsplash.com/photo-1482235225574-c37692835cf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
                    </div>
                </div>
                    <div id="bottom-div-welcome-small">
                        <div id="right-welcome-bottom-small" className="box-small sb3-small"><h5 id="right-top-text-small">My subscription to PG introduced me to a support system that has helped me to become a better role model for my kid.</h5><h5 id="right-bottom-text">- Taylor, Auston TX</h5></div>
                        <img className="welcome-bottom-image-small" src="https://images.unsplash.com/photo-1482235225574-c37692835cf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
                        <a href="/signup-user"><button className="btn-welcome-bottom-small">Join PG Parenting</button></a>
                </div>
                
                <FacebookShareButton
        url={shareUrl}
        title="Twitter"
        className="Demo__some-network__share-button">
        <FacebookIcon
          size={32}
          round />
      </FacebookShareButton>
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