import React from 'react'

const HeroSection = () => {
  return (
    <div className='py-20 rounded-2xl m-1' style={{background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-2 text-white uppercase">
          Check out our latest pizzas
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          Add them to cart for checkout.
        </h3>
      </div>
    </div>
  )
}

export default HeroSection