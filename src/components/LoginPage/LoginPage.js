import React, { useContext } from 'react';
import './LoginPage.scss';
import logo from '../../assets/images/spotify-logo-green.png';
import { Button } from '@material-ui/core';
import { AuthContext } from '../Auth/Auth';

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  return (
    <div className="login-page">
      <img src={logo} className="login-page__logo" alt="spotify-logo" />
      <Button variant="outlined" color="primary" size="large" onClick={login}>Login</Button>
    </div>
  );
};

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
