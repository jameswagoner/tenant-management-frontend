import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = props => {
  return (
    <nav className="bg-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-2xl font-bold text-white">
              {process.env.REACT_APP_NAME}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                <NavLink to="/properties" className="nav-link">Properties</NavLink>
                <NavLink to="/tenants" className="nav-link">Tenants</NavLink>
                <NavLink to="/billing" className="nav-link">Billing</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default nav;
