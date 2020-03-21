import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'
import { Link } from "react-router-dom";

class Home extends Component {


    
    render () {  
        
        return (
            <div>
                <div className = 'row'>
                    {<Navbar/>}
                    
                </div>

                <img id="top-home-img" src="https://images.unsplash.com/photo-1558056524-97698af21ff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
             
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

<div id="tip-home">
<h1 id="tip-title">PG Parenting Tip of the week</h1>
<div id="tip">
<div id="tip-left">
<img id="tip-photo" src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
</div>
<div id="tip-right">
    <h4>Turn responsibilities into a game</h4>
    <h6>3-6 yrs old</h6>
    <p id="tip-p">If your child refuses to do something, try turning it into a game. "Humor and games are two great tools that parents sometimes forget about in the heat of the moment," says Zebooker. When her own son, now 13, was in preschool, she used to persuade him to put his shoes on in the morning by playing shoe store. "I would say, 'Welcome to Miss Mommy's Shoe Store, I've got the perfect pair for you to try on today,' and I'd speak in a silly accent and he loved it."</p>
</div>
</div>
</div>

<img id="about-home" src="https://images.unsplash.com/photo-1527358555642-1e21af4f39e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
                    
                   <h1>Sign up for news pappers</h1>
                </div>
         
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps, null)(Home);
