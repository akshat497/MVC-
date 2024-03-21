import React, { useState } from 'react';
import "../Css/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../services/services';
import { ClientHeader } from '../common/ClientHeader';

const Login = () => {
    const navigate=useNavigate()
    const [Obj, SetObj] = useState({
        Username: "",
        Password: ""
    });

    function set(event) {
        SetObj({ ...Obj, [event.target.name]: event.target.value });
    }

    async function handleLogin(e) {
        e.preventDefault();
        if (Obj.Username !== "" && Obj.Password !== "") {
            const body = {
                email: Obj.Username,
                password: Obj.Password
            };
         const response=   await LoginUser(body);
         if(response?.message==="successfull"){
            navigate('/admin',{state:response})
         }
             
        } else {
            alert("Fields cannot be empty");
        }
    }

    return (
        <>
        <ClientHeader/>
            <div className="login-container">
            <div className="login-form">
                <div className="login-heading">
                   
                </div>
                <div className="login-body">
                    <div className="login-image">
                        {/* Add your image here */}
                        <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1710933551~exp=1710934151~hmac=8fa3a803bd9ebdbdf5a887b4cd455541cd407de5a99f9948c83283da889bbcc1" alt="Login Image" />
                    </div>
                    <div className="login-fields">
                        <h2>Login Your Account</h2>
                        <form onSubmit={handleLogin}>
                            <label htmlFor="Username">Username<span>*</span></label>
                            <input onChange={set} name='Username' required id="Username" type="text" placeholder='Enter your Username' />
                            <label htmlFor="Password">Password<span>*</span></label>
                            <input onChange={set} name='Password' required id="Password" type="password" placeholder='Enter your Password' />
                            <button type="submit">Login</button>
                            <div className='sign-in-sign-up'>
                                <Link to={'/Signup'}><span>or Signup</span></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;
