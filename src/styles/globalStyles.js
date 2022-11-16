import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: 95%;
  height: 100%;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.maxHeight &&
    css`
      height: 100%;
    `}

    ${(props) =>
    props.reverseContent &&
    css`
      flex-direction: row-reverse;
    `}
`

// Cursor
export const Cursor = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colorPrimary};
  transform: translate(-50%, -50%);
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`
