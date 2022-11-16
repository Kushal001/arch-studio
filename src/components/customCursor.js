import React, { useState, useEffect, useRef } from "react"

// Styled component
import { Cursor } from "../styles/globalStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  const cursorRef = useRef()
  const { cursorType, cursorText } = useGlobalStateContext()

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
        className={!!cursorType ? cursorType : ""}
        ref={cursorRef}
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
          transition: {
            duration: 0.1,
            ease: "linear",
          },
        }}
      >
        {!!cursorText ? cursorText : ""}
      </Cursor>
    </>
  )
}

export default CustomCursor
