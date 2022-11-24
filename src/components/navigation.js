import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
    backgroundVideo: "interior-design.mp4",
  },
  {
    id: 2,
    title: "services",
    link: "#",
    backgroundVideo: "cabin.mp4",
  },
  {
    id: 3,
    title: "get in touch",
    link: "#",
    backgroundVideo: "apartment.mp4",
  },
]

const Navigation = ({ onCursor, toggleMenu, setToggleMenu }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "apartment.mp4",
    key: 0,
  })

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ y: "-100%" }}
            exit={{ y: "-100%" }}
            animate={{ y: toggleMenu ? 0 : "-100%" }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <Container>
              <NavList>
                <ul>
                  {NAV_ROUTE.map((route) => (
                    <li key={route.id}>
                      <Link
                        to={route.link}
                        onMouseEnter={() => {
                          onCursor("hovered")
                          setRevealVideo({
                            show: true,
                            video: route.backgroundVideo,
                            key: route.id,
                          })
                        }}
                        onMouseLeave={() => {
                          onCursor("")
                          setRevealVideo({
                            show: false,
                            video: route.backgroundVideo,
                            key: route.id,
                          })
                        }}
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
              onClick={() => setToggleMenu(false)}
            >
              <AnimatePresence initial={true} exitBeforeEnter>
                {revealVideo.show && (
                  <motion.video
                    key={revealVideo.key}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    src={
                      require(`../assets/video/${revealVideo.video}`).default
                    }
                    width="100%"
                    height="100%"
                    autoPlay
                    muted
                    loop
                  ></motion.video>
                )}
              </AnimatePresence>
            </NavBackground>

            <NavFooter>
              <Footer onCursor={onCursor} noMarginTop />
            </NavFooter>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
