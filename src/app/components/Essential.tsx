import React from 'react'

function Essential() {
  return (


<section className="py-24">
  <h1 className="text-lg text-center md:text-left mb-8">Essential</h1>
  <div className="flex flex-wrap md:flex-nowrap gap-4">
    {/* Card 1 */}
    <div className="w-full md:w-1/3 relative">
      <img src="essen.png" alt="" className="w-full h-auto" />
      <button
        className="bg-white text-black px-4 py-1 absolute bottom-2 left-1/2 transform -translate-x-1/2"
      >
        Men's
      </button>
    </div>

    {/* Card 2 */}
    <div className="w-full md:w-1/3 relative">
      <img src="essen2.png" alt="" className="w-full h-auto" />
      <button
        className="bg-white text-black px-4 py-1 absolute bottom-2 left-1/2 transform -translate-x-1/2"
      >
        Men's
      </button>
    </div>

    {/* Card 3 */}
    <div className="w-full md:w-1/3 relative">
      <img src="essen1.png" alt="" className="w-full h-auto" />
      <button
        className="bg-white text-black px-4 py-1 absolute bottom-2 left-1/2 transform -translate-x-1/2"
      >
        Men's
      </button>
    </div>
  </div>
</section>






  )
}

export default Essential
 