import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getstroeddata } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Productjs from '../Product/Productjs';
import './Shop.css'
//import '../../../public/products.json'(no need for public)

const Shop = () => {
   
    const [cart,setCart]=useState([])
   const products =useLoaderData();
    useEffect(()=>{
        const  storedCart= getstroeddata();
        const savecart=[];
        for (const id in storedCart){
            const addedproduct = products.find( product=> product.id ===id);
                   
                if(addedproduct){
                    const quantity=storedCart[id]
                    addedproduct.quantity=quantity;
                  
                    savecart.push(addedproduct)
                }
            
        }
        setCart(savecart);
    }
    
        ,[products])
   

    const handleaddtocart=(selectedproduct)=>{
        let newcart=[];
        const exist =cart.find(product=>product.id===selectedproduct.id);
        if(!exist){
            selectedproduct.quantity=1;
            newcart=[...cart,selectedproduct]
        }
        else{
            const rest= cart.filter(product=>product.id !== selectedproduct.id);
            exist.quantity=exist.quantity+1;
            newcart=[...rest,exist]
        }
        
        setCart(newcart);
        addToDb(selectedproduct.id)
        
    }
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
        <div className='products-container'>
            
            {
                products.map(product => <Productjs
                key={product.id}
                product={product}
                handleaddtocart={handleaddtocart}
                ></Productjs>)
            }

        </div>
        <div className='cart-container'>
            {/* <h2> Order summary</h2>
            <p>Selected items: {cart.length}</p> */}
            {
                // <Cart
                // cart={cart}>
                // </Cart>
            //     <Link to="/orders">
            //     <button>Review Order</button>
            // </Link>
            }
                            <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/order">
                        <button>Review Order</button>
                    </Link>
                </Cart>


        </div>

        </div>
        

    )
};

export default Shop;