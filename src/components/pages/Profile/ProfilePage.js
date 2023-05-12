import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const ProfilePage = () => {
  const { user } = useAuth0();
  const card = {
    border: '1px solid black',
    width: '50rem',
    height: '55vh',
    display: 'flex',
    flexDirection: 'column',
    margin: '4%',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '10px 5px 5px grey',
    backgroundColor: '#e6e9ed',
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '70vh' }}>
      <div style={card}>
        <img style={{ width: '30%' }} src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.website}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
