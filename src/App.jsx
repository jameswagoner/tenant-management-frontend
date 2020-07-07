import React from 'react'
import Nav from './layout/blocks/Nav'
import Header from './layout/blocks/Header'

function App() {
  return (
    <>
      <Nav />

      <Header />

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-4 sm:px-0">
            <h2>It's Working</h2>
          </div>
        </div>
      </main>
    </>
  )
}
export default App;
