import React, { useState } from 'react'
import Transition from '../layout/utilities/transitions';

function SlideOver() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out">
        New User
      </button>

      <Transition
        show={isOpen}
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll">
              <header className="px-4 sm:px-6">
                <div className="flex items-start justify-between space-x-3">
                  <h2 className="text-lg leading-7 font-medium text-gray-900">
                    Panel title
                  </h2>
                  <div className="h-7 flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Close panel" className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </header>
              <div className="relative flex-1 px-4 sm:px-6">
                <div className="absolute inset-0 px-4 sm:px-6">
                  user form here
                </div>
              </div>
            </div>
          </div>
        </section>
      </Transition>
    </>
  )
}

export default SlideOver;
