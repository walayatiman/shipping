import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Sponsors() {
  return (
    <div className="container mx-auto py-20">
      <div className="w-3/4">
        <h2 className="font-black mb-20 text-center">Our Partners</h2>
        <div className="flex items-center filter grayscale">
          <StaticImage
            src="../images/razer.png"
            layout="fixed"
            width={250}
            alt="bed"
            placeholder="blurred"
            quality="100"
            className="mr-10"
          />
          <StaticImage
            src="../images/amd.png"
            layout="fixed"
            width={250}
            alt="bed"
            placeholder="blurred"
            quality="100"
            className="mr-10"
          />
          <StaticImage
            src="../images/corsair.png"
            layout="fixed"
            width={250}
            alt="bed"
            placeholder="blurred"
            quality="100"
            className="mr-10"
          />
        </div>
        <div className="flex items-center mt-20 filter grayscale">
          <StaticImage
            src="../images/intel.png"
            layout="fixed"
            width={250}
            alt="bed"
            placeholder="blurred"
            quality="100"
            className="mr-10"
          />
          <StaticImage
            src="../images/msi.png"
            layout="fixed"
            width={250}
            alt="bed"
            placeholder="blurred"
            quality="100"
            className="mr-10"
          />
          <StaticImage
            src="../images/nvidia.png"
            layout="fixed"
            width={250}
            alt="bed"
            placeholder="blurred"
            quality="100"
            className="mr-10"
          />
        </div>
      </div>
    </div>
  )
}
