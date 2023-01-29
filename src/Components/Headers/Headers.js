import React from 'react';
import Logo from '../../images/Logo.svg'
import './Header.css'

const Headers = () => {
    return (
        <nav className='header'>
           <img src={Logo} alt=''></img>
        <div>
            <a href="/shop" alt=""> Shop</a>
            <a href='/order' alt=''>Order</a>
            <a href='/inventory' alt=''>Inventory</a>
            <a href='/about' alt=''>About</a>            
        </div>


        </nav>
    );
};

export default Headers;