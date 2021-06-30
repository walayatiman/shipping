import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FcComboChart } from "react-icons/fc"
import { FcAndroidOs } from "react-icons/fc"
import { FcLineChart } from "react-icons/fc"

export default function Delivered() {
  return (
    <div className="container mx-auto py-20 custom-height">
      <section className="mb-40">
        <h2 className="text-center text-3xl font-black mb-5">
          From Ordered To Delivered
        </h2>
        <h3 className="text-center text-2xl font-medium mb-5 text-gray-500">
          Our Proven Delivery System
        </h3>
      </section>
      <section className="flex">
        <div className="flex-1 px-10">
          <h2 className="font-black mb-5">Benefits Your Way</h2>
          <hr className="w-32 border-t-4 border-green-600" />
          <p className="text-xl my-10 text-green-800 capitalize tracking-normal w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex my-24">
            <section className="flex-initial text-center w-2/12 mr-20">
              <span>
                <FcComboChart size={90} className="mx-auto" />
              </span>
              <p className="text-green-800 capitalize text-lg">
                Lorem ipsum dolor
              </p>
            </section>
            <section className="flex-initial text-center w-2/12 mr-20">
              <span>
                <FcAndroidOs size={90} className="mx-auto" />
              </span>
              <p className="text-green-800 capitalize text-lg">
                Lorem ipsum dolor
              </p>
            </section>
            <section className="flex-initial text-center w-2/12">
              <span>
                <FcLineChart size={90} className="mx-auto" />
              </span>
              <p className="text-green-800 capitalize text-lg">
                Lorem ipsum dolor
              </p>
            </section>
          </div>
          <p className="text-2xl text-center italic text-gray-500 my-24 w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex-1">
          <StaticImage
            src="../images/bed.jpg"
            width={650}
            alt="bed"
            placeholder="blurred"
            quality="100"
            className="right-0 absolute"
          />
        </div>
      </section>
    </div>
  )
}
