import React from "react"

// Styled component
import {
  Nav,
  NavList,
  NavFooter,
  NavBackground,
} from "../styles/navigationStyles"
import { Container } from "../styles/globalStyles"

// Component
import Footer from "./footer"
import { Link } from "gatsby"

const NAV_ROUTE = [
  {
    id: 0,
    title: "home",
    link: "#",
    backgroundVideo: "banner-video.mp4",
  },
  {
    id: 1,
    title: "about",
    link: "#",
    backgroundVideo: "interior.mp4",
  },
  {
    id: 2,
    title: "services",
    link: "#",
    backgroundVideo: "featured-video.mp4",
  },
  {
    id: 3,
    title: "get in touch",
    link: "#",
    backgroundVideo: "apartment.mp4",
  },
]

const Navigation = ({ onCursor }) => {
  return (
    <Nav
      onClick={() => {
        console.log("Nav")
      }}
    >
      <Container>
        <NavList>
          <ul>
            {NAV_ROUTE.map((route) => (
              <li
                key={route.id}
                onClick={() => {
                  console.log("link")
                }}
              >
                <Link
                  to={route.link}
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={onCursor}
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </NavList>
      </Container>
      <NavBackground
        onMouseEnter={() => onCursor("expanded", "close")}
        onMouseLeave={onCursor}
      ></NavBackground>
      <NavFooter>
        <Footer onCursor={onCursor} noMarginTop />
      </NavFooter>
    </Nav>
  )
}

export default Navigation
