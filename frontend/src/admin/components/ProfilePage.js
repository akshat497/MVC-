import React, { useEffect, useState } from 'react';
import { FetchUser } from '../../services/services';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    location: '',
    avatar: '',
  });
  const fetchuserdetails=async()=>{
    const response=await FetchUser();
    const date=new Date(profile.createdAt).toLocaleDateString()
    setProfile({
     username:response?.data?.name,
     email:response?.data?.email,
     location:response?.data?.location,
     createdAt:date
    });
  }
useEffect(()=>{
    fetchuserdetails()

},[])
  return (
    <div className='content'>
         <div className="profile-container">
      <div className="profile-header">
        <img src="profile-pic.jpg" alt="Profile" className="profile-image" />
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-bio">{profile.bio}</p>
      </div>
      <div className="profile-details">
        <div className="detail">
          <span className="detail-label">Email:</span>
          <span>{profile.email}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Location:</span>
          <span>{profile.location}</span>
        </div>
        {/* <div className="detail">
          <span className="detail-label">Skills:</span>
          <span></span>
        </div> */}
      </div>
    </div>
    </div>
   
  );
};



export default ProfilePage;
