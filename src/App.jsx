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
import WorkOrders from './pages/WorkOrders'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Redirect from="/" to="/login" exact />
            <Route path="/login" component={ Login } />
            <Route path="/dashboard" component={ Dashboard } />
            <Route path="/properties" component={ Properties } />
            <Route path="/tenants" component={ Tenants } />
            <Route path="/work-orders" component={ WorkOrders } />
            <Route path="/billing" component={ Billing } />
            <Route path="/admin/users/create" component={ CreateUser } />
            <Route path="/admin/users" component={ Users } />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

export default App;
