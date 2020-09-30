import React, { Component } from 'react';
import Nav from '../../layout/blocks/Nav';
import PageHeader from '../../layout/blocks/PageHeader';
import axios from 'axios'
import { getToken } from '../../services/auth'

class CreateUser extends Component {
  constructor (props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }

    this.apiUrl = process.env.REACT_APP_API_BASE_URL;

    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken()
    }
  }

  submitCreateUser (state) {
    axios.post(
      this.apiUrl + '/users',
      {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password
      },
      {
        headers: this.headers
      }
    )
      .then(({data}) => data.success && this.props.history.push('/users'))
  }

  render () {
    return (
      <>
        <Nav />
        <PageHeader title="Create User" />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-4 sm:px-0">
              <div className="hidden sm:block">
                <div className="py-5">
                  <div className="border-t border-gray-200">&nbsp;</div>
                </div>
              </div>
              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">First name</label>
                              <input id="first_name" onChange={ e => this.setState({ firstName: e.target.value }) } autoComplete="off" className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                              <input id="last_name" onChange={ e => this.setState({ lastName: e.target.value }) } autoComplete="off" className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="email_address" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                              <input id="email_address" type="email" onChange={ e => this.setState({ email: e.target.value }) } autoComplete="new-email" className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                              <input id="password" type="password" onChange={ e => this.setState({ password: e.target.value }) } autoComplete="new-password" className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button type="button" onClick={ () => this.submitCreateUser(this.state) } className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
                            Save
                          </button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default CreateUser;
