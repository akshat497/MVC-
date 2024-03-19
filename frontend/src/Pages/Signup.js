import React, { useState } from 'react'
import '../Css/Signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
const [Obj,SetObj]=useState({
    Name:"",
    Phone:"",
    Email:"",
    Username:"",
    Password:""
})
function set(event)
{
    SetObj({...Obj,[event.target.name]:event.target.value})
}
async function Register(e)
{
    e.preventDefault()
    if(Obj.Name!="" && Obj.Phone!="" && Obj.Email!="" && Obj.Username!="" && Obj.Password!="")
    {
    }
    else
    {
        alert("Field is empty")
    }
}
    return (
        <div>
            <div className="Signupbdy">
                <div className="SignupMainHeading">
                    <h1>Social Media App</h1>
                </div>
                <div className="SignupMain">
                    <div className='Signup'>
                        <div className="signupheading">
                            <h1>Register Your Account</h1>
                        </div>
                        <div className="Signupform">
                            <form action='#' >
                                <label htmlFor="Name">Name <span>*</span> </label>
                                <input onChange={set} name='Name' required id="Name" type="text" placeholder='Enter your Name' />
                                <label htmlFor="Phone Number">Phone Number <span>*</span></label>
                                <input onChange={set} name='Phone' required id="Phone" type="number" placeholder='Enter your Phone Number' />
                                <label htmlFor="Email">Email <span>*</span></label>
                                <input onChange={set} name='Email' required id="Email" type="email" placeholder='Enter your Email' />
                                <label htmlFor="Username">Username<span>*</span></label>
                                <input onChange={set} name='Username' required id="Username" type="text" placeholder='Enter your Username' />
                                <label htmlFor="Password">Password.<span>*</span></label>
                                <input onChange={set} name='Password' required id="Password" type="password" placeholder='Enter your Password' />
                                <button onClick={Register}>Register</button>
                                <div className='signinsignup'>
                                   <Link to={'/'} ><span>or Login</span></Link>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Signup