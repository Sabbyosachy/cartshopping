import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    // console.log(props);
    const{name,img,price,seller,stock}=props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="productInfo">
            <div>
            <img src={img} alt="" srcset="" />
            </div>
          <div className="Info">
          <h4 className="PRODUCT-COLOR">{name}</h4>
            <p><small>by:{seller}</small></p>
            <h4>Price:{price}</h4>
            <h5>Only {stock} left in stock-order soon</h5>
            <button onClick={()=>props.handleAddTocart(props.product)} className="purchase_btn">{element} Add To Cart</button>
          </div>
      
        </div>
    );
};

export default Product;