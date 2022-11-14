import styled from "styled-components"

export const HeaderNav = styled.div`
  font-family: "medium";
  font-size: 1.6rem;

  height: 0;
  width: 100%;
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  z-index: 99;

  p {
    text-transform: capitalize;
  }
`

export const Logo = styled.div`
  a {
    font-family: "semiBold";
    font-size: 1.8rem;
    color: ${(props) => props.theme.textWhite};
  }
`

export const Menu = styled.div`
  button {
    /* font-size: 1.6rem; */
    background: none;
    border: none;
    outline: none;
    display: block;

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
