import React, { Component } from 'react';
import Toddler_Card from './Toddler_Card';

class Toddler_Container extends Component {



    render() {
      console.log(this.props.baby)
      

        return (
            <div>

    {this.props.toddler.catagory.sub_catagories.map(sub => <Toddler_Card sub={sub} />)}
             
            </div>
                
        );
    }
  }

  
export default Toddler_Container;


