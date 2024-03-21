import React, { useState } from 'react';
import '../Css/Signup.css';
import { Link } from 'react-router-dom';
import { ClientHeader } from '../common/ClientHeader';
import { SignUp } from '../services/services';

const Signup = () => {
    const [Obj, SetObj] = useState({
        Name: "",
        Phone: "",
        Email: "",
        Username: "",
        Password: ""
    });

    function set(event) {
        SetObj({ ...Obj, [event.target.name]: event.target.value });
    }

    async function handleRegister(e) {
        e.preventDefault();
        if (Obj.Name !== "" && Obj.Phone !== "" && Obj.Email !== "" && Obj.Username !== "" && Obj.Password !== "") {
            // Perform registration logic here
            SignUp(Obj)
        } else {
            alert("Fields cannot be empty");
        }
    }

    return (
      <>
      <ClientHeader/>
          <div className="signup-container">
    <div className="signup-form">
        <div className="signup-body">
            <div className="signup-image">
                {/* Add your image here */}
                <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1710934223~exp=1710937823~hmac=85c63aa2079879f58996b88b100fc5ce95ceab5fd0f7fa59c6d19a4c33e1e17b&w=740" alt="Login Image" />
                   </div>
            <div className="signup-fields">
                <div className="signup-heading">
                    <h1>Register Your Account</h1>
                </div>
                <form onSubmit={handleRegister}>
                    <label htmlFor="Name">Name<span>*</span></label>
                    <input onChange={set} name='Name' required id="Name" type="text" placeholder='Enter your Name' />
                    <label htmlFor="Phone">Phone Number<span>*</span></label>
                    <input onChange={set} name='Phone' required id="Phone" type="tel" placeholder='Enter your Phone Number' />
                    <label htmlFor="Email">Email<span>*</span></label>
                    <input onChange={set} name='Email' required id="Email" type="email" placeholder='Enter your Email' />
                    <label htmlFor="Username">Username<span>*</span></label>
                    <input onChange={set} name='Username' required id="Username" type="text" placeholder='Enter your Username' />
                    <label htmlFor="Password">Password<span>*</span></label>
                    <input onChange={set} name='Password' required id="Password" type="password" placeholder='Enter your Password' />
                    <button type="submit">Register</button>
                    <div className='sign-in-sign-up'>
                        <Link to={'/'}><span>or Login</span></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
      </>

    );
}

export default Signup;
