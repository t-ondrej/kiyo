import React, { useEffect, useState } from 'react';
import { tokenService } from '../../services';
import { getHash } from '../../utils';

const SPOTIFY_CONFIG = {
  clientId: '11bc7dba81f34591a3a740f64072cdf1',
  redirectUri: 'http://localhost:3000',
  scopes: ['user-read-email', 'user-read-private']
}

export const AuthContext = React.createContext({});

const Auth = ({ children }) => {
  tokenService.setToken(getHash());

  const [isAuthenticated, setIsAuthenticated] = useState(!!tokenService.getAccessToken());

  useEffect(() => {
    const isAuthenticated = !!tokenService.getAccessToken();
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
    tokenService.clearToken();
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
