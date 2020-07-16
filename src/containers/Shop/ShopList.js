import React, { Component } from 'react';
import ShopCard from "./ShopCard"
import {connect} from 'react-redux'
import Navbar from '../Navbar'

//Importing the data shop
import data from "../../data";
const shop = data.shop;

class ShopList extends Component {
    render() {
        return (
            <div >
                    <Navbar />
               
                {/* <div className="shopping"> */}
                <h5 id="shop-title"> SHOP</h5>
                {/* <div className="line-catagory"></div> */}
                <div class="container">
                {/* <div class="row"> */}
                    {shop.map(item => < ShopCard item={item}/>)}
                    </div>
                </div>
            // </div>
        )
    }
}

export default ShopList