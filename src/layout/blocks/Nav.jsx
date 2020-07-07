import React from 'react'

function Nav () {
  return (
    <>
      <nav className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-2xl font-bold text-white">
                DIG Tenants
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline">
                  <a href="#"
                     className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-800 focus:outline-none focus:text-white focus:bg-indigo-600">Dashboard</a>
                  <a href="#"
                     className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600">Team</a>
                  <a href="#"
                     className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600">Projects</a>
                  <a href="#"
                     className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600">Calendar</a>
                  <a href="#"
                     className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600">Reports</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
