import React, { useState, useEffect, useRef } from "react"

// Styled component
import { Cursor } from "../styles/globalStyles"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  const cursorRef = useRef()

  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event
    setMousePosition({ x: x, y: y })
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <>
      <Cursor
        ref={cursorRef}
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
          transition: {
            duration: 0.1,
            ease: "linear",
          },
        }}
      ></Cursor>
    </>
  )
}

export default CustomCursor
