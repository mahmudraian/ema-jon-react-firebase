import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Productjs = (props) => {
    const {name,img,price,ratings,seller}=props.product;

    return (
        <div className='product'>
        <div className='product-info'>
        <img src={img} alt=''></img>
            <p className='product-name'>{name}</p>
            <p> Seller:{seller}</p>
            <p>Rating: {ratings}</p>
            <p> Price ={price}</p>
        </div>
        <button onClick={()=>props.handleaddtocart(props.product)} className='btn-cart'>
            <p>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        
        </button>
          
        </div>
    );
};

export default Productjs;