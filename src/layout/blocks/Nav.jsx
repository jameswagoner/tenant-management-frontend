import React from 'react'

function Nav () {
  return (
    <>
      <nav className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-2xl font-bold text-white">
                {process.env.REACT_APP_NAME}
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline">
                  <a href="#"
                     className="nav-link active">Dashboard</a>
                  <a href="#"
                     className="ml-4 nav-link">Team</a>
                  <a href="#"
                     className="ml-4 nav-link">Projects</a>
                  <a href="#"
                     className="ml-4 nav-link">Calendar</a>
                  <a href="#"
                     className="ml-4 nav-link">Reports</a>
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
