
import {connect} from 'react-redux'
import React, { Component } from 'react';
import Logo from '../Logo.jpg'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import editProfile from '../actions/editProfile'
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
 
    state = {
        subscribe: this.props.currentUser.subscribe,
    }



    handleChange = (e) => {
        // const {name, value} = e.target
        this.setState({
            subscribe: "true"
        })
    } 


    render() {
        console.log(this.props.editProfile)
        const {subscribe} = this.state
        const {editProfile, history, currentUser} = this.props
        console.log(currentUser.subscribe)
        return (
            <div id="footer">
<footer class="footer-distributed">

<div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <a href="/home"><img className ='logo-footer' alt="Logo" src={Logo}/></a>
                                <p class="footer-links">
                                    <a href="#" class="link-1">Home</a>
                                    
                                    <a href="#">Blog</a>
                                
                                    <a href="#">About</a>
                                    
                                    <a href="#">Contact</a>
                                </p>
                        
                                <p id="year-footer">PG Parenting © 2020</p>
                        
                        
                    
                        </div>
                        <div class="col-lg">
                                 

                            <h5 id="contact-footer">Connect with us</h5>
                            <SocialIcon className="share-button" url="https://www.instagram.com/pgparenting/" style={{ height: 35, width: 35 }}/>
                            <SocialIcon className="share-button" url="https://www.facebook.com" style={{ height: 35, width: 35 }}/>
                            <SocialIcon className="share-button" url="https://www.youtube.com" style={{ height: 35, width: 35 }}/>
                            <p id="email-icon-footer-welcome"><FontAwesomeIcon icon={faEnvelope} id="email-footer" /> pgparenting@gmail.com</p>
        
                        </div>
                        <div class="col-lg">
                                 
                                <h5 id="newsletter-title">Sign up for <strong id="newsletter-logo">PG Parenting</strong> newsletter</h5>
                                            
                                                <form className = 'col s12' onSubmit={(e)=> editProfile(e, history, this.state, currentUser.id)}>
                                                    <div >
                                                    
                                                    {currentUser.subscribe === "true" ? <button class="btn-newsletter-clicked" disabled>Subscribed ✓</button> :  
                                                        <div>
                                                                <label>
                                                                <input type="checkbox" name="subscribe" class="filled-in" onChange={this.handleChange} value="true" checked={subscribe === 'true'}/>
                                                                <span id="subscribe-name"> {currentUser.email}</span>
                                                                </label>
                                                                <p id="subscribe-text-info">If you don't want to use this email we suggest you change your email in <a href='/profile'>profile settings</a> or <a href='/contact_us'>contact us</a> and we can add you to the newletters.</p>
                                                              
                                                            
                                                                
                                                                <button className="btn-newsletter" type="submit">Confirm</button>
                                                                
                                                        </div>}

                                                </div>
                                            </form>
                                        

                        </div>
                    </div>
                </div>

    
    

</footer>
</div>
        );
    }

}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapsToDispatchProps = dispatch => {
    return {
        editProfile: (e, history, state, id) => dispatch(editProfile(e, history, state, id)),
    }
}

export default connect(mapStateToProps, mapsToDispatchProps)(Footer);





    


//         return (
//             <div>
//                <div id="newsletter">
//                     <h6 id="newsletter-title">Sign up for <strong id="newsletter-logo">PG Parenting</strong> newsletter</h6>
//                         <div class="row" id="newsletter-div">
//                               <form className = 'col s12' onSubmit={(e)=> editProfile(e, history, this.state, currentUser.id)}>
//                                   <div class="row">
                             




//                                    <div class="row">
                                 
//                                  </div> 
//                                 {currentUser.subscribe === "true" ? <button class="btn-newsletter-clicked" disabled>Subscribed ✓</button> :  <div>
                        
//                         <label>
//                         <input type="checkbox" name="subscribe" class="filled-in" onChange={this.handleChange} value="true" checked={subscribe === 'true'}/>
//                          <span>{currentUser.email}</span>
//                         </label>
//                         <br></br>
//                         <br></br>
//                         <br></br>
//                         <button className="btn-newsletter" type="submit">Confirm</button>
//                         </div>}
//                           </div>
//                         </form>
//                     </div>
//                     </div>
//       </div>
//         )
//     }
// }




  
 
  

