import React from "react"

export default function Cta() {
  return (
    <div className="container mx-auto my-40">
      <div className="flex">
        <div className="p-20 shadow-2xl mr-8">
          <h2 className="font-extrabold text-green-800 text-2xl mb-6">
            Frequently Asked Questions
          </h2>
          <p className="mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            velit architecto nobis repellendus dolor sint reiciendis in
            blanditiis assumenda.
          </p>
          <button className="bg-green-800 text-white px-6 py-2 rounded font-medium hover:bg-green-600 transition duration-200 each-in-out">
            Go To FAQ's
          </button>
        </div>
        <div className="p-20 shadow-2xl">
          <h2 className="font-extrabold text-green-800 text-2xl mb-6">
            Contact Us
          </h2>
          <p className="mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            velit architecto nobis repellendus dolor sint reiciendis in
            blanditiis assumenda.
          </p>
          <button className="bg-red-800 text-white px-6 py-2 rounded font-medium hover:bg-green-600 transition duration-200 each-in-out">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
