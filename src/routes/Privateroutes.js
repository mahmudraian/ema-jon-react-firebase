import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/Context/UserContext';

const Privateroutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    const locaton =useLocation();
    if(loading){
        console.log('loading found')
       return <div>Loading..</div>
    }

    if(user && user.uid){
        return children;
    }else{
        return <Navigate to='/login' state={{from: locaton}} replace></Navigate>      
    }
};

export default Privateroutes;