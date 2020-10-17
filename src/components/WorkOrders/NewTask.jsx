import React, { useState } from 'react'
import Transition from '../../layout/utilities/transitions';

function NewTask() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out">
        New Task
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
            <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
              <div className="flex-1 h-0 overflow-y-auto">
                <header className="space-y-1 py-6 px-4 bg-indigo-700 sm:px-6">
                  <div className="flex items-center justify-between space-x-3">
                    <h2 className="text-lg leading-7 font-medium text-white">
                      Create a New Task
                    </h2>
                    <div className="h-7 flex items-center">
                      <button onClick={() => setIsOpen(!isOpen)} aria-label="Close panel" className="text-indigo-200 hover:text-white transition ease-in-out duration-150">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm leading-5 text-indigo-300">
                      Some basic information for the task.
                    </p>
                  </div>
                </header>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="px-4 divide-y divide-gray-200 sm:px-6">
                    <div className="space-y-6 pt-6 pb-5">
                      <div className="space-y-1">
                        <label htmlFor="task_name" className="block text-sm font-medium leading-5 text-gray-900">
                          Brief Summary
                        </label>
                        <div className="relative rounded-md shadow-sm">
                          <input id="task_name" className="form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="task_description" className="block text-sm font-medium leading-5 text-gray-900">
                          Description
                        </label>
                        <div className="relative rounded-md shadow-sm">
                          <textarea id="task_description" rows="4" className="form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
                <span className="inline-flex rounded-md shadow-sm">
                  <button type="button" className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                    Cancel
                  </button>
                </span>
                <span className="inline-flex rounded-md shadow-sm">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Save
                  </button>
                </span>
              </div>
            </div>
          </div>
        </section>
      </Transition>
    </>
  )
}

export default NewTask;
