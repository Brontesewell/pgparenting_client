import React, { Component } from 'react';
import data from "../data";
import ShopCard from "./ShopCard"
import {connect} from 'react-redux'
import Navbar from './Navbar'

const shop = data.shop;

class ShopList extends Component {
    render() {
        return (
            <div >
                <div className ='row'>
                    <Navbar />
                </div>
                <div className="shopping">
                <h1 id="shop-title"> Shop</h1>
                <div className="line-catagory"></div>
                <ul>
                    {shop.map(item => < ShopCard item={item}/>)}
                </ul>
                </div>
            </div>
        )
    }
}

export default ShopList