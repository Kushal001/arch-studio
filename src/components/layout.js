import React from "react"

// Components
import Header from "./header"
import Cursor from "./customCursor"

// Assets
import semiBold from "../assets/fonts/Gilroy-SemiBold.woff"
import medium from "../assets/fonts/Gilroy-Medium.woff"

// Styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyle = createGlobalStyle`
    ${normalize}

* {
  text-decoration: none;
  box-sizing: border-box;
  /* cursor: none; */
}

/* Fonts */
@font-face {
  font-family: 'semiBold';
  src: url(${semiBold}) format("woff2");
}

@font-face {
  font-family: 'medium';
  src: url(${medium}) format("woff2");
}

html {
  font-family: 'semiBold', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%
}

body {
  background: #fff;
  overscroll-behavior: none;
  overflow-x: hidden;
}
`

const Layout = ({ children }) => {
  const theme = {
    textWhite: "#fff",
    lightGray3: "#C8C7CC",
    gray5: "#E6E5EA",
    colorPrimary: "#FBE7CC",
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Cursor />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
