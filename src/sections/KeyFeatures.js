import React from "react"
import FeatureCardColumn from "../components/FeatureCardColumn"
import Performance from "../images/face.png"

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Fast Performance",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Fast Performance",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Fast Performance",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
]

export default function KeyFeatures() {
  return (
    <div className="bg-gray-600 p-10">
      <section className=" grid gap-4 grid-cols-3 container mx-auto">
        {data.map(item => (
          <FeatureCardColumn
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
      </section>
    </div>
  )
}
