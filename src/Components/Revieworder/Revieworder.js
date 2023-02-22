import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Revieworder.css';

const Revieworder = ({product ,handlereviewitem}) => {
    const {name,price,img,quantity,shipping,}=product;
    return (
        <div className='review-order'>
            <div>
            <img src={img} alt=''></img>
            </div>
           
           <div className="review_details_con">
           <div className="review-details">
           <p>{name}</p>
            <p><small>price: ${price}</small></p>
            <p><small>shipping: ${shipping}</small></p>
            <p><small>Quantity: {quantity}</small></p>
           </div>
           <div className="review-dlt_btn">
            <button onClick={()=>{handlereviewitem(product.id)}} className='btn_dlt'>
        <FontAwesomeIcon  className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon>

            </button>
           </div>
           </div>
        </div>
    );
};

export default Revieworder;