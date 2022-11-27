import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const Container = styled(motion.div)`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: 95%;
  height: 100%;

  /* @media only screen and (max-width: 990px) {
    width: 100%;
  } */
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
    props.center &&
    css`
      justify-content: center;
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

    ${(props) =>
    props.column &&
    css`
      flex-direction: column;
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

  transition: width 0.2s ease, height 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;

  @media only screen and (max-width: 992px) {
    display: none;
  }

  &.hovered {
    width: 43px;
    height: 43px;
    background: transparent !important;
    border: 3px solid ${(props) => props.theme.colorPrimary};
  }

  &.expanded {
    width: 120px;
    height: 120px;
    font-size: 1.6rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
