import React from 'react'

const Hero = () => {
  return (
<section className="px-6 md:px-12 lg:px-20">
  <div className="items-center text-center space-y-6">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Hello Nike App</h1>
    <p className="text-sm md:text-base lg:text-lg">
      Download the App to access everything Nike.
      <u>
        <a href="#" className="text-blue-500 hover:text-blue-700">Get Your Great</a>
      </u>
    </p>

    <div className="w-full flex justify-center">
      <img
        src="hero img.png"
        alt="Nike Hero"
        className="w-full h-auto max-w-[1920px] object-cover"
      />
    </div>

    <div className="space-y-4">
      <p className="mt-4 text-sm md:text-base">First look</p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        Nike Air Max Plus
      </h1>
      <p className="mx-auto text-sm md:text-base lg:text-lg max-w-prose">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
        <br />
        —designed to push you past your limits and help you go to the max.
      </p>
      <a href="#" className="flex justify-center space-x-4">
        <button className="px-4 py-2 bg-black text-white rounded-2xl">
          Notify Me
        </button>
        <button className="px-4 py-2 bg-black text-white rounded-2xl">
          Shop Air Max
        </button>
      </a>
    </div>
  </div>
</section>

  )
}

export default Hero
