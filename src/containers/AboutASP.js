import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import QuadFinales from '../QuadFinales.jpeg'

class AboutASP extends Component {


    
    render () {  
        
        return (
            <div>
                
                    <Navbar />
               

        <div id="asp-backgrounds">
                <h2 id="asp-title">Family Report</h2>
                <div id="asp-line"></div>
<div id="asp-div">
                <h5 className="define-family"> →  If it works for your family, you can create a Family Report by selecting some life categories and quickly ranking your child’s progress and achievements.</h5>
<br></br>
                <h4 className="asp-subtitle">Purpose of Report</h4>
                <h5 className="define-family"> Creating a Family Report is a quick and easy way to visually map out your children’s progress and level of achievement.  The report will give you a simple way to decide on your priorities as a parent and decide which activities that you may want to keep, stop or start.</h5>

<br></br>
                <h4 className="asp-subtitle">Your assessment</h4>
                <h5 className="define-family">To complete the Family Report all you have to do is rank each child for the assessment categories that fit your Family Plan.  You can repeat the assessment as often as you want - the Family Report will update each time you make a change.</h5>

<br></br>
                <h4 className="asp-subtitle">Your Ranking </h4>

                <h5 className="define-family"> →  Rank your child from a score of one to five for achievement and progress for each assessment category.  When ranking, keep the following in mind:</h5>
              
                <div id="defining-asp">
                <h5 className="asp-defines"><i id="defines">•  Achievement:</i>  Your child’s achievement levels will be determined by your own expectations including your unique standards.  A score of 5 means that you don’t see any way for the child to achieve more and a score of 1 means that you don’t see any lower level of achievement.</h5>
              
               <h5 className="asp-defines"><i id="defines">•  Progress:</i> Achievement is not the only measure of success.  We recommend that you pay careful attention to your child’s progress, particularly when their achievement score is 3 or less in a particular life category.  Using a “better than before” approach can help you focus on the progress rather than just the level of achievement.
</h5>
               </div>
               <br></br>

               <h4 className="asp-subtitle">Life Categories</h4>
               <h5 className="define-family">The life categories included are: </h5>
               <div id="cats">
               <h5 className="asp-cats">•  Character </h5>
               <h5 className="asp-cats">•  Academic </h5>
               <h5 className="asp-cats">•  Sports</h5>
               <h5 className="asp-cats">•  Behaviour</h5>
               </div>
               <h5 className="define-family">Ignore any category that is not part of your Family Plan for that child - these are normally categories that you don’t care about.
</h5>

               <br></br>

               <h4 className="asp-subtitle">Family Report</h4>
               <h5 className="define-family">The Family Report is created from your achievement and progress rankings.  Each quadrant represents a range of scores:
</h5>
                <img id="quadrant" src={QuadFinales} />
                <br></br>
                <h4 className="asp-subtitle">How to use the report:</h4>
               <h5 className="define-family">Think of the report as a simple way to view different aspects of your child’s life.  </h5>
               <div id="defining-asp">
               <h5 className="asp-defines"><i id="defines">•  Quadrant 1:</i> A child in this quadrant may be starting out or you have some work to do.</h5>
               <h5 className="asp-defines"><i id="defines">•  Quadrant 2: </i> Your child is achieving but you need to focus on helping them make more progress .</h5>
               <h5 className="asp-defines"><i id="defines">•  Quadrant 3:</i> Your child is progressing but you need to focus on their achievement levels.</h5>
                <h5 className="asp-defines"><i id="defines">•  Quadrant 4: </i>  If your child is scoring in this quadrant then they are achieving and progressing well.  You have two options:  keep doing what you are doing or raise your standards.</h5>
               </div>
<br></br>
               <h4 className="asp-subtitle">Keep, stop and start</h4>
               <h5 className="define-family"> Time for all of us is precious.  The report should help you decide on your priorities including those activities that you may want to keep, stop or start:  </h5>
               <div id="defining-asp">
               <h5 className="asp-defines"><i id="defines">•  Keep:</i> What activities should you keep doing?  Your score tells you that they are working so keep doing them.</h5>
               <h5 className="asp-defines"><i id="defines">•  Stop: </i> What activities should you stop doing?  The hard decision here is that your score may be telling you that certain activities are not working OR that they are not working yet.  If they are obviously not working then stop them.  If they may be working then keep going but keep an eye out for the right results.</h5>
               <h5 className="asp-defines"><i id="defines">•  Start:</i> What activities should you start doing?  Talk to other parents, read some of our ideas and try new things.  This is particularly important if your child is scoring in quadrants 1, 2 or 3.</h5>
                
                </div>


<br></br>
<br></br>

               </div>
               <Link to="/profile"><button id="asp-button-back" className="btn">Back</button></Link>
               </div>
            </div>
        )
    }
}


export default AboutASP;
