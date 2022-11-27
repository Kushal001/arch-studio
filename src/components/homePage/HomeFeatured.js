import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// Styled component
import { Flex } from "../../styles/globalStyles"
import {
  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
} from "../../styles/homeStyles"

const HomeFeatured = () => {
  const animation = useAnimation()
  const [featuredRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeFeaturedSection
      ref={featuredRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <FeaturedVideo>
        <img src={require("../../images/featured-img.jpg").default}></img>

        <video
          // width="100%"
          // height="100%"
          loop
          autoPlay
          muted
          src={require("../../assets/video/featured-video.mp4").default}
        ></video>
      </FeaturedVideo>

      <FeaturedContent>
        <Flex spaceBetween column maxHeight>
          <caption>Featured Content</caption>
          <h2>
            Traditional <br /> Japanese House
          </h2>
          <p>
            Courtyard House by Ha Architecture is a Japanese inspired home,
            presented as a merging of heritage and contemporary design.
          </p>
        </Flex>
      </FeaturedContent>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured
