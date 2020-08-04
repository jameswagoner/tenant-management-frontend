import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { setSession } from '../services/auth';
import axios from 'axios';

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.apiUrl = process.env.REACT_APP_API_BASE_URL;
  }

  submitLogin (state) {
    axios.post(
      this.apiUrl + '/login',
      {
        email: state.email,
        password: state.password
      }
    )
    .then(({data}) => data.success && setSession(data))
    .then(() => this.props.history.push('/dashboard'))
  }

  render () {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">Sign in to your account</h2>
          <div className="mt-8">
            <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm">
                <div>
                  <input aria-label="Email address" onChange={ e => this.setState({ email: e.target.value }) } type="email" required
                         className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                         placeholder="Email address" />
                </div>
                <div className="-mt-px">
                  <input aria-label="Password" onChange={ e => this.setState({ password: e.target.value }) } type="password" required
                         className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                         placeholder="Password" />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                    <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">Remember me</label>
                </div>
                <div className="text-sm leading-5">
                  <NavLink to="/" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">Forgot your password?</NavLink>
                </div>
              </div>
              <div className="mt-6">
                <button type="button" onClick={ () => this.submitLogin(this.state) } className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Sign in
                </button>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
