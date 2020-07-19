import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Auth/Auth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...otherProps }) => {

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...otherProps}
      render={props => ( isAuthenticated 
                          ? <Component {...props}/> 
                          : <Redirect to="/login"/> 
                        )
              }
    />
  )
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

PrivateRoute.defaultProps = {};

export default PrivateRoute;
