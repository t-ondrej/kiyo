import React, { useEffect, useState } from 'react';
import { getHash, ACCESS_TOKEN_STORAGE_KEY } from '../../utils';

const SPOTIFY_CONFIG = {
  clientId: '11bc7dba81f34591a3a740f64072cdf1',
  redirectUri: 'http://localhost:3000',
  scopes: ['user-read-email', 'user-read-private']
}

const accessToken = getHash().access_token;

if (accessToken) {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);
}

export const AuthContext = React.createContext({});

const Auth = ({ children }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY));

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    setIsAuthenticated(isAuthenticated);
  }, []);

  const login = () => {
    window.location = 'https://accounts.spotify.com/authorize?response_type=token' +
                      `&client_id=${SPOTIFY_CONFIG.clientId}` +
                      `&scope=${SPOTIFY_CONFIG.scopes.join('%20')}` +
                      `&redirect_uri=${SPOTIFY_CONFIG.redirectUri}` +
                      '&show_dialog=true'
  }

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

Auth.propTypes = {};

Auth.defaultProps = {};

export default Auth;
