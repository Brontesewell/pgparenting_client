import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'
import Parent from '../Parent2.jpeg'


class AboutUs extends Component {


    
    render () {  
        
        return (
            <div>
                <div className = 'row'>
                    <Navbar />
                </div>

                <div id="about-us-div">

                        <h6 id="about-names">ABOUT US</h6>
                    <div className="line-about"></div>
                        
                    <div id="about-us-inside-div">
                        

                    <div id="parents"><img className ='parents-photo' alt="parents" src={Parent}/>
                    <h2 id="quote-about">We are all about “better parenting for a better world”</h2>
                    <br></br> <br></br>
                    <a  href='/contact_us' id="button-image-about">Contact Us</a></div>
                 <div id="about-us-text">
                <h5 className="about-text-title">Mark and Stephanie Sewell</h5>
                <h6 className="about-text-co-founder"><i>Co-Founders and Parenting Professionals</i></h6>

                        
                        <p className="about-text">We are all about “better parenting for a better world”.  We are creating a unique online experience to help parents in the art of parenting. On that journey,
                         we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. On that journey, 
                         we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. On that journey, 
                         we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. On that journey,
                          we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. 
                        On that journey, we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. 
                        On that journey, we wish to become a trusted source of parenting information and practical advice.
                        On that journey, we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. 
                        On that journey, we wish to become a trusted source of parenting information and practical advice.</p>
                        {/* <p className="about-text">  We are creating a unique online experience to help parents in the art of parenting. On that journey, we wish to become a trusted source of parenting information and practical advice. </p> 
                        <p className="about-text"> “Success” to us means parents working together to grow and develop kids that are a blessing to themselves, their parents and their communities.</p> */}
                </div>
                <br></br>
                    </div>
                <h1 id="family-name">Our Family</h1>
                <div class="about-family">
                            <div class="column-about"><h5>Bronte</h5>
                            <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                            <p>akjhds askjdk jasksadj aksjhd kasdjh kasjdh ir uweoiaslkdjaslkdj alskdj laksdj alskdj alsdj   laskjdl asdlkj ldkasjd   zmzxcnweoir</p>
                            </div>
                           
                            <div class="column-about"><h5>Riley</h5>
                            <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                                <p>akjhds askjdk jasksadj aksjhd kasdjh kasjdh ir uweoiaslkdjaslkdj alskdj laksdj alskdj alsdj   laskjdl asdlkj ldkasjd   zmzxcnweoir</p>
                            </div>
                            
                            <div class="column-about"><h5>Sierra</h5>
                            <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                                <p>akjhds askjdk jasksadj aksjhd kasdjh kasjdh ir uweoiaslkdjaslkdj alskdj laksdj alskdj alsdj   laskjdl asdlkj ldkasjd   zmzxcnweoir</p>
                            </div>
                            
                            <div class="column-about"><h5>Mark</h5>
                            <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                                <p>akjhds askjdk jasksadj aksjhd kasdjh kasjdh ir uweoiaslkdjaslkdj alskdj laksdj alskdj alsdj   laskjdl asdlkj ldkasjd   zmzxcnweoir</p>
                            </div>
                           
                            <div class="column-about"><h5>Stephanie</h5>
                            <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                                <p>akjhds askjdk jasksadj aksjhd kasdjh kasjdh ir uweoiaslkdjaslkdj alskdj laksdj alskdj alsdj   laskjdl asdlkj ldkasjd   zmzxcnweoir</p>
                            </div>
                </div>
            </div>
        </div>
        )
    }
}


export default AboutUs;
