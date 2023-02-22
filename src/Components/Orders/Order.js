import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../cart/Cart';
import Revieworder from '../Revieworder/Revieworder';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const { products, initialCart }=useLoaderData();
    const [cart,setCart]=useState(initialCart);

    const handlereviewitem=(id)=>{
       const remainingdata= cart.filter(product=>product.id!==id)
       setCart(remainingdata);
       removeFromDb(id);
    }

    return (
        <div className="shop-container">
            <div className="order-container">
                {
                    cart.map(product=><Revieworder
                     key={product.id}
                     product={product}
                     handlereviewitem={handlereviewitem}
                    ></Revieworder>)
                }


            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/shipping">
                    <button >Proceed Shipping</button>
                </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Order;