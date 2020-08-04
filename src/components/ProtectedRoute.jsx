import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authCheck } from '../services/auth';

export const ProtectedRoute = ({ component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render = {
        props => {
          if (authCheck()) {
            return <Component {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }
      }
    />
  )
}
