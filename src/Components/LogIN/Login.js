import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import "./Login.css";

const Login = () => {
    const {login}=useContext(AuthContext);
    const navigate=useNavigate();

    const location=useLocation();
    const from= location.state?.from?.pathname || '/';

    
    const handlesignin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const pass=form.password.value;

        login(email,pass)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset()
            navigate(from,{replace:true})
        })
        .catch((error)=>{
            console.log('error',error)
        })



    }




    return (
        <div className='form-conteiner'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handlesignin}>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='Email'></input>

                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='Password'></input>

                </div>
                <input className="btn-submit" type="submit" value="LogIN" />
            </form>
            <p>New to ema-jhoN? Please Register : <Link to='/signup'>Register Here!</Link></p>
        </div>
    );
};

export default Login;