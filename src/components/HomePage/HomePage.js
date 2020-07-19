import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { AuthContext } from '../Auth/Auth';

const HomePage = () => {

  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
