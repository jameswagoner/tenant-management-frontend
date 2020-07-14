import React, { Component } from 'react';
import Header from '../layout/blocks/Header'

class Dashboard extends Component {
  render () {
    return (
      <>
        <Header title="Dashboard Page" />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-4 sm:px-0">
              <h2>Dashboard</h2>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default Dashboard;