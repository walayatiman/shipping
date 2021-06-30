import React from "react"

export default function Brand() {
  return (
    <div className="text-center container mx-auto my-28">
      <h2 className="capitalize text-green-600 text-center font-black lg:text-6xl mb-8">
        Extend Your Brand
      </h2>
      <h3 className="text-3xl text-gray-400">
        Offer in-home services through our Good Guys
      </h3>
      <div className="flex content-between mt-20">
        <div className="bg-first-delivery bg-cover h-96 w-1/2 relative mx-4">
          <p className="absolute bg-white px-12 py-8 bottom-0 left-0 z-10 text-xl">
            Carry The Heavy Stuff
          </p>
        </div>
        <div className="bg-second-delivery bg-cover h-96 w-1/2 relative mx-4">
          <p className="absolute bg-white px-12 py-8 bottom-0 left-0 z-10 text-xl">
            Install Appliances
          </p>
        </div>
      </div>
      <div className="flex content-between mt-20">
        <div className="bg-third-delivery bg-cover h-96 w-1/2 relative mx-4">
          <p className="absolute bg-white px-12 py-8 bottom-0 left-0 z-10 text-xl">
            Assemble Furniture
          </p>
        </div>
        <div className="bg-fourth-delivery bg-cover h-96 w-1/2 relative mx-4">
          <p className="absolute bg-white px-12 py-8 bottom-0 left-0 z-10 text-xl">
            Handle Disposal
          </p>
        </div>
      </div>
    </div>
  )
}
