import styled, { css } from "styled-components"

export const FooterSection = styled.div`
  font-size: 1.6rem;
  margin-top: 200px;
  margin-bottom: 16px;

  ${(props) =>
    props.noMarginTop &&
    css`
      margin-top: 0;
    `}

  @media only screen and (max-width: 768px) {
    display: none;
    margin-top: 164px;
  }

  /* @media only screen and (max-width: 576px) {
      font-size: 3.2rem;
    } */
`

export const Socials = styled.div``

export const SocialLink = styled.a`
  text-decoration: none;
  text-transform: capitalize;

  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.textDark};

  &:not(:last-child) {
    margin-right: 64px;
  }

  &:link,
  &:visited,
  &:active {
    color: ${(props) => props.theme.textDark};
  }

  &:hover {
    color: ${(props) => props.theme.colorPrimary};
  }
`

export const LinkTree = styled.div`
  width: 100%;
  margin: 24px auto;
  text-align: center;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    margin-top: 164px;
  }

  a {
    background-color: beige;
    font-size: 1.4rem;
    padding: 12px 32px;
    border-radius: 100px;
    color: #000;
  }

  a:active,
  a:link,
  a:visited {
    color: #000;
  }
`
