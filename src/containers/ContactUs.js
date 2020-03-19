import React, {Component} from 'react';
import {connect} from 'react-redux'
import WelcomeNav from './WelcomeNav';

class ContactUs extends Component {


    
    render () {  
        
        return (
            <div>
                <div className = 'row'>
                    {<WelcomeNav/>}
                </div>

                    <div id ="contact-us-image">

                   
                    <div className="contact-us-div">
                    <form action="action_page.php">
                        <h1>Contact Us</h1>

                    <label for="fname">First Name</label>
<input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

<label for="lname">Last Name</label>
<input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
<label for="lname">Email</label>
<input type="text" id="email" name="email" placeholder="Your Email.."></input>

<label for="subject">Subject</label>
<textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

<input type="submit" value="Submit"></input>

</form>

                    </div>

                    </div> 
             
     </div>
        )
    }
}


export default ContactUs;
