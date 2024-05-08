import React, { useEffect, useState } from 'react';
import '../Css/Signup.css';
import { Link } from 'react-router-dom';
import { ClientHeader } from '../common/ClientHeader';
import { SignUp } from '../services/services';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/FirebaseAuth';
import ReCAPTCHA from 'react-google-recaptcha';
const Signup = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        location:"",
        password: ""
    });
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);
    const [captchaValue, setCaptchaValue] = useState('');
    useEffect (() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position)
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError('Geolocation is not supported by your browser');
        }
    }, []);
    const set = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if (captchaValue) {
            if (userData.Name !== "" && userData.Phone !== "" && userData.Email !== "" && userData.Username !== "" && userData.Password !== "") {
                SignUp(userData);
            } else {
                alert("Fields cannot be empty");
            }
        }
       
    }
    const generateRandomPassword = () => {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        let password = '';
        for (let i = 0; i < 8; i++) { // Generate an 8-character password
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    }
    const handleGoogleSignUp = async () => {
        const provider = new GoogleAuthProvider();
        console.log(provider)
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result)
            const { displayName, email, phoneNumber } = result.user;
            setUserData({
                ...userData,
                name: displayName || "",
                email: email || "",
                Phone: phoneNumber || "",
                location: "Not available",
                password:  generateRandomPassword(8)
            });
            //  SignUp(userData);
            // Now you have access to the user's Google details, you can optionally pre-fill the form fields with this data
        } catch (error) {
            console.error('Google sign-up error:', error);
            // Handle error, show error message or retry sign-up
        }
    }
 // Handle captcha change
 const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
};

    return (
        <>
            <ClientHeader />
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
                                <input onChange={set} name='Name' value={userData.Name} required id="Name" type="text" placeholder='Enter your Name' />
                                <label htmlFor="Phone">Phone Number<span>*</span></label>
                                <input onChange={set} name='Phone' value={userData.Phone} required id="Phone" type="tel" placeholder='Enter your Phone Number' />
                                <label htmlFor="Email">Email<span>*</span></label>
                                <input onChange={set} name='Email' value={userData.Email} required id="Email" type="email" placeholder='Enter your Email' />
                                <label htmlFor="Username">Username<span>*</span></label>
                                <input onChange={set} name='Username' value={userData.Username} required id="Username" type="text" placeholder='Enter your Username' />
                                <label htmlFor="Password">Password<span>*</span></label>
                                <input onChange={set} name='Password' required id="Password" type="password" placeholder='Enter your Password' />
                                <ReCAPTCHA
                                sitekey="6Lf47dMpAAAAALFsATl0_B1VGMHAvZGL42KRcBUM"
                                onChange={handleCaptchaChange}
                            />
                                <button type="submit">Register</button>
                                <div className='sign-in-sign-up'>
                                    <Link to={'/'}><span>or Login</span></Link>
                                </div>
                            </form>
                            <button onClick={handleGoogleSignUp} className="google-signup-button">Sign up with Google</button>
                        </div>
                    </div>
                </div>
            <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6986.18063046523!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715088933104!5m2!1sen!2sin`} width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
</div>
        </>
    );
}

export default Signup;
