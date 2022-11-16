import React, { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Styled components
import { Container } from "../../styles/globalStyles"
import { HomeAboutSection, About } from "../../styles/homeStyles"

const HomeAbout = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [inView, animation])

  return (
    <HomeAboutSection
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: 72,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        },
      }}
    >
      <Container>
        <About>
          Architecture and interior design studio based in Vancouver, BC. We use
          design to create thoughtful and beautiful living spaces for people.
        </About>
      </Container>
    </HomeAboutSection>
  )
}

export default HomeAbout
