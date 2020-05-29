import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

class ShopCard extends Component {
    render() {
        return (
            <div id="shop-div">

         <Card style={{ width: '18rem' }} id="shop">
              <Card.Img variant="top" id="imgshop" src={this.props.item.image_url} />
              <Card.Body>
               <Card.Title id="title-product-shop" className="text-shop">{this.props.item.name}</Card.Title>
               <Card.Text className="text-shop"> ${this.props.item.price} </Card.Text>
                <a href={this.props.item.url}><Button id="shop-button" variant="primary">Buy</Button></a>
                </Card.Body>
        </Card>
            </div>
        )
    }
}

export default ShopCard