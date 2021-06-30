import React from "react"
import { FaPlay } from "@react-icons/all-files/fa/FaPlay"

export default function Hero() {
  return (
    <div className="bg-hero-pattern bg-cover">
      <div className="flex h-screen">
        <header className="m-auto">
          <h2 className="capitalize text-white text-center font-black lg:text-6xl">
            we deliver your brand promise
          </h2>
          <h3 className="capitalize text-white text-center mt-10 lg:text-3xl">
            hands-free and day delivery
          </h3>
          <div class="flex justify-center rounded-lg text-lg mt-20">
            <button class="bg-green-500 text-white hover:bg-green-300 px-14 py-2 mx-5 focus:outline-none focus:ring">
              Partner with us
            </button>
            <button class="bg-white text-green-500 hover:opacity-80 px-14 py-5 mx-5 flex items-center focus:outline-none focus:ring">
              <FaPlay size={20} className="mr-2" />
              Watch
            </button>
          </div>
        </header>
      </div>
    </div>
  )
}
