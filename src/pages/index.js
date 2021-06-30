import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Brand from "../sections/Brand"
import CallToAction from "../sections/CallToAction"
import Delivered from "../sections/Delivered"
import Hero from "../sections/Hero"
import OverlapInfo from "../sections/OverlapInfo"
import Overlapleft from "../sections/Overlapleft"
import Reviews from "../sections/Reviews"
import Sponsors from "../sections/Sponsors"
import TwoModals from "../sections/TwoModals"
import Cta from "../sections/Cta"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OverlapInfo />
      <Delivered />
      <TwoModals />
      <Overlapleft />
      <Reviews />
      <Sponsors />
      <CallToAction />
      <Brand />
      <Cta />
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
