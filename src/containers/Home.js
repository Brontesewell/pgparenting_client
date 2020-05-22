import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from "react-router-dom";
import Logo from '../Logo.jpg'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import ScrollableAnchor from 'react-scrollable-anchor'


class Home extends Component {


    
    render () {  
        console.log(this.props.currentUser)
        return (
            <div>
                <div className = 'row'>
                    {<Navbar/>}
                    
                </div>
                {/* <img id="about-home" src="https://images.unsplash.com/photo-1527358555642-1e21af4f39e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" /> */}
                <div>  
                  <img id="top-home-img" src="https://images.unsplash.com/photo-1449177009399-be6867ef0505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
                {/* <div id="quote-over-image"><h6 id="quote-home-image">We are all about “better parenting for a better world”</h6></div> */}
                <div id="quote-over-images"><h3 className="quote-home-image">Better Parenting for a Better World</h3><a  href='#section2' id="button-image-home">Learn More</a></div>
                </div>

                <div id="tip-home">
<h2 id="tip-title">PG Parenting Tip of the week</h2>

<div id="tip">
<div id="tip-left">
<img id="tip-photo" src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
</div>
<div id="tip-right">
    <h4 id="tip-head">Turn responsibilities into a game</h4>
    <h6 id="tip-cat">3-6 yrs old</h6>
    <p id="tip-p">If your child refuses to do something, try turning it into a game. "Humor and games are two great tools that parents sometimes forget about in the heat of the moment," says Zebooker. When her own son, now 13, was in preschool, she used to persuade him to put his shoes on in the morning by playing shoe store. "I would say, 'Welcome to Miss Mommy's Shoe Store, I've got the perfect pair for you to try on today,' and I'd speak in a silly accent and he loved it."</p>
</div>
</div>
</div>

<ScrollableAnchor id={'section2'}>
<div id="line-home"></div>
</ScrollableAnchor>
                 <h5 id="from-the-blog"><strong id="o">•</strong>From the Blog<strong id="o">•</strong></h5>
                    <div id="blog-home-div">
                    <div id="left-blog">
                    <img className="blog-images" src="https://images.unsplash.com/photo-1546015720-b8b30df5aa27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
                    <h5 className="blog-titles">Sleeping Babies</h5>
                    <h7>By <Link className="links-blog" to='/about-us'>Mark Sewell</Link></h7>
                    </div>
                    
                    
                    <div id="center-blog">
                    <img className="blog-images" src="https://images.unsplash.com/photo-1484665754804-74b091211472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                    <h5 className="blog-titles">Positive PG Parenting</h5>
                    <h7>By  <Link className="links-blog" to='/about-us'>Stephanie</Link> & <Link className="links-blog" to='/about-us'>Mark</Link></h7>
                    </div>
                   
                    <div id="right-blog">
                    <img className="blog-images" src=" https://images.unsplash.com/photo-1580377968131-bac075a9a3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                    <h5 className="blog-titles">Good habits & consistency</h5>
                    <h7>By <Link className="links-blog" to='/about-us'>Stephanie Sewell</Link></h7>
                    </div>

                    </div>
                    <div id="line-home-2">
                        <div id="title-about"><h1 id="about-home">About Us</h1></div>
                        
                        <div id="text-about"><h5 id="quote-about">We are all about “better parenting for a better world”</h5></div>
                        <div id="button-about"><Link to='/about-us'><button className="btn-about">Learn More <i class="arrow right"/> </button></Link></div>
                    </div>

                    
                    <ScrollUpButton/>
                <Footer/>
       
                    
                </div>
         
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        users: state.users
    }
}

export default connect(mapStateToProps, null)(Home);
