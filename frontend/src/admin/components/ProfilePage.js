import React, { useEffect, useState } from 'react';
import { FetchUser } from '../../services/services';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    bio: 'Hello, I am John Doe.',
    avatar: 'https://via.placeholder.com/150',
  });
useEffect(async()=>{
   const response=await FetchUser();
   setProfile({
    username:response?.data?.name,
    email:response?.data?.email,
   });

},[])
  return (
    <div className='content'>
         <div className="profile" style={styles.container}>
      <img src={profile.avatar} alt="Profile" style={styles.avatar} />
      <h2 style={styles.username}>{profile.username}</h2>
      <p style={styles.email}>{profile.email}</p>
      <p style={styles.bio}>{profile.bio}</p>
    </div>
    </div>
   
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '300px',
    margin: '0 auto',
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  username: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  email: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  bio: {
    fontSize: '16px',
  },
};

export default ProfilePage;
