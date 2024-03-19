import React, {useState } from 'react'
import "../Css/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/services'
const Login = () => {
    const[Obj,SetObj]=useState({
        Username:"",
        Password:""
    })
    const navigate=useNavigate()
    function set(event)
    {
        SetObj({...Obj,[event.target.name]:event.target.value})
    }
   async function Login(e)
    {
       
        e.preventDefault()
        if(Obj.Username!="" && Obj.Password!="")
        {
            const body={
                email:Obj.Username,
                password:Obj.Password     
               }
            LoginUser(body)
        }
        else
        {
            alert("Field is empty")
        }
    }
    return (
        <div>
            <div className="Loginbdy">
                <div className="LoginPageHeading">
                    <h1>Social Media App</h1>
                </div>
                <div className="LoginMain">
                    <div className='login'>
                        <div className="loginheading">
                            <h1>Login Your Account</h1>
                        </div>
                        <div className="loginform">
                            <form >
                                <label htmlFor="SchoolId">Username<span>*</span> </label>
                                <input onChange={set} name='Username'  required id="Username" type="text" placeholder='Enter your Username' />
                                <label htmlFor="Password">Password <span>*</span></label>
                                <input onChange={set} name='Password'  required id="Password" type="password" placeholder='Enter your Password' />
                                <button onClick={Login}>Login</button>
                                <div className='signinsignup'>
                                <Link to={'/Signup'} > <span>or Signup</span></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login