import React from "react"
import { motion } from "framer-motion"

// Styled component
import { Container } from "../../styles/globalStyles"
import { Banner, BannerTitle, Headline, Video } from "../../styles/homeStyles"

const HomeBanner = () => {
  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video
          width="100%"
          height="100%"
          loop
          autoPlay
          muted
          src={require("../../assets/video/banner-video.mp4").default}
        ></video>
      </Video>
      <BannerTitle>
        <Container>
          <motion.div variants={parent} initial="initial" animate="animate">
            <Headline variants={child}>Living</Headline>
            <Headline variants={child}>Beautifully</Headline>
          </motion.div>
        </Container>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
