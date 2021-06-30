import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FcComboChart } from "react-icons/fc"
import { FcAndroidOs } from "react-icons/fc"
import { FcLineChart } from "react-icons/fc"

export default function Overlapleft() {
  return (
    <div className="container mx-auto py-20 custom-height">
      <section className="flex">
        <div className="flex-1">
          <StaticImage
            src="../images/deliver.jpg"
            width={650}
            alt="bed"
            placeholder="blurred"
            quality="100"
            className="left-0 absolute"
          />
        </div>
        <div className="flex-1 px-10">
          <h2 className="font-black mb-5">Proof on Display</h2>
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
      </section>
    </div>
  )
}
