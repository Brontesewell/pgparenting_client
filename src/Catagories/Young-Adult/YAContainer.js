import React, { Component } from 'react';
import YACard from './YACard';

class Container extends Component {



    render() {
      

        return (
            <div>

    {this.props.baby.catagory.sub_catagories.map(sub => <YACard sub={sub} />)}
             
            </div>
                
        );
    }
  }

  
export default Container;


