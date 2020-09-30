import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';

import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Tenants from './pages/Tenants';
import Billing from './pages/Billing';
import Login from './pages/Login';
import Users from './pages/Admin/Users';
import CreateUser from './pages/Admin/CreateUser';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Redirect from="/" to="/login" exact />
            <Route path="/login" component={ Login } />
            <ProtectedRoute path="/dashboard" component={ Dashboard } />
            <ProtectedRoute path="/properties" component={ Properties } />
            <ProtectedRoute path="/tenants" component={ Tenants } />
            <ProtectedRoute path="/billing" component={ Billing } />
            <ProtectedRoute path="/admin/users/create" component={ CreateUser } />
            <ProtectedRoute path="/admin/users" component={ Users } />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

export default App;
