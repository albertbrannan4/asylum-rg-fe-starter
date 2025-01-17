import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      style={{
        height: '3vh',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default Auth0LoginButton;
