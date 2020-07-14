import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Nav from './layout/blocks/Nav';

import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties'
import Tenants from './pages/Tenants'
import Billing from './pages/Billing'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <>
          <Nav />
          <Switch>
            <Redirect from="/" to="/dashboard" exact />
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
