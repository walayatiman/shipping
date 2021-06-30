import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="dark overflow-hidden">
      <Navbar />
      <div>{children}</div>

      <Footer />
    </div>
  )
}
