import React, { Component } from 'react';
import PageHeader from '../layout/blocks/PageHeader'
import Nav from '../layout/blocks/Nav'
import NewTask from '../components/WorkOrders/NewTask'

class WorkOrders extends Component {
  constructor (props) {
    super(props);

    this.breadcrumbs = [];
  }

  render () {
    return (
      <>
        <Nav />
        <PageHeader breadcrumbs={this.breadcrumbs} title="Work Orders">
          <NewTask />
        </PageHeader>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-4 sm:px-0">
              <h2>Work Orders</h2>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default WorkOrders;
