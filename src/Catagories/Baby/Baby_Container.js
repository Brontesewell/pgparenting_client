import React, { Component } from 'react';
import Baby_Card from './Baby_Card';

class Baby_Container extends Component {



    render() {
      console.log(this.props.baby)
      

        return (
            <div>

    {this.props.baby.catagory.sub_catagories.map(sub => <Baby_Card sub={sub} />)}
             
            </div>
                
        );
    }
  }

  
export default Baby_Container;


