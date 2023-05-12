import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const ProfilePage = () => {
  const { user } = useAuth0();
  const card = {
    border: '1px solid black',
    width: '25%',
    height: '40vh',
    display: 'flex',
    flexDirection: 'column',
    margin: '4%',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '10px 5px 5px grey',
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={card}>
        <img style={{ width: '40%' }} src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.website}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
