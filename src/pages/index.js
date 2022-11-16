import React from "react"

// Components
import Layout from "../components/layout"
import HomeBanner from "../components/homePage/HomeBanner"
import HomeAbout from "../components/homePage/HomeAbout"
import HomeServices from "../components/homePage/HomeServices"

const IndexPage = () => {
  return (
    <Layout>
      <HomeBanner />
      <HomeAbout />
      <HomeServices />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Arch. Studio</title>
