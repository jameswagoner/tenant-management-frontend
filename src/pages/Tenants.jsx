import React, { Component } from 'react';
import Header from '../layout/blocks/Header'
import Nav from '../layout/blocks/Nav'

class Tenants extends Component {
  render () {
    return (
      <>
        <Nav />
        <Header title="Tenants Page" />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-4 sm:px-0">
              <h2>Tenants</h2>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default Tenants;
