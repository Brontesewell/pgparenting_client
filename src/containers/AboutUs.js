import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'
import Parent from '../Parent.jpg'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Footer from './Footer'
import family from '../family.png'
import bronte from '../bronte.jpeg'
import riley from '../riley.jpeg'
import steph from '../steph.png'
import mark from '../mark.png'
import sierra from '../sierra.png'
class AboutUs extends Component {


    
    render () {  
        
        return (
            <div>
                
                    <Navbar />
                

                <div id="about-us-div">

                        <h6 id="about-names">ABOUT US</h6>
                    <div className="line-about"></div>
                        
                    <div id="about-us-inside-div">
                        

                    <div id="parents"><img className ='parents-photo' alt="parents" src={Parent}/>
                    <h2 id="quote-about-page">We are all about “better parenting for a better world”</h2>
                    <br></br> 
                    <a  href='/contact_us' id="button-image-about">Contact Us</a></div>
               
                 <div id="about-us-text">
                <h5 className="about-text-title">Mark and Stephanie Sewell</h5>
                <h6 className="about-text-co-founder"><i>Co-Founders and Parenting Professionals</i></h6>
               
                        
                        <p className="about-text">We are all about “better parenting for a better world”.  We are creating a unique online experience to help parents in the art of parenting. On that journey,
                         we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. On that journey, 
                         we wish to become a trusted source of parenting information and practical advice. <br></br><br></br>We are creating a unique online experience to help parents in the art of parenting. On that journey, 
                         we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. On that journey,
                          we wish to become a trusted source of parenting information and practical advice. <br></br><br></br>We are creating a unique online experience to help parents in the art of parenting. 
                        On that journey, we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. 
                        On that journey, we wish to become a trusted source of parenting information and practical advice.
                        On that journey, we wish to become a trusted source of parenting information and practical advice.</p>
                        {/* <p className="about-text">  We are creating a unique online experience to help parents in the art of parenting. On that journey, we wish to become a trusted source of parenting information and practical advice. </p> 
                        <p className="about-text"> “Success” to us means parents working together to grow and develop kids that are a blessing to themselves, their parents and their communities.</p> */}
                </div>
             
                    
                </div>
        <div className="family-about">
            <h5 className="family-name">About Our Family</h5>
            <img id="about-my-family" src={family} />
         
            <br></br>
            <br></br>
            <div class="about-family">
              <div class="column-text">
                <h4 className="about-sewells">Bronte Sewell</h4>
                <h6 className="about-sewells"><i>10/16/1998</i></h6>
                <p className="about-sewells-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    nt occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div class="column-image">
                <img id="image-about" src={bronte} />
              </div>
            </div>

            <div class="about-family">
              <div class="column-image">
                <img id="image-about" src={sierra} />
              </div>
              <div class="column-text">
                <h4 className="about-sewells">Sierra Sewell</h4>
                <h6 className="about-sewells"><i>06/06/1996</i></h6>
                <p className="about-sewells-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    nt occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>

            <div class="about-family">
              <div class="column-text">
                <h4 className="about-sewells">Riley Sewell</h4>
                <h6 className="about-sewells"><i>11/20/1994</i></h6>
                <p className="about-sewells-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    nt occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div class="column-image">
                <img id="image-about" src={riley} />
              </div>
            </div>

            <div class="about-family">
              <div class="column-image">
                <img id="image-about" src={steph} />
              </div>
              <div class="column-text">
                <h4 className="about-sewells">Stephanie Sewell</h4>
                <h6 className="about-sewells"><i>07/17/1964</i></h6>
                <p className="about-sewells-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    nt occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div><div class="about-family">
              <div class="column-text">
                <h4 className="about-sewells">Mark Sewell</h4>
                <h6 className="about-sewells"><i>11/01/62</i></h6>
                <p className="about-sewells-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    nt occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div class="column-image">
                <img id="image-about" src={mark} />
              </div>
            </div>

            <ScrollUpButton/>

                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}


export default AboutUs;
