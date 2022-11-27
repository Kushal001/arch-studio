import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  font-family: "medium";
  font-size: 1.6rem;

  height: 0;
  width: 100%;
  position: absolute;
  top: 16px;
  left: 0;
  right: 0;
  z-index: 99;

  p {
    text-transform: capitalize;
    color: ${(props) => props.theme.textWhite};

    @media only screen and (max-width: 992px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`

export const Logo = styled.div`
  a {
    font-family: "semiBold";
    font-size: 1.8rem;
    color: ${(props) => props.theme.textWhite};

    @media only screen and (max-width: 992px) {
      font-size: 1.4rem;
    }
  }
`

export const Menu = styled.div`
  button {
    /* font-size: 1.6rem; */
    background: none;
    border: none;
    outline: none;
    display: block;
    cursor: pointer;

    span {
      text-align: center;
      display: block;
      height: 3px;
      width: 24px;
      margin: 4px 0;
      background: ${(props) => props.theme.textWhite};
    }
  }
`
