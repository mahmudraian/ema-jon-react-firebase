import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)

    let total =0;
    let shipping =0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity+ product.quantity
        total= total + product.price*product.quantity ;
        shipping= shipping +product.shipping
    }
    let tax = total*0.1;
    let grandtotal= (shipping+total+tax).toFixed(2);
    parseInt(grandtotal);
    return (
        <div className='cart'>
            <h2> Order summary</h2>
            <p>Selected items: {quantity}</p>
            <p>Total:{total}</p>
            <p>Shipping charge:{shipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand total:{grandtotal}</h3>

        </div>
    );
};

export default Cart;