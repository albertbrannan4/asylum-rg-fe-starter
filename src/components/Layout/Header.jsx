import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import LoginButton from '../auth/login';
import LogoutButton from '../auth/logout';
import { useAuth0 } from '@auth0/auth0-react';
const { primary_accent_color } = colors;

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  return <nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</nav>;
};

function HeaderContent() {
  const { isAuthenticated } = useAuth0();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div
        style={{
          width: '25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Link to="/" style={{ color: '#E2F0F7' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>
        {isAuthenticated && (
          <Link to="/profile" style={{ color: '#E2F0F7' }}>
            Profile
          </Link>
        )}
        <AuthNav />
      </div>
    </div>
  );
}

export { HeaderContent };
