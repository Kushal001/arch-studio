import React, { useEffect, useState } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Styled components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeServicesSection,
  Service,
  ServiceHeader,
  ServiceContent,
  ServiceVideo,
  ServiceCaption,
} from "../../styles/homeStyles"

const SERVICES = [
  {
    id: 0,
    title: "architecture design",
    video: "architecture-design.mp4",
    caption: "designed for sustainability",
  },
  {
    id: 1,
    title: "interior design",
    video: "interior-design.mp4",
    caption: "designed for sustainability",
  },
  {
    id: 2,
    title: "villa and cabin design",
    video: "cabin.mp4",
    caption: "designed for sustainability",
  },
  {
    id: 3,
    title: "apartment interior design",
    video: "apartment.mp4",
    caption: "designed for sustainability",
  },
]

const HomeServices = () => {
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [inView, animation])

  return (
    <HomeServicesSection
      ref={contentRef}
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
      initial="hidden"
      animate={animation}
    >
      <Container>
        <h4>Services</h4>

        <span></span>

        {SERVICES.map((service) => (
          <Services service={service} />
        ))}
      </Container>
    </HomeServicesSection>
  )
}

const Services = ({ service }) => {
  const isContentReverse = service.id % 2 === 0

  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <Service
        onMouseEnter={() => setShowVideo(true)}
        onMouseLeave={() => setShowVideo(false)}
      >
        <ServiceHeader>
          <motion.div
            animate={{
              y: showVideo ? -120 : 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          >
            {service.title}
          </motion.div>
        </ServiceHeader>
        <ServiceContent>
          <Flex maxHeight spaceBetween reverseContent={!isContentReverse}>
            <ServiceVideo>
              <motion.div
                animate={{
                  y: showVideo ? "-100% " : 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: showVideo ? 0.1 : 0,
                  },
                }}
                className="mask"
              ></motion.div>
              <video
                width="100%"
                height="100%"
                autoPlay
                muted
                loop
                src={require(`../../assets/video/${service.video}`).default}
              ></video>
            </ServiceVideo>

            <ServiceCaption
              animate={{
                opacity: showVideo ? 1 : 0,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: showVideo ? 0.1 : 0,
                },
              }}
            >
              designed for <br /> sustainability
            </ServiceCaption>
          </Flex>
        </ServiceContent>
      </Service>

      <span></span>
    </>
  )
}

export default HomeServices
