import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
        crossOrigin="anonymous"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <button className="w-full bg-primary text-white py-2 rounded-full hover:bg-blue-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
