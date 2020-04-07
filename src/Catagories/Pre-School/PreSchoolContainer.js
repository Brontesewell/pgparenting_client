import React, { Component } from 'react';
import Card from './PreSchoolCard';

class Container extends Component {



    render() {
      

        return (
            <div>

    {this.props.baby.catagory.sub_catagories.map(sub => <Card sub={sub} />)}
             
            </div>
                
        );
    }
  }

  
export default Container;


