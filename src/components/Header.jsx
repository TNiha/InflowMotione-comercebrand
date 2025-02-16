import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Inflow Motion</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-primary">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary">Shop</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-primary">
            <i className="bi bi-search text-xl"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-primary">
            <i className="bi bi-person text-xl"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-primary">
            <i className="bi bi-bag text-xl"></i>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
