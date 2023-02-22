import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebasecompo/Firebase';
import {getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'


    const auth= getAuth(app)

export const AuthContext=createContext()




const UserContext = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)


    const createuser=(email,pass)=>{
        return  createUserWithEmailAndPassword(auth,email,pass)
    }

    const login=(email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass);

    }

    
    const LogOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentuser=>{
            console.log('current user',currentuser)
            setUser(currentuser)
            setLoading(false);
        })
        return ()=>  unsubscribe();
    },[])

    const authinfo={user,loading,createuser,login, LogOut};
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default UserContext;