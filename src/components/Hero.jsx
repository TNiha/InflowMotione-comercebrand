import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-gray-100 h-[600px] flex items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Discover Your Style</h1>
          <p className="text-xl mb-8">Explore the latest trends in fashion with Inflow Motion. Elevate your wardrobe with our curated collection.</p>
          <a href="#" className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">Shop Now</a>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Fashion model"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </section>
  )
}

export default Hero
