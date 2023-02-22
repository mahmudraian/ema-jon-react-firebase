import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import "./Signup.css";

const Signup = () => {
    const {createuser}=useContext(AuthContext);
    const [error,setError]=useState(null)


    const handlesubmit=(event)=>{
       
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const pass=form.password.value;
        const confirm=form.confirm.value;
        console.log(email,pass,confirm);

        if(pass !== confirm){
            setError('password did not match')
            return;
        }
        else( createuser(email,pass)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset()
        })
        .catch((error)=>{
            console.log('error',error)
        }))
       

    }




    return (
        <div className='form-conteiner'>
        <h1 className='form-title'>Register!</h1>
        <form onSubmit={handlesubmit}>
            <div className="form-control">
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Email'></input>

            </div>
            <div className="form-control">
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' placeholder='Password'></input>

            </div>
            <div className="form-control">
                <label htmlFor='confirm'>Confirm-Password</label>
                <input type='password' name='confirm' placeholder='Password'></input>

            </div>
            <input className="btn-submit" type="submit" value="LogIN" />
        </form>
        <p>Allready have an account? Please <Link to='/login'>Login Here!</Link></p>
        <p>{error}</p>
    </div>
    );
};

export default Signup;