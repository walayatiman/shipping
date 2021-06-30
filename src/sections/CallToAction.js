import React from "react"

export default function CallToAction() {
  return (
    <div className="py-48 bg-fist-bump bg-fixed">
      <div className="container mx-auto text-center">
        <h1 className="font-black text-white text-5xl text-center mb-14">
          Partner With Us
        </h1>
        <p className="w-2/3 mx-auto text-white text-xl text-center leading-10 mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          tempus egestas sed sed risus.
        </p>
        <button class="px-12 py-4 rounded-large font-bold text-green-400 bg-white hover:bg-gray-200 active:bg-grey-900 focus:outline-none  transition-all">
          <i class="mdi mdi-circle-outline mr-2 text-xl align-middle leading-none"></i>
          Get Started
        </button>
      </div>
    </div>
  )
}
