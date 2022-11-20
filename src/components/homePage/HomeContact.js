import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Styled components
import { Container } from "../../styles/globalStyles"
import { HomeContactSection, Contact } from "../../styles/homeStyles"

const HomeContact = ({ onCursor }) => {
  const [hovered, setHovered] = useState(false)

  const onMouseEnter = () => {
    onCursor("expanded", "contact")
    setHovered(true)
  }
  const onMouseLeave = () => {
    onCursor()
    setHovered(false)
  }

  return (
    <HomeContactSection onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Container>
        <Contact>
          let’s work together{" "}
          <motion.span
            animate={{
              width: hovered ? "100%" : 0,
              transition: {
                duration: 0.6,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            }}
          ></motion.span>
        </Contact>
      </Container>
    </HomeContactSection>
  )
}

export default HomeContact
