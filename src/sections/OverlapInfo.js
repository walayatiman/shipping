import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"

export default function OverlapInfo() {
  return (
    <div className="flex w-2/4 mx-auto lg:-mt-28 shadow-xl">
      <div className="bg-gray-100 p-14">
        <StaticImage
          src="../images/pickup.jpg"
          width={600}
          alt="bed"
          placeholder="blurred"
          quality="100"
          className=""
        />
      </div>
      <div className="bg-white px-14 py-8">
        <h2 className="text-4xl text-green-600 font-bold leading-normal mb-4">
          Are you a Medium to Larged Size Business?
        </h2>
        <p className=" text-gray-400 text-xl leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="flex justify-between">
          <p className="underline text-gray-400 text-lg">Case Study</p>
          <p className="underline text-gray-400 text-lg">Reviews</p>
          <p className="text-green-600 text-lg font-extrabold flex items-center">
            Get Started <BsArrowRight />
          </p>
        </div>
      </div>
    </div>
  )
}
