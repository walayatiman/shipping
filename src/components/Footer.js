import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"
import { BiMessageAltCheck } from "react-icons/bi"

export default function Footer() {
  return (
    <section>
      <div className="bg-gray-700">
        <div className="container mx-auto">
          <div className="flex items-center justify-center text-xl py-8">
            <p className="text-white">
              Driven to deliver? Join our <strong>Good Guy</strong> Network.
            </p>
            <BsArrowRight className="text-green-200 ml-4" size={30} />
          </div>
        </div>
      </div>
      <div className="bg-green-700 py-20">
        <div className="container mx-auto py-8 flex">
          <div className="flex-1">
            <StaticImage
              src="../images/logo.png"
              layout="fixed"
              height={150}
              alt="bed"
              placeholder="blurred"
              quality="100"
              className=""
            />
          </div>
          <div className="flex-1">
            <h2 className="text-white text-2xl font-extrabold mb-6">
              Solutions
            </h2>
            <ul>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Instant Delivery
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Same Day Delivery
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Return and Reverse
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Assembly & Installation
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                White Glove Service
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-white text-2xl font-extrabold mb-6">
              User Cases
            </h2>
            <ul>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Curated Last Mile Deliver
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Customer Service Recovery
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Buy Online Pickup In Store
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Buy Anywhere, Deliver Anywhere
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Transportation Management
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-white text-2xl font-extrabold mb-6">
              Industries
            </h2>
            <ul>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Retail
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Automotive
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                HVAC & Plumbing
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Construction
              </li>
              <li className="flex items-center text-white text-lg my-2">
                <BiMessageAltCheck className="text-white mr-2" />
                Healthcare
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
