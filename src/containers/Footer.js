
import {connect} from 'react-redux'
import React, { Component } from 'react';
import Logo from '../Logo.jpg'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import editProfile from '../actions/editProfile'
import { Link } from "react-router-dom";

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

    <a href="/home"><img className ='logo-footer' alt="Logo" src={Logo}/></a>
    
    <div class="footer-left">
        <p class="footer-links">
            <a href="#" class="link-1">Home</a>
            
            <a href="#">Blog</a>
        
            <a href="#">About</a>
            
            <a href="#">Contact</a>
        </p>

        <p id="year-footer">PG Parenting © 2020</p>
    </div>

    <div class="footer-center">
        <h5 id="contact-footer">Connect with us</h5>
       <p id="icons-footer"> <FontAwesomeIcon icon={faFacebook} className="icon-f"/><FontAwesomeIcon icon={faInstagram} className="icon-f"/><FontAwesomeIcon icon={faYoutube} /></p>
        <p id="email-icon-footer"><FontAwesomeIcon icon={faEnvelope} id="email-footer" />pgparenting@gmail.com</p>
        


    </div>

    <div class="footer-right">
    
    <h5 id="newsletter-title">Sign up for <strong id="newsletter-logo">PG Parenting</strong> newsletter</h5>
                        <div class="row" id="newsletter-div">
                              <form className = 'col s12' onSubmit={(e)=> editProfile(e, history, this.state, currentUser.id)}>
                                  <div class="row">
                                   <div class="row">
                                 
                                 </div> 
                                {currentUser.subscribe === "true" ? <button class="btn-newsletter-clicked" disabled>Subscribed ✓</button> :  <div>
                        <label>
                        <input type="checkbox" name="subscribe" class="filled-in" onChange={this.handleChange} value="true" checked={subscribe === 'true'}/>
                         <span>{currentUser.email}</span>
                        </label>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button className="btn-newsletter" type="submit">Confirm</button>
                        </div>}
                          </div>
                        </form>
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




  
 
  

