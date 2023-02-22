import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg'
import { AuthContext } from '../Context/UserContext';
import './Header.css'

const Headers = () => {
    const {user, LogOut}=useContext(AuthContext)


    return (
        <nav className='header'>
           <img src={Logo} alt=''></img>
        <div>
            <Link to="/shop" alt=""> Shop</Link>
            <Link to='/order' alt=''>Order</Link>
            <Link to='/inventory' alt=''>Inventory</Link>
            <Link to='/about' alt=''>About</Link> 
        
            {/* <Link to='/signup' alt=''>Signup</Link> 
            <Link to='/login' alt=''>Login</Link> */}
             
            {user?.uid ?
             <button className='btn-logout' onClick={LogOut}>Logout</button>
            :
            <>
                <Link to='/signup' alt=''>Signup</Link>            
                <Link to='/login' alt=''>Login</Link>
                </>} 

            <span>{user?.email}</span> 

                   
        </div>


        </nav>
    );
};

export default Headers;