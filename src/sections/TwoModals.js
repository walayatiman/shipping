import React from "react"
import { FaGrunt } from "react-icons/fa"
import { FaJediOrder } from "react-icons/fa"

export default function TwoModals() {
  return (
    <div className="container mx-auto py-20 flex my-40">
      <section className="flex-initial w-2/12 mr-20">
        <span>
          <FaGrunt size={90} className="mx-auto" style={{ fill: "#065f46" }} />
        </span>
        <p className="text-green-800 capitalize text-lg font-black my-5">
          Flexible Management
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section className="flex-initial w-2/12">
        <span>
          <FaJediOrder
            size={90}
            className="mx-auto"
            style={{ fill: "#065f46" }}
          />
        </span>
        <p className="text-green-800 capitalize text-lg font-black my-5">
          Manage Risk
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
    </div>
  )
}
