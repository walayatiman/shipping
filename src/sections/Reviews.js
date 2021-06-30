import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { IoIosArrowRoundForward } from "react-icons/io"
import { FiPlay } from "react-icons/fi"
import { useState } from "react"
import ModalVideo from "react-modal-video"
import "../../node_modules/react-modal-video/scss/modal-video.scss"

export default function Reviews() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className=" container mx-auto py-20 flex">
      <div className="w-1/2">
        <h2 className="font-black mb-5">Proof on Display</h2>
        <hr className="w-32 border-t-4 border-green-600" />
        <p className="text-xl my-10 text-green-800 capitalize tracking-normal w-8/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="my-28">
          <div className="bg-aqua-bg h-96 bg-cover bg-center flex justify-center items-center">
            {/* <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="jEe32t52CAw"
              onClose={() => setOpen(false)}
            />

            <button
              className="btn-primary bg-pink-500 p-6 rounded-full animate-pulse"
              onClick={() => setOpen(true)}
            >
              <FiPlay size={25} className="text-white" />
            </button> */}
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="pl-14  max-w-md custom-blue-bg border-2 border-gray-300 p-5 rounded-2xl tracking-wide shadow-lg mb-24">
          <div id="header" className="flex">
            <StaticImage
              src="../images/face1.jpg"
              layout="fixed"
              width={100}
              height={100}
              alt="bed"
              placeholder="blurred"
              quality="100"
              className="absolute -ml-24 rounded-full border-4 border-green-400"
            />

            <div id="body" className="flex flex-col ml-5 text-white">
              <div className="flex justify-between items-center">
                <h4 id="name" className="text-xl font-semibold mb-2">
                  Janine
                </h4>
                <div className="flex justify-center items-center">
                  <div className="flex items-center mt-2 mb-4">
                    <svg
                      className="mx-1 w-4 h-4 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="mx-1 w-4 h-4 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="mx-1 w-4 h-4 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="mx-1 w-4 h-4 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="mx-1 w-4 h-4 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p id="job" className="text-white mt-2">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex mt-5 items-center">
                <p className=" font-extrabold">Read Full Review</p>
                <IoIosArrowRoundForward size={25} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="pl-14  ml-auto max-w-md custom-blue-bg border-2 border-gray-300 p-5 rounded-2xl tracking-wide shadow-lg text-white">
          <div id="header" className="flex">
            <StaticImage
              src="../images/face2.jpg"
              layout="fixed"
              width={100}
              height={100}
              alt="bed"
              placeholder="blurred"
              quality="100"
              className="absolute -ml-24 rounded-full border-4 border-green-400"
            />

            <div id="body" className="flex flex-col ml-5">
              <div className="flex justify-between items-center">
                <h4 id="name" className="text-xl font-semibold mb-2">
                  Leah
                </h4>
                <div className="flex justify-center items-center">
                  <div className="flex items-center mt-2 mb-4">
                    <svg
                      className="mx-1 w-4 h-4 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="mx-1 w-4 h-4 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="mx-1 w-4 h-4 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="mx-1 w-4 h-4 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="mx-1 w-4 h-4 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p id="job" className="text-white mt-2">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex mt-5 items-center">
                <p className=" font-extrabold">Read Full Review</p>
                <IoIosArrowRoundForward size={25} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
