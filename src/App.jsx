import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties'
import Tenants from './pages/Tenants'
import Billing from './pages/Billing'
import Login from './pages/Login'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Redirect from="/" to="/dashboard" exact />
            <Route path="/login" component={ Login } />
            <Route path="/dashboard" component={ Dashboard } />
            <Route path="/properties" component={ Properties } />
            <Route path="/tenants" component={ Tenants } />
            <Route path="/billing" component={ Billing } />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

export default App;
