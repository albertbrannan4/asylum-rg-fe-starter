import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const ProfilePage = () => {
  const { user } = useAuth0();
  const card = {
    border: '1px solid red',
    width: '25%',
    height: '40vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '4%',
    borderRadius: '10px',
  };
  return (
    <div>
      <div style={card}>
        <img style={{ width: '40%' }} src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
