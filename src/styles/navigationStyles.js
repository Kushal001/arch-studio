import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: block;
  color: #000;
  z-index: 100;
  overflow: hidden;

  /* display: none; */
`

export const NavList = styled.div`
  /* margin-left: 120px; */
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  ul {
    padding: 0;
    z-index: 102;
    margin: 0;
    margin-top: -40px;
    pointer-events: none;

    li {
      list-style: none;
      pointer-events: all;
      width: fit-content;
      font-size: 15vh;
      text-transform: capitalize;
      line-height: 141.8%;

      @media only screen and (max-width: 768px) {
        font-size: 9rem;
      }

      @media only screen and (max-width: 576px) {
        font-size: 5rem;
      }

      @media only screen and (max-width: 480px) {
        font-size: 6.4rem;
      }

      a {
        color: #000;

        transition: color 0.2s ease-in-out;
        will-change: color;
      }

      a:hover {
        color: ${(props) => props.theme.colorPrimary};
      }
    }
  }
`

export const NavFooter = styled.div`
  z-index: 102;
  position: absolute;
  left: 0;
  bottom: 8px;
  width: 100%;
`

export const NavBackground = styled.div`
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  video {
    object-fit: cover;
  }
`
