import React, { Component } from 'react';
import Nav from '../../layout/blocks/Nav';
import PageHeader from '../../layout/blocks/PageHeader';

class Users extends Component {
  render () {
    return (
      <>
        <Nav />
        <PageHeader title="Users" />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-4 sm:px-0">
              <h2>Users</h2>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default Users;
