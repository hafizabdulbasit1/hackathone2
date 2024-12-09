import React from 'react'

function Features() {
  return (
    <section className="py-14">
    <div>
      <h1 className="text-lg pb-4 font-bold sm:text-xl md:text-2xl">Featured</h1>
      <img
        src="featured.jpg"
        alt="Featured"
        className="w-full h-auto object-cover"
      />
    </div>
  
    <div className="items-center text-center py-12 space-y-6 px-4 sm:px-8 md:px-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
        STEP INTO WHAT FEELS GOOD
      </h1>
      <p className="text-base sm:text-lg md:text-xl">
        Cause everyone should know the feeling of running in that perfect pair.
      </p>
      <button className="mt-4 rounded-2xl px-4 py-2 bg-black text-white hover:bg-gray-800 transition">
        Find Your Shoe
      </button>
    </div>
  </section>
  
  
  )
}

export default Features
