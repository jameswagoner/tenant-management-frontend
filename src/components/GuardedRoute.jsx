import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authCheck } from '../services/auth';

export const GuardedRoute = ({ component: Component, ...rest}) => {
  // determine requirements
  const result = <Component {...props} />;

  return (
    <Route
      {...rest}
      render = {
        props => {
          if (authCheck()) {
            return result
          } else {
            return <Redirect to="/login" />
          }
        }
      }
    />
  )
}
