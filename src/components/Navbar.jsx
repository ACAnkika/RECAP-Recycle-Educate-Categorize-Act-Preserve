import React from 'react'

function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold text-indigo-700">EcoAware</h2>
        <ul className="flex gap-6 text-gray-600">
          <li><a href="#learn">Learn</a></li>
          <li><a href="#pledge">Pledge</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
