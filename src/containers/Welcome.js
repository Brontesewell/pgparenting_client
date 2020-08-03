import React, { Component } from 'react';
import {connect} from 'react-redux'
import WelcomeNav from "./WelcomeNav"
import ScrollableAnchor from 'react-scrollable-anchor'
import Logo from '../Logo.jpg'
import WorldMap from '../World-Map-PNG-Picture.png'

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
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from 'react-social-icons';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';


class Welcome extends Component {



    render() {
        console.log(this.props.currentUser)
        const shareUrl = `https://www.pgparenting.com${this.props.location.pathname}`;
        return (
            <div>
                <div className="split left-side">
                    
                        <WelcomeNav />
                    
                       <div>
                            <img id="welcome-image" alt="welcome-image" src="https://images.unsplash.com/photo-1547948577-438c80482068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
                            <h2 className="tagline"><strong>Better Parenting for a Better World</strong></h2>
                            <a href="/signup-user"><button className="btnleft">Join Now</button></a>
                            <a href='#section1'> <button className="btnright" >Learn More</button> </a>

                            <h5 className="tagline-small">Better Parenting for a Better World</h5>
                            <a href="/signup-user"><button className="btnleft-small">Join Now</button></a>
                            <a href='#section1'> <button className="btnright-small" >Learn More</button> </a>
                        </div>
                    </div>
                <div className="membership-div">
        
                <ScrollableAnchor id={'section1'}>
                <div class="container">
                    <Fade>
                        <h3 id="membership-title">With you every step of the way</h3>
                    </Fade>
                    <div class="row">
                        <div class="col-lg">
                        <Fade>
                        <h4 id="left-membership-head">Explore all the benefits that are included when you sign-up:</h4>
                        <h4 className="h5-left-membership">Exlusive access to parenting courses</h4>
                        <h4 className="h5-left-membership">Unlimited access to parenting guides and articles</h4>
                        <h4 className="h5-left-membership">Expert and doctor opinion</h4>
                        <h4 className="h5-left-membership">Private online community chatroom</h4>
                        <h4 className="h5-left-membership">Childrens growth and success tracker</h4>
                        </Fade>
                        </div>
                        <div class="col-lg">
                        <Fade>
                            <img id="image-membership" src="https://images.unsplash.com/photo-1576104852640-c5036ecb7065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                            </Fade>                       
                        </div>
                    </div>
                </div>
                </ScrollableAnchor>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </div>
                <div>
                        <Fade>
                    <div id="bottom-div-welcome">
                        <div id="right-welcome-bottom" className="box sb3"><h5 id="right-top-text">My subscription to PG introduced me to a support system that has helped me to become a better role model for my kid.</h5><h5 id="right-bottom-text">- Taylor, Auston TX</h5></div>
                        <a href="/signup-user"><button className="btn-welcome-bottom">Join PG Parenting</button></a>
                        
                    <div id="left-welcome-bottom">
                        <img className="welcome-bottom-image" src="https://images.unsplash.com/photo-1482235225574-c37692835cf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
                    </div>
                </div>
                        </Fade>
                        <Fade>
                    <div id="bottom-div-welcome-small">
                        <div id="right-welcome-bottom-small" className="box-small sb3-small"><h5 id="right-top-text-small">My subscription to PG introduced me to a support system that has helped me to become a better role model for my kid.</h5><h5 id="right-bottom-text">- Taylor, Auston TX</h5></div>
                        <img className="welcome-bottom-image-small" src="https://images.unsplash.com/photo-1482235225574-c37692835cf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
                        <a href="/signup-user"><button className="btn-welcome-bottom-small">Join PG Parenting</button></a>
                </div>
                </Fade>
                
                </div>
                 <div id="share-div">
                 <div class="container">
                    <div class="row">
                        <div class="col-lg">
                        <Fade>
                        <h4 id="world-map-text">Led Parenting courses Worldwide with proven Curriculum</h4>
                        </Fade>
                        </div>
                        <div class="col-lg">
                        <Fade>
                                 <img id="world-map" src={WorldMap}/>
                                 </Fade>
                        </div>
                    </div>
                </div>
                
                 <h4 id="share-now">Share Now</h4>
                
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

                <div className="courses-welcome-divs">
                <div className="courses-welcome">
                    <div class="container">
                    <Fade>
                        <h4 id="courses-title-welcome">Popular Avaliable Courses</h4>
                        </Fade>
                        <div class="row">
                            <div onClick={() => this.props.history.push('/signup-user')} class="col-md">
                            <Fade>
                                <div className="course-card-welcome">
                                <img className="image-course-welcome" src="https://images.unsplash.com/photo-1576104852640-c5036ecb7065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                <span className="course-welcome-image-overlay">
                                    <span className="span-course-welcome">When should my child switch from two naps to one?</span>
                                    <div className="course-welcome-div"></div>
                                    <span className="span-course-catagory">SLEEP</span>
                                </span>
                                </div>
                                </Fade>
                            </div>
                            <div onClick={() => this.props.history.push('/signup-user')} class="col-md">
                            <Fade>
                                <div className="course-card-welcome">
                                <img className="image-course-welcome" src="https://images.unsplash.com/photo-1544285703-276682d3196b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                                <span className="course-welcome-image-overlay">
                                    <span className="span-course-welcome">When should my child switch from two naps to one?</span>
                                    <div className="course-welcome-div"></div>
                                    <span className="span-course-catagory">SLEEP</span>
                                </span>
                                </div>
                                </Fade>
                            </div>
                            <div onClick={() => this.props.history.push('/signup-user')} class="col-md">
                            <Fade>
                             <div className="course-card-welcome">
                                <img className="image-course-welcome" src="https://images.unsplash.com/photo-1523151401668-fff9e38a48e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                                <span className="course-welcome-image-overlay">
                                    <span className="span-course-welcome">When should my child switch from two naps to one?</span>
                                    <div className="course-welcome-div"></div>
                                    <span className="span-course-catagory">SLEEP</span>
                                </span>
                             </div>
                             </Fade>
                            </div>
                        </div>
                        <div class="row">
                            <div onClick={() => this.props.history.push('/signup-user')} class="col-md">
                            <Fade>
                            <div className="course-card-welcome">
                                <img className="image-course-welcome" src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                                <span className="course-welcome-image-overlay">
                                    <span className="span-course-welcome">When should my child switch from two naps to one?</span>
                                    <div className="course-welcome-div"></div>
                                    <span className="span-course-catagory">SLEEP</span>
                                </span>
                                </div>
                                </Fade>
                            </div>
                            <div onClick={() => this.props.history.push('/signup-user')} class="col-md">
                            <Fade>
                            <div className="course-card-welcome">
                                <img className="image-course-welcome" src="https://images.unsplash.com/photo-1472220625704-91e1462799b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                                <span className="course-welcome-image-overlay">
                                    <span className="span-course-welcome">When should my child switch from two naps to one?</span>
                                    <div className="course-welcome-div"></div>
                                    <span className="span-course-catagory">SLEEP</span>
                                </span>
                                </div>
                                </Fade>
                            </div>
                            <div onClick={() => this.props.history.push('/signup-user')} class="col-md">
                            <Fade>
                            <div className="course-card-welcome">
                                <img className="image-course-welcome" src="https://images.unsplash.com/photo-1513807016779-d51c0c026263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                                <span className="course-welcome-image-overlay">
                                    <span className="span-course-welcome">When should my child switch from two naps to one?</span>
                                    <div className="course-welcome-div"></div>
                                    <span className="span-course-catagory">SLEEP</span>
                                </span>
                                </div>
                                </Fade>
                            </div>
                        </div>


                <div id="welcome-footer">
                        <h5 id="footer-title">Connect with us</h5>
                        <SocialIcon className="share-button" url="https://www.instagram.com/pgparenting/" style={{ height: 35, width: 35 }}/>
                        <SocialIcon className="share-button" url="https://www.facebook.com" style={{ height: 35, width: 35 }}/>
                        <SocialIcon className="share-button" url="https://www.youtube.com" style={{ height: 35, width: 35 }}/>
                         <p id="email-icon-footer-welcome"><FontAwesomeIcon icon={faEnvelope} id="email-footer" /> pgparenting@gmail.com</p>
                </div>
                </div>
                </div>
                    </div>

            </div>
                
        );
    }
}



const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps)(Welcome);
// export default Welcome;
