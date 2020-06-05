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
import {Col} from 'react-bootstrap'
import WelcomeNav from './WelcomeNav'
import idea from '../idea1.png'
import FadeIn from 'react-fade-in';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { SocialIcon } from 'react-social-icons';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import addContact from '../actions/addContact'

class Home extends Component {

    state = {
        email: this.props.currentUser.email,
        description: "",
        f_name: this.props.currentUser.first_name,
        l_name: this.props.currentUser.last_name,
        user_id: this.props.currentUser.id
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    render () {  
        console.log(this.props.currentUser)
        const {email, description,  user_id} = this.state
        const {history} = this.props
        return (
            <div>
                
                    <Navbar/>
                    
               
                {/* <img id="about-home" src="https://images.unsplash.com/photo-1527358555642-1e21af4f39e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" /> */}
                <div>  
                  <img id="top-home-img" src="https://images.unsplash.com/photo-1449177009399-be6867ef0505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
                
                  <FadeIn>  <div id="quote-over-images"><h3 className="quote-home-image"><img id="light-bulb" src={idea} /> Tip of the Week </h3>
                <h3 className="quote-home-text">If your child refuses to do something, try turning it into a game. 
                "Humor and games are two great tools that parents sometimes forget about in the heat of the moment," says Zebooker.</h3>
                {/* <a  href='#section2' id="button-image-home">Learn More</a> */}
                </div> 
                </FadeIn>
                </div>


                    <ScrollableAnchor id={'section2'}>
                        <h4 id="from-the-blog"><strong id="o">•</strong>From the Blog<strong id="o">•</strong></h4>
                    </ScrollableAnchor>
                    
                     
                    <div class="container">
                    <div class="row">
                        <div class="col-md">
                    <Fade left>
                        <div className="course-card-welcome" onClick={()=> this.props.history.push('/baby')}>
                            <img className="blog-images" src="https://images.unsplash.com/photo-1546015720-b8b30df5aa27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
                            </div>
                            <h5 className="blog-titles" onClick={()=> this.props.history.push('/baby')}>Sleeping Babies</h5>
                            <h6 className="blogs-name">By <Link className="links-blog" to='/about-us'>Mark Sewell</Link></h6>
                            </Fade>
                        </div>
                        <div class="col-md">
                        <Fade>
                        <div className="course-card-welcome" onClick={()=> this.props.history.push('/toddler')}>
                            <img className="blog-images" src="https://images.unsplash.com/photo-1484665754804-74b091211472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                            </div>
                            <h5 className="blog-titles" onClick={()=> this.props.history.push('/toddler')}>Positive PG Parenting</h5>
                            <h6 className="blogs-name">By  <Link className="links-blog" to='/about-us'>Stephanie</Link> & <Link className="links-blog" to='/about-us'>Mark</Link></h6>
                            </Fade>
                        </div>
                            <div class="col-md">
                            <Fade right>
                            <div className="course-card-welcome" onClick={()=> this.props.history.push('/teen')}>
                            <img className="blog-images" src=" https://images.unsplash.com/photo-1580377968131-bac075a9a3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                            </div>
                            <h5 className="blog-titles" onClick={()=> this.props.history.push('/teen')}>Good habits & consistency</h5>
                            <h6 className="blogs-name">By <Link className="links-blog" to='/about-us'>Stephanie Sewell</Link></h6>
                            </Fade>
                        </div>
                    </div>
                </div>
                
      
                
            
                <div class="container">
                    <div class="row">
                        <Col lg={3}>
                        <Fade>
                             <i className="far fa-calendar-check appt"></i>
                        </Fade>
                        </Col>
                        <Col lg={9}>
                        <Fade>
                            <h1 className="book-title"> Are you struggling with Parenting and want 1:1 Mentorship?</h1>
                            <h4 className="book-text">For only $30 you can have a 45 minute session!</h4>
                            </Fade>
                            <a href="https://calendar.google.com/calendar/r" class="btn-book">Book Now!</a>
                        </Col>
                    </div>
                </div>
                 <br></br>
                    
              

                 <Fade bottom>
                    <div id="line-home-2">
                        <div id="title-about"><h1 id="about-home">About Us</h1></div>
                        
                        <div id="text-about"><h5 id="quote-about">We are all about “better parenting for a better world”</h5></div>
                        <div id="button-about"><Link to='/about-us'><button className="btn-about">Learn More <i class="arrow right"/> </button></Link></div>
                    </div>
                    </Fade>
                    <br></br>
                    <br></br>
                    
                    <div>
                    <h4 id="from-the-blog"><strong id="o">•</strong>Top items this week<strong id="o">•</strong></h4>
                   
                        <div class="container">
                    <div class="row">
                        <div class="col-md" onClick={()=> window.location.href='https://www.amazon.com/Made-Me-Horizon-Suncatchers-Assorted/dp/B00HUBBDIK/ref=sr_1_5?dchild=1&keywords=crafts&qid=1591311585&sr=8-5'}>
                        <Fade>
                        <div className="course-card-welcome" >
                            <img className="shop-items-week" src="https://m.media-amazon.com/images/I/91h01JGKRUL._AC_UL640_FMwebp_QL65_.jpg" />
                            </div>
                            <h4 className="home-shop-title">Window Art with multiple colors</h4>
                            <h5 className="home-shop-text">$10.97</h5>
                            </Fade>
                            <a href="https://www.amazon.com/Made-Me-Horizon-Suncatchers-Assorted/dp/B00HUBBDIK/ref=sr_1_5?dchild=1&keywords=crafts&qid=1591311585&sr=8-5" class="btn-buy">Buy</a>
                        </div>
                    <div class="col-md" onClick={()=> window.location.href='https://www.amazon.com/Infantino-Flip-4-Convertible-Carrier/dp/B07XMN3SK6/ref=sxin_7_ac_d_rm?ac_md=3-2-YmFieSBjYXJyaWVy-ac_d_rm&cv_ct_cx=baby&dchild=1&keywords=baby&pd_rd_i=B07XMN3SK6&pd_rd_r=589482fd-8dca-46d0-9339-98c082a65763&pd_rd_w=3CUB0&pd_rd_wg=KDqbz&pf_rd_p=a0516f22-66df-4efd-8b9a-279a864d1512&pf_rd_r=NY4PEH7EX1K5Z0YENGDX&psc=1&qid=1591311089&sr=1-3-12d4272d-8adb-4121-8624-135149aa9081'}>
                    <Fade>
                    <div className="course-card-welcome" >
                             <img className="shop-items-week" src="https://images-na.ssl-images-amazon.com/images/I/91KdsKe21SL._SX679_.jpg" />
                             </div>
                             <h4 className="home-shop-title">Infant 4-in-1 Convertible Carrier</h4>
                            <h5 className="home-shop-text">$29.99</h5>
                            </Fade>
                            <a href="https://www.amazon.com/Infantino-Flip-4-Convertible-Carrier/dp/B07XMN3SK6/ref=sxin_7_ac_d_rm?ac_md=3-2-YmFieSBjYXJyaWVy-ac_d_rm&cv_ct_cx=baby&dchild=1&keywords=baby&pd_rd_i=B07XMN3SK6&pd_rd_r=589482fd-8dca-46d0-9339-98c082a65763&pd_rd_w=3CUB0&pd_rd_wg=KDqbz&pf_rd_p=a0516f22-66df-4efd-8b9a-279a864d1512&pf_rd_r=NY4PEH7EX1K5Z0YENGDX&psc=1&qid=1591311089&sr=1-3-12d4272d-8adb-4121-8624-135149aa9081" class="btn-buy">Buy</a>
                        </div>
                        <div class="col-md" onClick={()=> window.location.href='https://www.amazon.com/School-Zone-Preschool-Pre-Writing-Pre-Reading/dp/0887431453/ref=sr_1_1?dchild=1&keywords=School+Zone+-+Big+Preschool+Workbook+-+Ages+4+and+Up%2C+Colors%2C+Shapes%2C+Numbers+1-10%2C+Alphabet%2C+Pre-Writing%2C+Pre-Reading%2C+Phonics%2C+and+More+%28School+Zone+Big+Workbook+Series%29&qid=1591312156&sr=8-1'}>
                        <Fade>
                        <div className="course-card-welcome" >
                            <img className="shop-items-week" src="https://m.media-amazon.com/images/I/81HCcHPXZnL._AC_UY436_FMwebp_QL65_.jpg"/>
                            </div>
                            <h4 className="home-shop-title">The 7 Habits of Highly Effective Teens</h4>
                            <h5 className="home-shop-text">$1.18</h5>
                            </Fade>
                            <a href="https://www.amazon.com/School-Zone-Preschool-Pre-Writing-Pre-Reading/dp/0887431453/ref=sr_1_1?dchild=1&keywords=School+Zone+-+Big+Preschool+Workbook+-+Ages+4+and+Up%2C+Colors%2C+Shapes%2C+Numbers+1-10%2C+Alphabet%2C+Pre-Writing%2C+Pre-Reading%2C+Phonics%2C+and+More+%28School+Zone+Big+Workbook+Series%29&qid=1591312156&sr=8-1" class="btn-buy">Buy</a>
                         </div>
                        <div class="col-md" onClick={()=> window.location.href='https://www.amazon.com/Habits-Highly-Effective-Teens/dp/1476764662/ref=sr_1_2?dchild=1&keywords=The+7+Habits+of+Highly+Effective+Teens&qid=1591312133&sr=8-2'}>
                        <Fade>
                        <div className="course-card-welcome" >
                            <img className="shop-items-week" src="https://m.media-amazon.com/images/I/91tO0NfkvcL._AC_UY436_FMwebp_QL65_.jpg"/>
                            </div>
                            <h4 className="home-shop-title">Big Preschool Workbook - Ages 4</h4>
                            <h5 className="home-shop-text">$6.99</h5>
                            </Fade>
                            <a href="https://www.amazon.com/Habits-Highly-Effective-Teens/dp/1476764662/ref=sr_1_2?dchild=1&keywords=The+7+Habits+of+Highly+Effective+Teens&qid=1591312133&sr=8-2" class="btn-buy">Buy</a>
                        </div>
                    </div>
                </div>
                <br></br>
                        <a href="/shop" class="btn-shops">View More  →</a>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <Fade>
                    <h3 className="quote-img-text">“Encourage and support your kids because children are apt to live up to what you believe of them.” - PG Parenting</h3>
                        <span><SocialIcon className="share-button" url="https://www.instagram.com/pgparenting/" style={{ height: 35, width: 35 }}/>
                            <SocialIcon className="share-button" url="https://www.facebook.com" style={{ height: 35, width: 35 }}/>
                            <SocialIcon className="share-button" url="https://www.youtube.com" style={{ height: 35, width: 35 }}/> </span>
                            
                    </Fade>
                </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>


                    <div id="buttons-direct">
                    <a href="#" class="btn-direct">My Family</a>
                    <a href="#" class="btn-direct">Contact Us</a>
                    <a href="#" class="btn-direct">Shop</a>
                    <a href="#" class="btn-direct">Book a Appointment</a>
                    <a href="#" class="btn-direct">Young Adults</a>
                    <a href="#" class="btn-direct">Babies</a>
                    <a href="#" class="btn-direct">Teens</a>
                    <a href="#" class="btn-direct">Primary School</a>
                    <a href="#" class="btn-direct">Childrens Growth System</a>
                    <a href="#" class="btn-direct">Preteens</a>
                    <a href="#" class="btn-direct">Toddler</a>
                    <a href="#" class="btn-direct">About Us</a>
                    <a href="#" class="btn-direct">Co-Parenting</a>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
           
                    <div class="contact-home-div">
                  <Fade>
                    
                                <h1 id="contact-home">Contact Us</h1>
                                <br></br>
                                <h5 className="contact-option">Email: support@pgparenting.com</h5>
                                <h5 className="contact-option">Phone: +1 828 6366</h5>
                                <h5 className="contact-option">Location: San Francisco, California</h5>
                                <br></br>
                                <br></br>
                                <span id="email-home-contact" for="lname">Email is being sent from: <strong>{email}</strong></span>
                                <br></br>
                                <br></br>
                                <form onSubmit={(e) => this.props.addContact(e, this.state, history)}>
                                    <label htmlFor="description" className="grey-text">Description</label>
                                    <textarea name="description" value={description} onChange={this.handleChange} placeholder="Write something.." />
                                    <button id="btn-add-contact" className="btn" type="submit" >Send</button>
                                </form>

                    </Fade>
                    </div>
                   

                    <ScrollUpButton/>

                    <div id="line-home"></div>
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

const mapsToDispatchProps = dispatch => {
    return {
        addContact: (e, history, state) => dispatch(addContact(e, history, state)),
    }
}

export default connect(mapStateToProps, mapsToDispatchProps)(Home);
