import React from "react"

// Components
import Layout from "../components/layout"
import HomeBanner from "../components/homePage/HomeBanner"
import HomeAbout from "../components/homePage/HomeAbout"
import HomeServices from "../components/homePage/HomeServices"
import HomeFeatured from "../components/homePage/HomeFeatured"
import HomeContact from "../components/homePage/HomeContact"

// Global context
import { useGlobalDispatchContext } from "../context/globalContext"

const CURSOR_STYLES = ["pointer", "hovered", "expanded"]

const IndexPage = () => {
  const dispatch = useGlobalDispatchContext()

  const onCursor = (cursorType, cursorText = "") => {
    cursorType = (CURSOR_STYLES.includes(cursorType) && cursorType) || false

    dispatch({ type: "CURSOR_TYPE", cursorType, cursorText })
  }

  return (
    <Layout>
      <HomeBanner />
      <HomeAbout />
      <HomeServices />
      <HomeFeatured />
      <HomeContact onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Arch. Studio</title>
