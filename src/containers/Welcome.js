import React, { Component } from 'react';
import WelcomeNav from "./WelcomeNav"
import ScrollableAnchor from 'react-scrollable-anchor'
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TwitterShareButton,
    ViberShareButton,
    RedditShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    TumblrShareButton,
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    WhatsappIcon,
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

                <h4>Share Now</h4>
                
                <FacebookShareButton
                    url={shareUrl}
                    title="Facebook"
                    className="share-button">
                    <FacebookIcon
                    size={32}
                    round/>
                </FacebookShareButton>
                <TwitterShareButton
                    url={shareUrl}
                    title="Twitter"
                    className="share-button">
                    <TwitterIcon
                    size={32}
                    round/>
                </TwitterShareButton>
                <EmailShareButton
                    url={shareUrl}
                    title="Email"
                    className="share-button">
                    <EmailIcon
                    size={32}
                    round/>
                </EmailShareButton>
                <LinkedinShareButton
                    url={shareUrl}
                    title="Linkedin"
                    className="share-button">
                    <LinkedinIcon
                    size={32}
                    round/>
                </LinkedinShareButton>
                <PinterestShareButton
                    url={shareUrl}
                    title="Pinterest"
                    className="share-button">
                    <PinterestIcon
                    size={32}
                    round/>
                </PinterestShareButton>
                <RedditShareButton
                    url={shareUrl}
                    title="Reddit"
                    className="share-button">
                    <RedditIcon
                    size={32}
                    round/>
                </RedditShareButton>
                <WhatsappShareButton
                    url={shareUrl}
                    title="Whatsapp"
                    className="share-button">
                    <WhatsappIcon
                    size={32}
                    round/>
                </WhatsappShareButton>
                <InstapaperShareButton
                    url={shareUrl}
                    title="Instapaper"
                    className="share-button">
                    <InstapaperIcon
                    size={32}
                    round/>
                </InstapaperShareButton>


                <ViberShareButton
                    url={shareUrl}
                    title="Viber"
                    className="share-button">
                    <ViberIcon
                    size={32}
                    round/>
                </ViberShareButton>

                <TelegramShareButton
                    url={shareUrl}
                    title="Telegram"
                    className="share-button">
                    <TelegramIcon
                    size={32}
                    round/>
                </TelegramShareButton>

                <TumblrShareButton
                    url={shareUrl}
                    title="Tumblr"
                    className="share-button">
                    <TumblrIcon
                    size={32}
                    round/>
                </TumblrShareButton>
                
                </div>



            </div>
                
        );
    }
}

export default Welcome;
